import {Component} from '@angular/core';
import * as Handsontable from 'handsontable/dist/handsontable.full.js';

import {handsontable} from '../../../components/index';
import {getPersonalData} from './data';


function headerRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);
  td.style.fontWeight = 'bold';
  td.style.textAlign = 'center';
}

function diffRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.cellTypes.formula.renderer.apply(this, arguments);
  td.style.backgroundColor = '#c3f89c';
  td.style.fontWeight = (col === 13 ? 'bold' : 'normal');
}

function incomeOrExpensesRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);
  td.style.fontWeight = 'bold';
  td.style.textAlign = 'left';
  td.style.backgroundColor = '#BDD7EE';
}

function boldAndAlignRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);
  td.style.fontWeight = 'bold';
  td.style.verticalAlign = 'middle';
  td.style.textAlign = 'left';
}

@Component({
  selector: 'personal-demo',
  template: require('./personal-demo.html')
})
export class PersonalDemo {
  private data:Array<any>;
  private colWidths:Array<number>;
  private options:any;

  constructor() {
    this.data = getPersonalData();
    this.colWidths = [200, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85];
    this.options = {
      height: 396,
      fixedRowsTop: 1,
      colHeaders: true,
      rowHeaders: true,
      formulas: true,
      comments: true,
      colWidths: [200, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85],
      cells: function (row, col, prop):any {
        let cellProperties:any = {};

        if (row === 0) {
          Object.assign(cellProperties, {renderer: headerRenderer});
        } else if (row === 3) {
          Object.assign(cellProperties, {renderer: diffRenderer});
        } else if (row === 5) {
          Object.assign(cellProperties, {renderer: incomeOrExpensesRenderer});
        } else if (row === 13) {
          Object.assign(cellProperties, {renderer: incomeOrExpensesRenderer});
        } else if (row === 14) {
          Object.assign(cellProperties, {renderer: boldAndAlignRenderer});
        } else if (row === 21) {
          Object.assign(cellProperties, {renderer: boldAndAlignRenderer});
        } else if (row === 27) {
          Object.assign(cellProperties, {renderer: boldAndAlignRenderer});
        } else if (row === 36) {
          Object.assign(cellProperties, {renderer: boldAndAlignRenderer});
        }

        if ([1, 2, 3].indexOf(row) !== -1 && col >= 1) {
          cellProperties.readOnly = true;
        }

        let a42 = Array.apply(0, Array(42)).map((x, y) => { return y + 1; });
        if (a42.indexOf(row) !== -1 && col >= 1) {
          cellProperties.type = 'numeric';
          cellProperties.format = '$0,0.00';
        }

        return cellProperties;
      },
      mergeCells: [
        {row: 5, col: 0, rowspan: 1, colspan: 14},
        {row: 13, col: 0, rowspan: 1, colspan: 14},
        {row: 14, col: 0, rowspan: 2, colspan: 14},
        {row: 21, col: 0, rowspan: 2, colspan: 14},
        {row: 27, col: 0, rowspan: 2, colspan: 14},
        {row: 36, col: 0, rowspan: 2, colspan: 14}
      ]
    };
  }
}
