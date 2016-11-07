/// <reference path='../../../tsd.d.ts' />

import {Component} from '@angular/core';

import {handsontable} from '../../../components/index';
import {getFinanceData} from './data';


@Component({
  selector: 'finance-demo',
  template: require('./finance-demo.html')
})
export class FinanceDemo {
  private data:Array<any>;
  private colHeaders:Array<string>;
  private columns:Array<any>;
  private options:any;

  constructor() {
    this.data = getFinanceData();
    this.colHeaders = ['Price', 'Date', '1D Chg', 'YTD Chg', 'Vol BTC'];
    this.columns = [
      {type: 'numeric', format: '$0,0.00'},
      {type: 'date', dateFormat: 'DD/MM/YYYY', correctFormat: true},
      {type: 'numeric', format: '0.00%'},
      {type: 'numeric', format: '0.00%'},
      {type: 'numeric', format: '0.00'}
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
