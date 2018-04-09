/* tslint:disable:no-any no-magic-numbers prefer-function-over-method */
import { Component } from '@angular/core';
import { getBasicData } from './data';

@Component({
  selector: 'basic-demo',
  template: require('./basic-demo.html')
})
export class BasicDemoComponent {
  private data: any[] = getBasicData(10);
  private colHeaders: string[] = ['ID', 'First Name', 'Last Name', 'Address',
    'Favorite food', 'Price', 'Is active'];
  private columns: any[] = [
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
      renderer: 'text'
    },
    {
      data: 'price',
      type: 'numeric',
      numericFormat: { pattern: '$0,0.00', culture: 'en-US' }
    },
    {
      data: 'isActive',
      type: 'checkbox',
      checkedTemplate: 'Yes',
      uncheckedTemplate: 'No'
    }
  ];
  private colWidths: number[] = [null, null, null, null, null, null, 30];
  private options: any = {
    stretchH: 'all',
    columnSorting: true,
    contextMenu: [
      'row_above', 'row_below', 'remove_row'
    ]
  };

  private afterChange(e: any) {
    // tslint:disable-next-line:no-console
    console.log(e);
  }

  private afterOnCellMouseDown(e: any) {
    // tslint:disable-next-line:no-console
    console.log(e);
  }
}
