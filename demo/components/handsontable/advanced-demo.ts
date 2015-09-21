/// <reference path='../../../tsd.d.ts' />

import {
  Component, View,
  CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass
} from 'angular2/angular2';

import {handsontable} from '../../../components/index';
import {getAdvancedData} from './data';

declare var Handsontable:any;

// webpack html imports
let template = require('./advanced-demo.html');

function percentRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.NumericRenderer.apply(this, arguments);
  td.style.color = (value < 0) ? 'red' : 'green';
}

@Component({
  selector: 'advanced-demo'
})
@View({
  template: template,
  directives: [handsontable, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class AdvancedDemo {
  private data:Array<any>;
  private colHeaders:Array<string>;
  private columns:Array<any>;
  private options:any;

  constructor() {
    this.data = getAdvancedData();
    this.colHeaders = ['Country', 'Level', 'Units', 'As Of', '1Y Chg', '5Y Ago', '10Y Ago', '25Y Ago'];
    this.columns = [
      {data: 0, type: 'text'},
      {data: 1, type: 'numeric', format: '0,0.00[0000]'},
      {data: 2, type: 'text'},
      {data: 3, type: 'numeric', format: '0'},
      {data: 4, type: 'numeric', format: '0.00%', renderer: percentRenderer},
      {data: 5, type: 'numeric', format: '0,0.00[0000]'},
      {data: 6, type: 'numeric', format: '0,0.00[0000]'}
    ];
    this.options = {
      height: 396,
      rowHeaders: true,
      stretchH: 'all',
      columnSorting: true,
      contextMenu: true,
      className: 'htCenter htMiddle',
      readOnly: true
    };
  }
}
