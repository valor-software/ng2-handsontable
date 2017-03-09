import {OnInit, OnDestroy, OnChanges, SimpleChanges, Directive, EventEmitter,
  ElementRef, Input, NgZone} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

let eventNames: string[] = ['afterCellMetaReset', 'afterChange',
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
  @Input() private data: Array<any> = [];
  @Input('pagedData') private pagedData$: Observable<Array<any>>;
  @Input('col-headers') protected colHeaders: Array<string>;
  @Input() protected columns: Array<any>;
  @Input('col-widths') protected colWidths: Array<number>;
  @Input() private options: any;

  private inst: any;
  private view: any;
  private pagedDataSubscription: Subscription;
  private zoneQueue: (() => void)[] = [];
  private zoneQueueTimeout: number = 0;

  constructor(private element: ElementRef, private ngZone: NgZone) {
    // fill events dynamically
    eventNames.forEach((eventName: string) => {
      (this as any)[eventName] = new EventEmitter();
    });
  }

  private parseAutoComplete(options: any) {
    let inst = this.inst;
    const columns = this.columns || options.columns;
    const dataSet = options.data;

    if (columns) {
      columns.forEach((column:any) => {
        if (typeof column.source === 'string') {
          let relatedField: string = column.source;
          column.source = function (_query:any, process:any) {
            let row: number = inst.getSelected()[0];
            let data: any = dataSet[row];

            if (!data) {
              return;
            }

            let fieldParts: Array<string> = relatedField.split('.');
            let o: any = data;
            for (let i = 0; i < fieldParts.length; i++) {
              o = o[fieldParts[i]];
            }

            process(o.map((item:any) => {
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
    if (this.view && this.view.parentElement) {
      this.view.parentElement.removeChild(this.view);
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
      // Only register the event if the emitter has an observer (i.e., if the output is actually being used)
      if (<EventEmitter<any[]>>(this as any)[eventName].observers.length) {
        htOptions[eventName] = (...args: any[]) => {
          let data: any[] = [];
          // Handsontable event handlers are always called with 6 arguments. Cut off any trailing undefined values.
          for (let index = args.length; index >= 0; index--) {
            if (args[index] !== void 0) {
              data = args.slice(0, index + 1);
              break;
            }
          }
          // Queue all emissions to only cause 1 Zone.run() call per tick.
          this.queueForRunningInZone(() => {
            (this as any)[eventName].emit(data);
          });
        };
      }
    });

    let additionalFields: Array<string> = ['colHeaders', 'colWidths', 'columns'];
    additionalFields.forEach(field => {
      if ((this as any)[field]) {
        Object.assign(htOptions, {
          [field]: (this as any)[field]
        });
      }
    });

    if (this.options) {
      Object.assign(htOptions, this.options);
    }

    return htOptions;
  }

  private queueForRunningInZone(fn: () => void): void {
    if (this.zoneQueueTimeout) {
      clearTimeout(this.zoneQueueTimeout);
    }
    this.zoneQueue.push(fn);
    this.zoneQueueTimeout = setTimeout(() => {
      this.ngZone.run(() => {
        this.zoneQueue.forEach((f: Function) => f());
      });
      this.zoneQueue = [];
      this.zoneQueueTimeout = 0;
    });
  }
}
