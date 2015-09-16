/// <reference path="../../tsd.d.ts" />

import {
  Component, View,
  Directive, LifecycleEvent,
  EventEmitter, ElementRef,
  CORE_DIRECTIVES, NgClass
} from 'angular2/angular2';
import ClassDefinition = ng.ClassDefinition;

declare var Handsontable:Function;

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
  lifecycle: [LifecycleEvent.onInit, LifecycleEvent.onDestroy]
})
export class HotTable {
  private inst:any;
  private view:any;

  private data:Array<any> = [];
  private colHeaders:Array<string> = [];
  private columns:Array<any> = [];
  private colWidths:Array<number> = [];
  private width:number;
  private height:number;

  constructor(private element:ElementRef) {
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
      columnSorting: true,
      afterChange: function (changes, source) {
      }
    };

    Object.assign(htOptions, {
      colHeaders: this.colHeaders,
      columns: this.columns,
      colWidths: this.colWidths
    });

    this.inst = new Handsontable(this.view, htOptions);
  }

  onDestroy() {
    if (this.view) {
      this.view.remove();
    }
  }
}

export const handsontable:Array<any> = [HotTable];
