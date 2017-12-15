/* tslint:disable:no-any */
import { Component } from '@angular/core';
import * as Handsontable from 'handsontable';
import { getAdvancedData } from './data';

@Component({
  selector: 'advanced-demo',
  template: require('./advanced-demo.html')
})
export class AdvancedDemoComponent {
  private data: any[];
  private colHeaders: string[];
  private columns: any[];
  private options: any;

  constructor() {
    this.data = getAdvancedData();
    this.colHeaders = ['Country', 'Level', 'Units', 'As Of', '1Y Chg', '5Y Ago', '10Y Ago', '25Y Ago'];
    this.columns = [
      {data: 0, type: 'text'},
      {data: 1, type: 'numeric', numericFormat: { pattern: '0,0.00[0000]' }},
      {data: 2, type: 'text'},
      {data: 3, type: 'numeric', numericFormat: { pattern: '0' }},
      {data: 4, type: 'numeric', numericFormat: { pattern: '0.00%' }, renderer:
        function percentRenderer(instance, td, row, col, prop, value, cellProperties) {
          Handsontable.renderers.NumericRenderer.apply(this, arguments);
          td.style.color = (value < 0) ? 'red' : 'green';
        }
      },
      {data: 5, type: 'numeric', numericFormat: { pattern: '0,0.00[0000]' }},
      {data: 6, type: 'numeric', numericFormat: { pattern: '0,0.00[0000]' }}
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
