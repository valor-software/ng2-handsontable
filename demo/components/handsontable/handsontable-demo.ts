/// <reference path="../../../tsd.d.ts" />

import {
  Component, View,
  CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass
} from 'angular2/angular2';

import {handsontable} from '../../../components/index';

// webpack html imports
let template = require('./handsontable-demo.html');

@Component({
  selector: 'handsontable-demo'
})
@View({
  template: template,
  directives: [handsontable, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class HandsontableDemo {
  private data:Array<any> = [
    {
      id: 1,
      name: {
        first: 'John',
        last: 'Schmidt'
      },
      address: '45024 France',
      price: 760.41,
      isActive: 'Yes',
      product: {
        description: 'Fried Potatoes',
        options: [
          {
            description: 'Fried Potatoes',
            image: '//a248.e.akamai.net/assets.github.com/images/icons/emoji/fries.png'
          },
          {
            description: 'Fried Onions',
            image: '//a248.e.akamai.net/assets.github.com/images/icons/emoji/fries.png'
          }
        ]
      }
    }
  ];
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
  private colWidths:Array<number> = [100, 300, 100, 100, 100, 100, 100];

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
