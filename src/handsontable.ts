/* tslint:disable:no-any */
import { OnInit, OnDestroy, OnChanges, SimpleChanges, Directive, EventEmitter,
  ElementRef, Input, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import * as Handsontable from 'handsontable/dist/handsontable.full.js';

// tslint:disable-next-line:max-line-length
const eventNames: string[] = ['afterAddChild', 'afterBeginEditing', 'afterCellMetaReset', 'afterChange', 'afterChangesObserved', 'afterColumnMove', 'afterColumnResize', 'afterColumnSort', 'afterContextMenuDefaultOptions', 'afterContextMenuHide', 'afterContextMenuShow', 'afterCopy', 'afterCopyLimit', 'afterCreateCol', 'afterCreateRow', 'afterCut', 'afterDeselect', 'afterDestroy', 'afterDetachChild', 'afterDocumentKeyDown', 'afterDropdownMenuDefaultOptions', 'afterDropdownMenuHide', 'afterDropdownMenuShow', 'afterePaste', 'afterFilter', 'afterGetCellMeta', 'afterGetColHeader', 'afterGetColumnHeaderRenderers', 'afterGetRowHeader', 'afterGetRowHeaderRenderers', 'afterInit', 'afterLoadData', 'afterModifyTransformEnd', 'afterModifyTransformStart', 'afterMomentumScroll', 'afterOnCellCornerDblClick', 'afterOnCellCornerMouseDown', 'afterOnCellMouseDown', 'afterOnCellMouseOver', 'afterOnCellMouseOver', 'afterPluginsInitialized', 'afterRedo', 'afterRemoveCol', 'afterRemoveRow', 'afterRender', 'afterRenderer', 'afterRowMove', 'afterRowResize', 'afterScrollHorizontally', 'afterScrollVertically', 'afterSelection', 'afterSelectionByProp', 'afterSelectionEnd', 'afterSelectionEndByProp', 'afterSetCellMeta', 'afterSetDataAtCell', 'afterSetDataAtRowProp', 'afterTrimRow', 'afterUndo', 'afterUntrimRow', 'afterUpdateSettings', 'afterValidate', 'afterViewportColumnCalculatorOverride', 'afterViewportRowCalculatorOverride', 'beforeAddChild', 'beforeAutofill', 'beforeAutofillInsidePopulate', 'beforeCellAlignment', 'beforeChange', 'beforeChangeRender', 'beforeColumnMove', 'beforeColumnResize', 'beforeColumnSort', 'beforeContextMenuSetItems', 'beforeCopy', 'beforeCreateCol', 'beforeCreateRow', 'beforeCut', 'beforeDetachChild', 'beforeDrawBorders', 'beforeDropdownMenuSetItems', 'beforeFilter', 'beforeGetCellMeta', 'beforeInit', 'beforeInitWalkontable', 'beforeKeyDown', 'beforeOnCellMouseDown', 'beforeOnCellMouseOut', 'beforeOnCellMouseOver', 'beforePaste', 'beforeRedo', 'beforeRemoveCol', 'beforeRemoveRow', 'beforeRender', 'beforeRenderer', 'beforeRowMove', 'beforeRowResize', 'beforeSetRangeEnd', 'beforeSetRangeStart', 'beforeStretchingColumnWidth', 'beforeTouchScroll', 'beforeUndo', 'beforeValidate', 'beforeValueRender', 'beforeValueRender', 'construct', 'hiddenColumn', 'hiddenRow', 'init', 'manualRowHeights', 'modifyAutofillRange', 'modifyCol', 'modifyColHeader', 'modifyColumnHeaderHeight', 'modifyColWidth', 'modifyCopyableRange', 'modifyData', 'modifyRow', 'modifyRowHeader', 'modifyRowHeaderWidth', 'modifyRowHeight', 'modifyRowSourceData', 'modifyTransformEnd', 'modifyTransformStart', 'persistentStateLoad', 'persistentStateReset', 'persistentStateSave', 'skipLengthCache', 'unmodifyCol', 'unmodifyRow'];

@Directive({
  selector: 'hot-table',
  // tslint:disable-next-line:use-output-property-decorator
  outputs: eventNames
})
// tslint:disable-next-line:directive-class-suffix
export class HotTable implements OnInit, OnDestroy, OnChanges {
  @Input() private data: any[] = [];
  @Input() private pagedData: Observable<any[]>;
  @Input() private colHeaders: string[];
  @Input() private columns: any[];
  @Input() private colWidths: number[];
  @Input() private options: any;

  private inst: any;
  private view: any;
  private pagedDataSubscription: Subscription;
  private zoneQueue: (() => void)[] = [];
  private zoneQueueTimeout = 0;

  constructor(private element: ElementRef, private ngZone: NgZone) {
    // fill events dynamically
    eventNames.forEach((eventName: string) => {
      (this as any)[eventName] = new EventEmitter();
    });
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

    if (this.pagedData) {
      this.data = [];
      this.pagedDataSubscription = this.pagedData.subscribe((newPagedData: any) => {
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

  private parseAutoComplete(options: any) {
    const inst = this.inst;
    const columns = this.columns || options.columns;
    const dataSet = options.data;

    if (columns) {
      columns.forEach((column: any) => {
        if (typeof column.source === 'string') {
          const relatedField: string = column.source;
          column.source = (_query: any, process: any) => {
            const row: number = inst.getSelected()[0];
            const data: any = dataSet[row];

            if (!data) {
              return;
            }

            const fieldParts: string[] = relatedField.split('.');
            let o: any = data;
            for (const part of fieldParts) {
              o = o[part];
            }

            process(o.map((item: any) => {
              return !column.optionField ? item : item[column.optionField];
            }));
          };
        }
      });
    }
  }

  private checkInputs(): boolean {
    const dataCount = Number(!!this.pagedData) + Number(!!this.data) +
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
    const htOptions: any = {
      data: this.data || null
    };

    eventNames.forEach(eventName => {
      // Only register the event if the emitter has an observer (i.e., if the output is actually being used)
      if ((this as any)[eventName].observers.length) {
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

    const additionalFields: string[] = ['colHeaders', 'colWidths', 'columns'];
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
