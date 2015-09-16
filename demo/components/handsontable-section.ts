/// <reference path="../../tsd.d.ts" />

import {Component, View, CORE_DIRECTIVES, NgNonBindable} from 'angular2/angular2';

// import {tabs} from '../../components/index';
import {HandsontableDemo} from './handsontable/handsontable-demo';

let name = 'Handsontable';
let src = 'https://github.com/valor-software/ng2-handsontable/blob/master/components/handsontable/handsontable.ts';
// webpack html imports
let doc = require('../../components/handsontable/readme.md');
let titleDoc = require('../../components/handsontable/title.md');
let ts = require('!!prismjs?lang=typescript!./handsontable/handsontable-demo.ts');
let html = require('!!prismjs?lang=markup!./handsontable/handsontable-demo.html');

@Component({
  selector: 'handsontable-section'
})
@View({
  template: `
  <br>
  <section id="${name.toLowerCase()}">
    <div class="row"><h1>${name}<small>(<a href="${src}">src</a>)</small></h1></div>

    <hr>

    <div class="row"><div class="col-md-12">${titleDoc}</div></div>

    <div class="row">
      <h2>Example</h2>
      <div class="card card-block panel panel-default panel-body">
        <handsontable-demo></handsontable-demo>
      </div>
    </div>

    <br>

    <div class="row">
      <!--<tabset>
        <tab heading="Markup">
          <div class="card card-block panel panel-default panel-body">
            <pre class="language-html"><code class="language-html" ng-non-bindable>${html}</code></pre>
          </div>
        </tab>
        <tab heading="TypeScript">
          <div class="card card-block panel panel-default panel-body">
            <pre class="language-typescript"><code class="language-typescript" ng-non-bindable>${ts}</code></pre>
          </div>
        </tab>
      </tabset>-->
    </div>

    <br>

    <div class="row">
      <h2>API</h2>
      <!--<div class="card card-block panel panel-default panel-body">${doc}</div>-->
    </div>
  </section>
  `,
  // directives: [HandsontableDemo, tabs, CORE_DIRECTIVES, NgNonBindable]
  directives: [HandsontableDemo, CORE_DIRECTIVES, NgNonBindable]
})
export class HandsontableSection {
}
