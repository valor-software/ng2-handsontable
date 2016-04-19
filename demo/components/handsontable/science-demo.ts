import { Component } from 'angular2/core';

import {handsontable} from '../../../components/index';
import {getScienceData} from './data';

declare var Handsontable:any;
declare var chroma:any;

// webpack html imports
let template = require('./sheet-demo.html');


let heatmapScale:any = chroma.scale(['#17F556', '#ED6D47']);
let heatmap:any = [];

function updateHeatmap(change:any, source:any) {
  if (change) {
    heatmap[change[0][1]] = generateHeatmapData(this, change[0][1]);
  } else {
    heatmap = [];

    for (var i = 1, colCount = this.countCols(); i < colCount; i++) {
      heatmap[i] = generateHeatmapData(this, i);
    }
  }
}

function point(min:any, max:any, value:any) {
  return (value - min) / (max - min);
}

function generateHeatmapData(context:any, colId:any) {
  let values = context.getDataAtCol(colId);

  return {
    min: Math.min.apply(null, values),
    max: Math.max.apply(null, values)
  };
}

function heatmapRenderer(instance:any, td:any, row:any, col:any, prop:any, value:any, cellProperties:any) {
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
  directives: [handsontable]
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
