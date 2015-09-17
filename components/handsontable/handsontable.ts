/// <reference path="../../tsd.d.ts" />

import {
  Component, View,
  Directive, LifecycleEvent,
  EventEmitter, ElementRef,
  CORE_DIRECTIVES, NgClass
} from 'angular2/angular2';
import ClassDefinition = ng.ClassDefinition;

declare var Handsontable:Function;

let eventNames:Array<string> = ['afterCellMetaReset', 'afterChange',
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
  properties: [
    'data',
    'colHeaders',
    'columns',
    'colWidths',
    'width',
    'height'
  ],
  events: eventNames,
  lifecycle: [LifecycleEvent.onInit, LifecycleEvent.onDestroy]
})
export class HotTable {
  private inst:any;
  private view:any;

  // events
  private afterCellMetaReset:EventEmitter = new EventEmitter();
  private afterChange:EventEmitter = new EventEmitter();
  private afterCreateCol:EventEmitter = new EventEmitter();
  private afterCreateRow:EventEmitter = new EventEmitter();
  private afterDeselect:EventEmitter = new EventEmitter();
  private afterDestroy:EventEmitter = new EventEmitter();
  private afterDocumentKeyDown:EventEmitter = new EventEmitter();
  private afterGetCellMeta:EventEmitter = new EventEmitter();
  private afterGetColHeader:EventEmitter = new EventEmitter();
  private afterGetRowHeader:EventEmitter = new EventEmitter();
  private afterInit:EventEmitter = new EventEmitter();
  private afterIsMultipleSelectionCheck:EventEmitter = new EventEmitter();
  private afterLoadData:EventEmitter = new EventEmitter();
  private afterMomentumScroll:EventEmitter = new EventEmitter();
  private afterOnCellCornerMouseDown:EventEmitter = new EventEmitter();
  private afterOnCellMouseDown:EventEmitter = new EventEmitter();
  private afterOnCellMouseOver:EventEmitter = new EventEmitter();
  private afterRemoveCol:EventEmitter = new EventEmitter();
  private afterRemoveRow:EventEmitter = new EventEmitter();
  private afterRender:EventEmitter = new EventEmitter();
  private afterRenderer:EventEmitter = new EventEmitter();
  private afterScrollHorizontally:EventEmitter = new EventEmitter();
  private afterScrollVertically:EventEmitter = new EventEmitter();
  private afterSelection:EventEmitter = new EventEmitter();
  private afterSelectionByProp:EventEmitter = new EventEmitter();
  private afterSelectionEnd:EventEmitter = new EventEmitter();
  private afterSelectionEndByProp:EventEmitter = new EventEmitter();
  private afterSetCellMeta:EventEmitter = new EventEmitter();
  private afterUpdateSettings:EventEmitter = new EventEmitter();
  private afterValidate:EventEmitter = new EventEmitter();
  private beforeAutofill:EventEmitter = new EventEmitter();
  private beforeCellAlignment:EventEmitter = new EventEmitter();
  private beforeChange:EventEmitter = new EventEmitter();
  private beforeChangeRender:EventEmitter = new EventEmitter();
  private beforeDrawBorders:EventEmitter = new EventEmitter();
  private beforeGetCellMeta:EventEmitter = new EventEmitter();
  private beforeInit:EventEmitter = new EventEmitter();
  private beforeInitWalkontable:EventEmitter = new EventEmitter();
  private beforeKeyDown:EventEmitter = new EventEmitter();
  private beforeOnCellMouseDown:EventEmitter = new EventEmitter();
  private beforeRemoveCol:EventEmitter = new EventEmitter();
  private beforeRemoveRow:EventEmitter = new EventEmitter();
  private beforeRender:EventEmitter = new EventEmitter();
  private beforeSetRangeEnd:EventEmitter = new EventEmitter();
  private beforeTouchScroll:EventEmitter = new EventEmitter();
  private beforeValidate:EventEmitter = new EventEmitter();
  private construct:EventEmitter = new EventEmitter();
  private init:EventEmitter = new EventEmitter();
  private modifyCol:EventEmitter = new EventEmitter();
  private modifyColWidth:EventEmitter = new EventEmitter();
  private modifyRow:EventEmitter = new EventEmitter();
  private modifyRowHeight:EventEmitter = new EventEmitter();
  private persistentStateLoad:EventEmitter = new EventEmitter();
  private persistentStateReset:EventEmitter = new EventEmitter();
  private persistentStateSave:EventEmitter = new EventEmitter();
  /// events

  private data:Array<any> = [];
  private colHeaders:Array<string> = [];
  private columns:Array<any> = [];
  private colWidths:Array<number> = [];
  private width:number;
  private height:number;

  constructor(private element:ElementRef) {
  }

  parseAutoComplete(column, dataSet) {
    let inst = this.inst;

    if (typeof column.source === 'string') {
      let relatedField:string = column.source;
      column.source = function (query, process) {
        let row:number = inst.getSelected()[0];
        let data:any = dataSet[row];

        if (!data) {
          return;
        }

        let fieldParts:Array<string> = relatedField.split('.');
        let o:any = data;
        for (let i = 0; i < fieldParts.length; i++) {
          o = o[fieldParts[i]];
        }

        process(o.map(item => {
          return !column.optionField ? item : item[column.optionField];
        }));
      };
    }
  }

  onInit() {
    this.view = document.createElement('div');
    this.view.class = 'handsontable-container';
    this.element.nativeElement.appendChild(this.view);

    let htOptions:any = {
      data: this.data,
      width: this.width,
      height: this.height,
      stretchH: 'all',
      columnSorting: true
    };

    eventNames.forEach(eventName => {
      htOptions[eventName] = data => {
        this[eventName].next(data);
      };
    });

    Object.assign(htOptions, {
      colHeaders: this.colHeaders,
      columns: this.columns,
      colWidths: this.colWidths
    });

    this.inst = Handsontable(this.view, htOptions);

    this.columns.forEach((column) => {
      this.parseAutoComplete(column, this.data);
    });
  }

  onDestroy() {
    if (this.view) {
      this.view.remove();
    }
  }
}

export const handsontable:Array<any> = [HotTable];
