import { Component } from 'angular2/core';

import {handsontable} from '../../../components/index';

declare var Handsontable:any;

// webpack html imports
let template = require('./sheet-demo.html');

@Component({
  selector: 'sheet-demo',
  template: template,
  directives: [handsontable]
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
