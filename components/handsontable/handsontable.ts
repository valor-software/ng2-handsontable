/// <reference path="../../typings/tsd.d.ts" />

import {OnInit, OnDestroy, Directive, EventEmitter, ElementRef} from 'angular2/angular2';

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
    'options'
  ],
  events: eventNames
})
export class HotTable implements OnInit, OnDestroy{
  private inst:any;
  private view:any;

  private data:Array<any> = [];
  private colHeaders:Array<string>;
  private columns:Array<any>;
  private colWidths:Array<number>;
  private options:any;

  constructor(private element:ElementRef) {
    // fill events dynamically
    eventNames.forEach(eventName => {
      this[eventName] = new EventEmitter();
    });
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
      data: this.data
    };

    eventNames.forEach(eventName => {
      htOptions[eventName] = data => {
        this[eventName].next(data);
      };
    });

    let additionalFields:Array<string> = ['colHeaders', 'colWidths', 'columns'];
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

    this.inst = Handsontable(this.view, htOptions);

    if (this.columns && this.columns.length) {
      this.columns.forEach(column => {
        this.parseAutoComplete(column, this.data);
      });
    }
  }

  onDestroy() {
    if (this.view) {
      this.view.remove();
    }
  }
}

export const handsontable:Array<any> = [HotTable];
