/* tslint:disable:no-any */
import { Component } from '@angular/core';
import { getSportData } from './data';

@Component({
  selector: 'sport-demo',
  template: require('./sport-demo.html')
})
export class SportDemoComponent {
  private data: any[];
  private colHeaders: string[];
  private options: any;

  constructor() {
    this.data = getSportData();
    this.colHeaders = ['Rank', 'Team', 'Logo', 'Current Value ($mil)', '1-Yr Value Change (%)',
      'Debt/Value (%)', 'Revenue ($mil)', 'Operating Income ($mil)'];
    this.options = {
      height: 600,
      rowHeaders: false,
      stretchH: 'all',
      columnSorting: true,
      contextMenu: true,
      autoWrapRow: true,
      columns: [
        {data: 0, type: 'numeric'},
        {data: 1, type: 'text'},
        {data: 2, renderer: 'html', width: 200},
        {data: 3, type: 'numeric', numericFormat: { pattern: '$0,0.00', culture: 'en-US' }},
        {data: 4, type: 'numeric', numericFormat: { pattern: '0.00%' }},
        {data: 5, type: 'numeric', numericFormat: { pattern: '0.00%' }},
        {data: 6, type: 'numeric', numericFormat: { pattern: '$0,0.00', culture: 'en-US' }},
        {data: 7, type: 'numeric', numericFormat: { pattern: '$0,0.00', culture: 'en-US' }}
      ],
      cells: (row, col, prop) => {
        const cellProperties: any = {};
        cellProperties.className = 'htMiddle htCenter';

        return cellProperties;
      }
    };
  }
}
