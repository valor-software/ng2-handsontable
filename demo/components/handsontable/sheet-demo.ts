/// <reference path="../../../tsd.d.ts" />

import {
   CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass
} from '@angular/common';

import {Component} from '@angular/core';

import {handsontable} from '../../../components/index';

declare var Handsontable:any;

// webpack html imports
let template = require('./sheet-demo.html');

@Component({
  selector: 'sheet-demo',
  template: template,
  directives: [handsontable, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class SheetDemo {
  private data:Array<any>;
  private options:any;

  constructor() {
    this.data = Handsontable.helper.createSpreadsheetData(100, 12);
    this.options = {
      height: 396,
      colHeaders: true,
      rowHeaders: true,
      stretchH: 'all',
      columnSorting: true,
      contextMenu: true
    };
  }
}
