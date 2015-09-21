/// <reference path="../../tsd.d.ts" />

import {Component, View, CORE_DIRECTIVES, NgNonBindable} from 'angular2/angular2';

import {tabs} from 'ng2-bootstrap';
import {BasicDemo} from './handsontable/basic-demo';
import {SheetDemo} from './handsontable/sheet-demo';
import {PersonalDemo} from './handsontable/personal-demo';
import {ScienceDemo} from './handsontable/science-demo';
import {SportDemo} from './handsontable/sport-demo';
import {AdvancedDemo} from './handsontable/advanced-demo';

let name = 'Handsontable';
let src = 'https://github.com/valor-software/ng2-handsontable/blob/master/components/handsontable/handsontable.ts';
// webpack html imports
let doc = require('../../components/handsontable/readme.md');
let titleDoc = require('../../components/handsontable/title.md');

let tsBasic = require('!!prismjs?lang=typescript!./handsontable/basic-demo.ts');
let htmlBasic = require('!!prismjs?lang=markup!./handsontable/basic-demo.html');
let tsSheet = require('!!prismjs?lang=typescript!./handsontable/sheet-demo.ts');
let htmlSheet = require('!!prismjs?lang=markup!./handsontable/sheet-demo.html');
let tsPersonal = require('!!prismjs?lang=typescript!./handsontable/personal-demo.ts');
let htmlPersonal = require('!!prismjs?lang=markup!./handsontable/personal-demo.html');
let tsScience = require('!!prismjs?lang=typescript!./handsontable/science-demo.ts');
let htmlScience = require('!!prismjs?lang=markup!./handsontable/science-demo.html');
let tsSport = require('!!prismjs?lang=typescript!./handsontable/sport-demo.ts');
let htmlSport = require('!!prismjs?lang=markup!./handsontable/sport-demo.html');
let tsAdvanced = require('!!prismjs?lang=typescript!./handsontable/advanced-demo.ts');
let htmlAdvanced = require('!!prismjs?lang=markup!./handsontable/advanced-demo.html');

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

            <basic-demo *ng-if="currentHeading === 'Basic'"></basic-demo>

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

        <tab heading="Advanced" (select)="select($event)">
          <div class="card card-block panel panel-default panel-body">

            <advanced-demo *ng-if="currentHeading === 'Advanced'"></advanced-demo>

            <br>

            <div class="row" style="margin: 0px;">
              <tabset>
                <tab heading="Markup">
                  <div class="card card-block panel panel-default panel-body">
                    <pre class="language-html"><code class="language-html" ng-non-bindable>${htmlAdvanced}</code></pre>
                  </div>
                </tab>
                <tab heading="TypeScript">
                  <div class="card card-block panel panel-default panel-body">
                    <pre class="language-typescript"><code class="language-typescript" ng-non-bindable>${tsAdvanced}</code></pre>
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

        <tab heading="Science" (select)="select($event)">
          <div class="card card-block panel panel-default panel-body">

            <science-demo *ng-if="currentHeading === 'Science'"></science-demo>

            <br>

            <div class="row" style="margin: 0px;">
              <tabset>
                <tab heading="Markup">
                  <div class="card card-block panel panel-default panel-body">
                    <pre class="language-html"><code class="language-html" ng-non-bindable>${htmlScience}</code></pre>
                  </div>
                </tab>
                <tab heading="TypeScript">
                  <div class="card card-block panel panel-default panel-body">
                    <pre class="language-typescript"><code class="language-typescript" ng-non-bindable>${tsScience}</code></pre>
                  </div>
                </tab>
              </tabset>
            </div>
          </div>
        </tab>

        <tab heading="Sport" (select)="select($event)">
          <div class="card card-block panel panel-default panel-body">

            <sport-demo *ng-if="currentHeading === 'Sport'"></sport-demo>

            <br>

            <div class="row" style="margin: 0px;">
              <tabset>
                <tab heading="Markup">
                  <div class="card card-block panel panel-default panel-body">
                    <pre class="language-html"><code class="language-html" ng-non-bindable>${htmlSport}</code></pre>
                  </div>
                </tab>
                <tab heading="TypeScript">
                  <div class="card card-block panel panel-default panel-body">
                    <pre class="language-typescript"><code class="language-typescript" ng-non-bindable>${tsSport}</code></pre>
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
  directives: [BasicDemo, AdvancedDemo, SheetDemo, PersonalDemo, ScienceDemo, SportDemo,
    tabs, CORE_DIRECTIVES, NgNonBindable]
})
export class HandsontableSection {
  private currentHeading:string = 'Basic';

  private select(e) {
    this.currentHeading = e.heading;
  }
}
