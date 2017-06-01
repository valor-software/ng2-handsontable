/* tslint:disable:no-any */
import { OnInit, OnDestroy, OnChanges, SimpleChanges, Directive, EventEmitter,
  ElementRef, Input, NgZone } from '@angular/core';
import { Output } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import * as Handsontable from 'handsontable';

// tslint:disable-next-line:max-line-length
const eventNames: string[] = ['afterAddChild', 'afterBeginEditing', 'afterCellMetaReset', 'afterChange', 'afterChangesObserved', 'afterColumnMove', 'afterColumnResize', 'afterColumnSort', 'afterContextMenuDefaultOptions', 'afterContextMenuHide', 'afterContextMenuShow', 'afterCopy', 'afterCopyLimit', 'afterCreateCol', 'afterCreateRow', 'afterCut', 'afterDeselect', 'afterDestroy', 'afterDetachChild', 'afterDocumentKeyDown', 'afterDropdownMenuDefaultOptions', 'afterDropdownMenuHide', 'afterDropdownMenuShow', 'afterePaste', 'afterFilter', 'afterGetCellMeta', 'afterGetColHeader', 'afterGetColumnHeaderRenderers', 'afterGetRowHeader', 'afterGetRowHeaderRenderers', 'afterInit', 'afterLoadData', 'afterModifyTransformEnd', 'afterModifyTransformStart', 'afterMomentumScroll', 'afterOnCellCornerDblClick', 'afterOnCellCornerMouseDown', 'afterOnCellMouseDown', 'afterOnCellMouseOver', 'afterPluginsInitialized', 'afterRedo', 'afterRemoveCol', 'afterRemoveRow', 'afterRender', 'afterRenderer', 'afterRowMove', 'afterRowResize', 'afterScrollHorizontally', 'afterScrollVertically', 'afterSelection', 'afterSelectionByProp', 'afterSelectionEnd', 'afterSelectionEndByProp', 'afterSetCellMeta', 'afterSetDataAtCell', 'afterSetDataAtRowProp', 'afterTrimRow', 'afterUndo', 'afterUntrimRow', 'afterUpdateSettings', 'afterValidate', 'afterViewportColumnCalculatorOverride', 'afterViewportRowCalculatorOverride', 'beforeAddChild', 'beforeAutofill', 'beforeAutofillInsidePopulate', 'beforeCellAlignment', 'beforeChange', 'beforeChangeRender', 'beforeColumnMove', 'beforeColumnResize', 'beforeColumnSort', 'beforeContextMenuSetItems', 'beforeCopy', 'beforeCreateCol', 'beforeCreateRow', 'beforeCut', 'beforeDetachChild', 'beforeDrawBorders', 'beforeDropdownMenuSetItems', 'beforeFilter', 'beforeGetCellMeta', 'beforeInit', 'beforeInitWalkontable', 'beforeKeyDown', 'beforeOnCellMouseDown', 'beforeOnCellMouseOut', 'beforeOnCellMouseOver', 'beforePaste', 'beforeRedo', 'beforeRemoveCol', 'beforeRemoveRow', 'beforeRender', 'beforeRenderer', 'beforeRowMove', 'beforeRowResize', 'beforeSetRangeEnd', 'beforeSetRangeStart', 'beforeStretchingColumnWidth', 'beforeTouchScroll', 'beforeUndo', 'beforeValidate', 'beforeValueRender', 'construct', 'hiddenColumn', 'hiddenRow', 'init', 'manualRowHeights', 'modifyAutofillRange', 'modifyCol', 'modifyColHeader', 'modifyColumnHeaderHeight', 'modifyColWidth', 'modifyCopyableRange', 'modifyData', 'modifyRow', 'modifyRowHeader', 'modifyRowHeaderWidth', 'modifyRowHeight', 'modifyRowSourceData', 'modifyTransformEnd', 'modifyTransformStart', 'persistentStateLoad', 'persistentStateReset', 'persistentStateSave', 'skipLengthCache', 'unmodifyCol', 'unmodifyRow'];

