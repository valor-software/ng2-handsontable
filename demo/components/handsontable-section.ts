/// <reference path="../../tsd.d.ts" />

import {Component, View, CORE_DIRECTIVES, NgNonBindable} from 'angular2/angular2';

import {tabs} from 'ng2-bootstrap';
import {HandsontableDemo} from './handsontable/handsontable-demo';
import {SheetDemo} from './handsontable/sheet-demo';
import {PersonalDemo} from './handsontable/personal-demo';

let name = 'Handsontable';
let src = 'https://github.com/valor-software/ng2-handsontable/blob/master/components/handsontable/handsontable.ts';
// webpack html imports
let doc = require('../../components/handsontable/readme.md');
let titleDoc = require('../../components/handsontable/title.md');

let tsBasic = require('!!prismjs?lang=typescript!./handsontable/handsontable-demo.ts');
let htmlBasic = require('!!prismjs?lang=markup!./handsontable/handsontable-demo.html');
let tsSheet = require('!!prismjs?lang=typescript!./handsontable/sheet-demo.ts');
let htmlSheet = require('!!prismjs?lang=markup!./handsontable/sheet-demo.html');
let tsPersonal = require('!!prismjs?lang=typescript!./handsontable/personal-demo.ts');
let htmlPersonal = require('!!prismjs?lang=markup!./handsontable/personal-demo.html');

@Component({
  selector: 'handsontable-section'
})
@View({
  template: `
  <br>
  <section id="${name.toLowerCase()}">
    <div class="row"><h1>${name}<small>(<a href="${src}">src</a>)</small></h1></div>

    <hr>

    <!--<div class="row"><div class="col-md-12">${titleDoc}</div></div>-->

    <h2>Examples</h2>

    <div class="row">
      <tabset>

        <tab heading="Basic" (select)="select($event)">
          <div class="card card-block panel panel-default panel-body">
            <handsontable-demo *ng-if="currentHeading === 'Basic'"></handsontable-demo>

            <br>

            <div class="row" style="margin: 0px;">
              <tabset>
                <tab heading="Markup">
                  <div class="card card-block panel panel-default panel-body">
                    <pre class="language-html"><code class="language-html" ng-non-bindable>${htmlBasic}</code></pre>
                  </div>
                </tab>
                <tab heading="TypeScript">
                  <div class="card card-block panel panel-default panel-body">
                    <pre class="language-typescript"><code class="language-typescript" ng-non-bindable>${tsBasic}</code></pre>
                  </div>
                </tab>
              </tabset>
            </div>
          </div>
        </tab>

        <tab heading="Sheet" (select)="select($event)">
          <div class="card card-block panel panel-default panel-body">


            <sheet-demo *ng-if="currentHeading === 'Sheet'"></sheet-demo>

            <br>

            <div class="row" style="margin: 0px;">
              <tabset>
                <tab heading="Markup">
                  <div class="card card-block panel panel-default panel-body">
                    <pre class="language-html"><code class="language-html" ng-non-bindable>${htmlSheet}</code></pre>
                  </div>
                </tab>
                <tab heading="TypeScript">
                  <div class="card card-block panel panel-default panel-body">
                    <pre class="language-typescript"><code class="language-typescript" ng-non-bindable>${tsSheet}</code></pre>
                  </div>
                </tab>
              </tabset>
            </div>
          </div>
        </tab>

        <tab heading="Personal" (select)="select($event)">
          <div class="card card-block panel panel-default panel-body">


            <personal-demo *ng-if="currentHeading === 'Personal'"></personal-demo>

            <br>

            <div class="row" style="margin: 0px;">
              <tabset>
                <tab heading="Markup">
                  <div class="card card-block panel panel-default panel-body">
                    <pre class="language-html"><code class="language-html" ng-non-bindable>${htmlPersonal}</code></pre>
                  </div>
                </tab>
                <tab heading="TypeScript">
                  <div class="card card-block panel panel-default panel-body">
                    <pre class="language-typescript"><code class="language-typescript" ng-non-bindable>${tsPersonal}</code></pre>
                  </div>
                </tab>
              </tabset>
            </div>
          </div>
        </tab>

      </tabset>
    </div>

    <br>

    <div class="row">
      <h2>API</h2>
      <div class="card card-block panel panel-default panel-body">${doc}</div>
    </div>
  </section>
  `,
  directives: [HandsontableDemo, SheetDemo, PersonalDemo, tabs, CORE_DIRECTIVES, NgNonBindable]
})
export class HandsontableSection {
  private currentHeading:string = 'Basic';

  private select(e) {
    this.currentHeading = e.heading;
  }
}
