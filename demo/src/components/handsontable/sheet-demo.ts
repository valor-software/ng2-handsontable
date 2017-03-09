import {Component} from '@angular/core';

@Component({
  selector: 'sheet-demo',
  template: require('./sheet-demo.html')
})
export class SheetDemo {
  private data:Array<any>;
  private options:any;

  constructor() {
    this.data = Handsontable.helper['createSpreadsheetData'](100, 12); // tslint:disable-line:no-string-literal
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
