/// <reference path="../../../tsd.d.ts" />

import {
   CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass
} from '@angular/common';

import {Component} from '@angular/core';

import {handsontable} from '../../../components/index';
import {getScienceData} from './data';

declare var Handsontable:any;
declare var chroma:any;

// webpack html imports
let template = require('./sheet-demo.html');


let heatmapScale = chroma.scale(['#17F556', '#ED6D47']);
let heatmap = [];

function updateHeatmap(change, source) {
  if (change) {
    heatmap[change[0][1]] = generateHeatmapData(this, change[0][1]);
  } else {
    heatmap = [];

    for (let i = 1, colCount = this.countCols(); i < colCount; i++) {
      heatmap[i] = generateHeatmapData(this, i);
    }
  }
}

function point(min, max, value) {
  return (value - min) / (max - min);
}

function generateHeatmapData(context:any, colId) {
  let values = context.getDataAtCol(colId);

  return {
    min: Math.min.apply(null, values),
    max: Math.max.apply(null, values)
  };
}

function heatmapRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);

  if (heatmap[col]) {
    td.style.backgroundColor = heatmapScale(point(heatmap[col].min, heatmap[col].max, parseFloat(value))).hex();
    td.style.textAlign = 'right';
    td.style.fontWeight = 'bold';
  }
}

@Component({
  selector: 'science-demo',
  template: template,
  directives: [handsontable, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class ScienceDemo {
  private data:Array<any>;
  private options:any;

  constructor() {
    this.data = getScienceData();
    this.options = {
      height: 600,
      colHeaders: ['Line chart', 'Frequency', 'Average age', 'Frequency', 'Average age'],
      rowHeaders: true,
      stretchH: 'all',
      columnSorting: true,
      columns: [
        {data: 0, renderer: 'html'},
        {data: 1, type: 'numeric', format: '0[.]000000000000000'},
        {data: 2, type: 'numeric', format: '0[.]000000000000000', renderer: heatmapRenderer},
        {data: 3, type: 'numeric', format: '0[.]000000000000000'},
        {data: 4, type: 'numeric', format: '0[.]000000000000000', renderer: heatmapRenderer}
      ],
      afterLoadData: updateHeatmap,
      beforeChangeRender: updateHeatmap,
      mergeCells: [
        {row: 0, col: 0, rowspan: 20, colspan: 1}
      ]
    };
  }
}