@Directive({
  selector: 'hotTable'
})
// tslint:disable-next-line:directive-class-suffix
export class HotTable implements OnInit, OnDestroy, OnChanges {
  @Input() public data: any[] = [];
  @Input() public pagedData: Observable<any[]>;
  @Input() public colHeaders: string[];
  @Input() public columns: any[];
  @Input() public colWidths: number[];
  @Input() public options: any;

  @Output() public afterAddChild = new EventEmitter();
  @Output() public afterBeginEditing = new EventEmitter();
  @Output() public afterCellMetaReset = new EventEmitter();
  @Output() public afterChange = new EventEmitter();
  @Output() public afterChangesObserved = new EventEmitter();
  @Output() public afterColumnMove = new EventEmitter();
  @Output() public afterColumnResize = new EventEmitter();
  @Output() public afterColumnSort = new EventEmitter();
  @Output() public afterContextMenuDefaultOptions = new EventEmitter();
  @Output() public afterContextMenuHide = new EventEmitter();
  @Output() public afterContextMenuShow = new EventEmitter();
  @Output() public afterCopy = new EventEmitter();
  @Output() public afterCopyLimit = new EventEmitter();
  @Output() public afterCreateCol = new EventEmitter();
  @Output() public afterCreateRow = new EventEmitter();
  @Output() public afterCut = new EventEmitter();
  @Output() public afterDeselect = new EventEmitter();
  @Output() public afterDestroy = new EventEmitter();
  @Output() public afterDetachChild = new EventEmitter();
  @Output() public afterDocumentKeyDown = new EventEmitter();
  @Output() public afterDropdownMenuDefaultOptions = new EventEmitter();
  @Output() public afterDropdownMenuHide = new EventEmitter();
  @Output() public afterDropdownMenuShow = new EventEmitter();
  @Output() public afterePaste = new EventEmitter();
  @Output() public afterFilter = new EventEmitter();
  @Output() public afterGetCellMeta = new EventEmitter();
  @Output() public afterGetColHeader = new EventEmitter();
  @Output() public afterGetColumnHeaderRenderers = new EventEmitter();
  @Output() public afterGetRowHeader = new EventEmitter();
  @Output() public afterGetRowHeaderRenderers = new EventEmitter();
  @Output() public afterInit = new EventEmitter();
  @Output() public afterLoadData = new EventEmitter();
  @Output() public afterModifyTransformEnd = new EventEmitter();
  @Output() public afterModifyTransformStart = new EventEmitter();
  @Output() public afterMomentumScroll = new EventEmitter();
  @Output() public afterOnCellCornerDblClick = new EventEmitter();
  @Output() public afterOnCellCornerMouseDown = new EventEmitter();
  @Output() public afterOnCellMouseDown = new EventEmitter();
  @Output() public afterOnCellMouseOver = new EventEmitter();
  @Output() public afterPluginsInitialized = new EventEmitter();
  @Output() public afterRedo = new EventEmitter();
  @Output() public afterRemoveCol = new EventEmitter();
  @Output() public afterRemoveRow = new EventEmitter();
  @Output() public afterRender = new EventEmitter();
  @Output() public afterRenderer = new EventEmitter();
  @Output() public afterRowMove = new EventEmitter();
  @Output() public afterRowResize = new EventEmitter();
  @Output() public afterScrollHorizontally = new EventEmitter();
  @Output() public afterScrollVertically = new EventEmitter();
  @Output() public afterSelection = new EventEmitter();
  @Output() public afterSelectionByProp = new EventEmitter();
  @Output() public afterSelectionEnd = new EventEmitter();
  @Output() public afterSelectionEndByProp = new EventEmitter();
  @Output() public afterSetCellMeta = new EventEmitter();
  @Output() public afterSetDataAtCell = new EventEmitter();
  @Output() public afterSetDataAtRowProp = new EventEmitter();
  @Output() public afterTrimRow = new EventEmitter();
  @Output() public afterUndo = new EventEmitter();
  @Output() public afterUntrimRow = new EventEmitter();
  @Output() public afterUpdateSettings = new EventEmitter();
  @Output() public afterValidate = new EventEmitter();
  @Output() public afterViewportColumnCalculatorOverride = new EventEmitter();
  @Output() public afterViewportRowCalculatorOverride = new EventEmitter();
  @Output() public beforeAddChild = new EventEmitter();
  @Output() public beforeAutofill = new EventEmitter();
  @Output() public beforeAutofillInsidePopulate = new EventEmitter();
  @Output() public beforeCellAlignment = new EventEmitter();
  @Output() public beforeChange = new EventEmitter();
  @Output() public beforeChangeRender = new EventEmitter();
  @Output() public beforeColumnMove = new EventEmitter();
  @Output() public beforeColumnResize = new EventEmitter();
  @Output() public beforeColumnSort = new EventEmitter();
  @Output() public beforeContextMenuSetItems = new EventEmitter();
  @Output() public beforeCopy = new EventEmitter();
  @Output() public beforeCreateCol = new EventEmitter();
  @Output() public beforeCreateRow = new EventEmitter();
  @Output() public beforeCut = new EventEmitter();
  @Output() public beforeDetachChild = new EventEmitter();
  @Output() public beforeDrawBorders = new EventEmitter();
  @Output() public beforeDropdownMenuSetItems = new EventEmitter();
  @Output() public beforeFilter = new EventEmitter();
  @Output() public beforeGetCellMeta = new EventEmitter();
  @Output() public beforeInit = new EventEmitter();
  @Output() public beforeInitWalkontable = new EventEmitter();
  @Output() public beforeKeyDown = new EventEmitter();
  @Output() public beforeOnCellMouseDown = new EventEmitter();
  @Output() public beforeOnCellMouseOut = new EventEmitter();
  @Output() public beforeOnCellMouseOver = new EventEmitter();
  @Output() public beforePaste = new EventEmitter();
  @Output() public beforeRedo = new EventEmitter();
  @Output() public beforeRemoveCol = new EventEmitter();
  @Output() public beforeRemoveRow = new EventEmitter();
  @Output() public beforeRender = new EventEmitter();
  @Output() public beforeRenderer = new EventEmitter();
  @Output() public beforeRowMove = new EventEmitter();
  @Output() public beforeRowResize = new EventEmitter();
  @Output() public beforeSetRangeEnd = new EventEmitter();
  @Output() public beforeSetRangeStart = new EventEmitter();
  @Output() public beforeStretchingColumnWidth = new EventEmitter();
  @Output() public beforeTouchScroll = new EventEmitter();
  @Output() public beforeUndo = new EventEmitter();
  @Output() public beforeValidate = new EventEmitter();
  @Output() public beforeValueRender = new EventEmitter();
  @Output() public construct = new EventEmitter();
  @Output() public hiddenColumn = new EventEmitter();
  @Output() public hiddenRow = new EventEmitter();
  @Output() public init = new EventEmitter();
  @Output() public manualRowHeights = new EventEmitter();
  @Output() public modifyAutofillRange = new EventEmitter();
  @Output() public modifyCol = new EventEmitter();
  @Output() public modifyColHeader = new EventEmitter();
  @Output() public modifyColumnHeaderHeight = new EventEmitter();
  @Output() public modifyColWidth = new EventEmitter();
  @Output() public modifyCopyableRange = new EventEmitter();
  @Output() public modifyData = new EventEmitter();
  @Output() public modifyRow = new EventEmitter();
  @Output() public modifyRowHeader = new EventEmitter();
  @Output() public modifyRowHeaderWidth = new EventEmitter();
  @Output() public modifyRowHeight = new EventEmitter();
  @Output() public modifyRowSourceData = new EventEmitter();
  @Output() public modifyTransformEnd = new EventEmitter();
  @Output() public modifyTransformStart = new EventEmitter();
  @Output() public persistentStateLoad = new EventEmitter();
  @Output() public persistentStateReset = new EventEmitter();
  @Output() public persistentStateSave = new EventEmitter();
  @Output() public skipLengthCache = new EventEmitter();
  @Output() public unmodifyCol = new EventEmitter();
  @Output() public unmodifyRow = new EventEmitter();

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
      this.inst = new (Handsontable as any)(this.view, options);
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
