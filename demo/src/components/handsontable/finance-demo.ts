// tslint:disable:no-any
import { Component } from '@angular/core';
import { getFinanceData } from './data';

@Component({
  selector: 'finance-demo',
  template: require('./finance-demo.html')
})
export class FinanceDemoComponent {
  private data: any[];
  private colHeaders: string[];
  private columns: any[];
  private options: any;

  constructor() {
    this.data = getFinanceData();
    this.colHeaders = ['Price', 'Date', '1D Chg', 'YTD Chg', 'Vol BTC'];
    this.columns = [
      {type: 'numeric', numericFormat: { pattern: '$0,0.00', culture: 'en-US' }},
      {type: 'date', dateFormat: 'DD/MM/YYYY', correctFormat: true},
      {type: 'numeric', numericFormat: { pattern: '0.00%' }},
      {type: 'numeric', numericFormat: { pattern: '0.00%' }},
      {type: 'numeric', numericFormat: { pattern: '0.00' }}
    ];
    this.options = {
      height: 396,
      rowHeaders: true,
      stretchH: 'all',
      columnSorting: true,
      contextMenu: true
    };
  }
}
