/// <reference path="../../../tsd.d.ts" />

import {
  Component, View,
  CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass
} from 'angular2/angular2';

import {handsontable} from '../../../components/index';

declare var Handsontable:any;

// webpack html imports
let template = require('./personal-demo.html');

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
  selector: 'personal-demo'
})
@View({
  template: template,
  directives: [handsontable, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class PersonalDemo {
  private data:Array<any>;
  private colWidths:Array<number> = [200, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85];
  private options:any = {
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

      if ([1, 2, 3, 6, 7, 8, 9, 10, 11, 16, 17, 18, 19, 20, 23, 24, 25, 26, 29, 30, 31, 32, 33, 34, 35, 38, 39, 40, 41, 42].indexOf(row) !== -1 && col >= 1) {
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

  constructor() {
    this.data = [
      ['', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'Total'],
      ['Total Incomes', '=SUM(B7:B12)', '=SUM(C7:C12)', '=SUM(D7:D12)', '=SUM(E7:E12)', '=SUM(F7:F12)', '=SUM(G7:G12)', '=SUM(H7:H12)', '=SUM(I7:I12)', '=SUM(J7:J12)', '=SUM(K7:K12)', '=SUM(L7:L12)', '=SUM(M7:M12)', '=SUM(B2:M2)'],
      ['Total Expenses', '=SUM(B17:B43)', '=SUM(C17:C43)', '=SUM(D17:D43)', '=SUM(E17:E43)', '=SUM(F17:F43)', '=SUM(G17:G43)', '=SUM(H17:H43)', '=SUM(I17:I43)', '=SUM(J17:J43)', '=SUM(K17:K43)', '=SUM(L17:L43)', '=SUM(M17:M43)', '=SUM(B3:M3)'],
      ['NET (Income - Expenses)', '=B2-B3', '=C2-C3', '=D2-D3', '=E2-E3', '=F2-F3', '=G2-G3', '=H2-H3', '=I2-I3', '=J2-J3', '=K2-K3', '=L2-L3', '=M2-M3', '=N2-N3', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['Income', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['Salary', 11370, 11370, 11370, 11370, 11370, 11370, 11370, 11370, 11370, 11370, 11370, 11370, ''],
      ['Interest income', 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, ''],
      ['Public assistance', '-  ', '-  ', '-  ', '-  ', '-  ', '-  ', '-  ', '-  ', '-  ', '-  ', '-  ', '-  ', ''],
      ['Dividends', '-  ', '-  ', '-  ', '-  ', '-  ', '-  ', '-  ', '-  ', '-  ', '-  ', '-  ', '-  ', ''],
      ['Gifts', 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, ''],
      ['Other', 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['Expenses', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['Living', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['Rent/Mortgage', 3200, 3200, 3200, 3200, 3200, 3200, 3200, 3200, 3200, 3200, 3200, 3200, ''],
      ['Electricity', 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, ''],
      ['Water/Gas/Sewer', 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, ''],
      ['TV/Internet/Phone', 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, ''],
      ['Maintenance', 260, 260, 260, 260, 260, 260, 260, 260, 260, 260, 260, 260, ''],
      ['Obligations', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['Loans', 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, ''],
      ['Credit cards', 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, ''],
      ['Taxes', '450', '450', '450', '450', '450', '450', '450', '450', '450', '450', '450', '450', ''],
      ['Insurance', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', '140', ''],
      ['Daily expenses', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['Food', 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, ''],
      ['Clothing', 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, ''],
      ['Personal supplies', 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, ''],
      ['Health care', 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, ''],
      ['Education', 540, 540, 540, 540, 540, 540, 540, 540, 540, 540, 540, 540, ''],
      ['Entertainment', 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, ''],
      ['Transportation', 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, ''],
      ['Other', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['Donations', 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, ''],
      ['Savings', 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, ''],
      ['Gifts', 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, ''],
      ['Retirement', 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, ''],
      ['Other', 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, '']
    ];
  }
}
