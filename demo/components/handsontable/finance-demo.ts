/// <reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
/// <reference path="../../../tsd.d.ts" />

import { Component } from 'angular2/core';

import {handsontable} from '../../../components/index';
import {getFinanceData} from './data';

declare var Handsontable:any;

// webpack html imports
let template = require('./finance-demo.html');

@Component({
  selector: 'finance-demo',
  template: template,
  directives: [handsontable]
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
