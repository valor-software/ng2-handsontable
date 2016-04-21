import { Component } from 'angular2/core';

import {handsontable} from '../../../components/index';
import {genData} from './data';

require('../../../node_modules/moment/moment');
require('../../../node_modules/pikaday/pikaday');
require('../../../node_modules/zeroclipboard/dist/ZeroClipboard');

// webpack html imports
let template = require('./basic-demo.html');

@Component({
  selector: 'basic-demo',
  template: template,
  directives: [handsontable]
})
export class BasicDemo {
  private data:Array<any> = genData(10);
  private colHeaders:Array<string> = ['ID', 'First Name', 'Last Name', 'Address',
    'Favorite food', 'Price', 'Is active'];
  private columns:Array<any> = [
    {
      data: 'id'
    },
    {
      data: 'name.first',
      renderer: 'text',
      readOnly: true
    },
    {
      data: 'name.last',
      readOnly: true
    },
    {
      data: 'address'
    },
    {
      data: 'product.description',
      source: 'product.options',
      optionField: 'description',
      type: 'autocomplete',
      strict: false,
      visibleRows: 4
    },
    {
      data: 'price',
      type: 'numeric',
      format: '$ 0,0.00'
    },
    {
      data: 'isActive',
      type: 'checkbox',
      checkedTemplate: 'Yes',
      uncheckedTemplate: 'No'
    }
  ];
  private colWidths:Array<number> = [null, null, null, null, null, null, 30];
  private options:any = {
    stretchH: 'all',
    columnSorting: true,
    contextMenu: [
      'row_above', 'row_below', 'remove_row'
    ]
  };

  private afterChange(e:any) {
    console.log(e);
  }

  private afterOnCellMouseDown(e:any) {
    console.log(e);
  }
}
