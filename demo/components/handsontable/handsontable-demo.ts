/// <reference path="../../../tsd.d.ts" />

import {
  Component, View,
  CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass
} from 'angular2/angular2';

import {handsontable} from '../../../components/index';

declare var Handsontable:Function;

// webpack html imports
let template = require('./handsontable-demo.html');

function genData(rows:number = 10):Array<any> {
  let products:Array<any> = [
      {
        description: 'Big Mac',
        options: [
          {description: 'Big Mac'},
          {description: 'Big Mac & Co'},
          {description: 'McRoyal'},
          {description: 'Hamburger'},
          {description: 'Cheeseburger'},
          {description: 'Double Cheeseburger'}
        ]
      },
      {
        description: 'Fried Potatoes',
        options: [
          {description: 'Fried Potatoes'},
          {description: 'Fried Onions'}
        ]
      }
    ],
    firstNames = ['Ted', 'John', 'Macy', 'Rob', 'Gwen', 'Fiona', 'Mario',
      'Ben', 'Kate', 'Kevin', 'Thomas', 'Frank'],
    lastNames = ['Tired', 'Johnson', 'Moore', 'Rocket', 'Goodman', 'Farewell',
      'Manson', 'Bentley', 'Kowalski', 'Schmidt', 'Tucker', 'Fancy'],
    address = ['Turkey', 'Japan', 'Michigan', 'Russia', 'Greece', 'France', 'USA',
      'Germany', 'Sweden', 'Denmark', 'Poland', 'Belgium'];

  let items:Array<any> = [];

  for (let i = 0; i < rows; i++) {
    items.push({
      id: i + 1,
      name: {
        first: firstNames[Math.floor(Math.random() * firstNames.length)],
        last: lastNames[Math.floor(Math.random() * lastNames.length)]
      },
      date: `${Math.max(Math.round(Math.random() * 12), 1)} / ${Math.max(Math.round(Math.random() * 28), 1)} /
      ${(Math.round(Math.random() * 80) + 1940)}`,
      address: `${Math.floor(Math.random() * 100000)} ${address[Math.floor(Math.random() * address.length)]}`,
      price: Math.floor(Math.random() * 100000) / 100,
      isActive: Math.floor(Math.random() * products.length) / 2 === 0 ? 'Yes' : 'No',
      product: products[Math.floor(Math.random() * products.length)]
    });
  }

  return items;
}

@Component({
  selector: 'handsontable-demo'
})
@View({
  template: template,
  directives: [handsontable, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class HandsontableDemo {
  private data:Array<any> = genData(100);
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
      data: 'product.description'
    },
    {
      data: 'price'
    },
    {
      data: 'isActive'
    }
  ];
  private colWidths:Array<number> = [null, 300, 100, 100, 100, 100, 100];

}

/*<hot-column data="id" title="ID"></hot-column>
 <hot-column data="name.first" title="First Name" type="text" read-only></hot-column>
 <hot-column data="name.last" title="Last Name" read-only></hot-column>
 <hot-column data="address" title="Address" width="150"></hot-column>
 <hot-column data="product.description" title="Favorite food" type="'autocomplete'">
 <hot-autocomplete datarows="description in product.options"></hot-autocomplete>
 </hot-column>
 <hot-column data="price" title="Price" type="numeric" width="80" format="$ 0,0.00"></hot-column>
 <hot-column data="isActive" title="Is active" type="checkbox" checked-template="Yes"
 unchecked-template="No"></hot-column>*/
