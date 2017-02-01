import {OnInit, OnDestroy, OnChanges, SimpleChanges, Directive, EventEmitter,
  ElementRef, Input, NgZone} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import * as Handsontable from 'handsontable/dist/handsontable.full.js';

let eventNames: Array<string> = ['afterCellMetaReset', 'afterChange',
  'afterCreateCol', 'afterCreateRow', 'afterDeselect',
  'afterDestroy', 'afterDocumentKeyDown', 'afterGetCellMeta', 'afterGetColHeader', 'afterGetRowHeader',
  'afterInit', 'afterIsMultipleSelectionCheck', 'afterLoadData',
  'afterMomentumScroll', 'afterOnCellCornerMouseDown',
  'afterOnCellMouseDown', 'afterOnCellMouseOver', 'afterRemoveCol', 'afterRemoveRow', 'afterRender',
  'afterRenderer', 'afterScrollHorizontally', 'afterScrollVertically',
  'afterSelection', 'afterSelectionByProp',
  'afterSelectionEnd', 'afterSelectionEndByProp', 'afterSetCellMeta', 'afterUpdateSettings', 'afterValidate',
  'beforeAutofill', 'beforeCellAlignment', 'beforeChange', 'beforeChangeRender', 'beforeDrawBorders',
  'beforeGetCellMeta', 'beforeInit', 'beforeInitWalkontable', 'beforeKeyDown', 'beforeOnCellMouseDown',
  'beforeRemoveCol', 'beforeRemoveRow', 'beforeRender', 'beforeSetRangeEnd', 'beforeTouchScroll',
  'beforeValidate', 'construct', 'init', 'modifyCol', 'modifyColWidth', 'modifyRow', 'modifyRowHeight',
  'persistentStateLoad', 'persistentStateReset', 'persistentStateSave'];

@Directive({
  selector: 'hot-table',
  outputs: eventNames
})
export class HotTable implements OnInit, OnDestroy, OnChanges {
  private inst: any;
  private view: any;
  private pagedDataSubscription: Subscription;

  @Input() private data: Array<any> = [];
  @Input('pagedData') private pagedData$: Observable<Array<any>>;
  @Input('col-headers') private colHeaders: Array<string>;
  @Input() private columns: Array<any>;
  @Input('col-widths') private colWidths: Array<number>;
  @Input() private options: any;

  constructor(private element: ElementRef, private ngZone: NgZone) {
    // fill events dynamically
    eventNames.forEach(eventName => {
      this[eventName] = new EventEmitter();
    });
  }

  private parseAutoComplete(options: any) {
    let inst = this.inst;
    const columns = this.columns || options.columns;
    const dataSet = options.data;

    if (columns) {
      columns.forEach(column => {
        if (typeof column.source === 'string') {
          let relatedField: string = column.source;
          column.source = function (query, process) {
            let row: number = inst.getSelected()[0];
            let data: any = dataSet[row];

            if (!data) {
              return;
            }

            let fieldParts: Array<string> = relatedField.split('.');
            let o:any = data;
            for (let i = 0; i < fieldParts.length; i++) {
              o = o[fieldParts[i]];
            }

            process(o.map(item => {
              return !column.optionField ? item : item[column.optionField];
            }));
          };
        }
      });
    }
  }

  ngOnInit() {
    this.checkInputs();

    this.view = document.createElement('div');
    this.view.class = 'handsontable-container';
    this.element.nativeElement.appendChild(this.view);

    const options = this.getCurrentOptions();

    this.ngZone.runOutsideAngular(() => {
      this.inst = new Handsontable(this.view, options);
    });

    this.parseAutoComplete(options);

    if (this.pagedData$) {
      this.data = [];
      this.pagedDataSubscription = this.pagedData$.subscribe((newPagedData) => {
        Array.prototype.push.apply(this.data, newPagedData);
        this.inst.loadData(this.data);
        this.parseAutoComplete(options);
        this.inst.updateSettings(options);
      });
    }
  }

  ngOnDestroy() {
    if (this.view) {
      this.view.remove();
    }
    if (this.pagedDataSubscription) {
      this.pagedDataSubscription.unsubscribe();
    }
    if (this.inst) {
      this.inst.destroy();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('options' in changes && this.inst) {
      this.inst.updateSettings(this.getCurrentOptions());
    }
    // tslint:disable-next-line:no-string-literal
    if (changes['data'] && !changes['data'].isFirstChange()) {
      this.inst.loadData(this.data);
    }
  }

  private checkInputs(): boolean {
    const dataCount = Number(!!this.pagedData$) + Number(!!this.data) +
      Number(!!(this.options && this.options.data));
    if (dataCount > 1) {
      console.error('[pagedData], [data] and [options.data] are all mutually' +
       ' exclusive');
      return false;
    } else if (dataCount === 0) {
      console.error('One of [pagedData], [data] and [options.data] needs' +
        ' to be provided');
      return false;
    }
  }

  private getCurrentOptions(): any {
    let htOptions: any = {
      data: this.data || null
    };

    eventNames.forEach(eventName => {
      htOptions[eventName] = data => {
        this[eventName].emit(data);
      };
    });

    let additionalFields: Array<string> = ['colHeaders', 'colWidths', 'columns'];
    additionalFields.forEach(field => {
      if (this[field]) {
        Object.assign(htOptions, {
          [field]: this[field]
        });
      }
    });

    if (this.options) {
      Object.assign(htOptions, this.options);
    }

    return htOptions;
  }
}

export const handsontable: Array<any> = [HotTable];
