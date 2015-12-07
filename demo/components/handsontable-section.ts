/// <reference path="../../tsd.d.ts" />

import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

import {tabs} from 'ng2-bootstrap/ng2-bootstrap';
import {BasicDemo} from './handsontable/basic-demo';
import {SheetDemo} from './handsontable/sheet-demo';
import {PersonalDemo} from './handsontable/personal-demo';
import {FinanceDemo} from './handsontable/finance-demo';
import {ScienceDemo} from './handsontable/science-demo';
import {SportDemo} from './handsontable/sport-demo';
import {AdvancedDemo} from './handsontable/advanced-demo';

let name = 'Handsontable';
let src = 'https://github.com/valor-software/ng2-handsontable/blob/master/components/handsontable/handsontable.ts';
// webpack html imports
let doc = require('../../components/handsontable/readme.md');

let tabDesc:Array<any> = [
  {
    heading: 'Basic',
    ts: require('!!prismjs?lang=typescript!./handsontable/basic-demo.ts'),
    html: require('!!prismjs?lang=markup!./handsontable/basic-demo.html')
  },
  {
    heading: 'Advanced',
    ts: require('!!prismjs?lang=typescript!./handsontable/advanced-demo.ts'),
    html: require('!!prismjs?lang=markup!./handsontable/advanced-demo.html'),
    source: 'https://www.quandl.com/c/demography/total-population-by-country'

  },
  {
    heading: 'Sheet',
    ts: require('!!prismjs?lang=typescript!./handsontable/sheet-demo.ts'),
    html: require('!!prismjs?lang=markup!./handsontable/sheet-demo.html')

  }
  ,
  {
    heading: 'Personal',
    ts: require('!!prismjs?lang=typescript!./handsontable/personal-demo.ts'),
    html: require('!!prismjs?lang=markup!./handsontable/personal-demo.html')

  },
  {
    heading: 'Finance',
    ts: require('!!prismjs?lang=typescript!./handsontable/finance-demo.ts'),
    html: require('!!prismjs?lang=markup!./handsontable/finance-demo.html'),
    source: 'https://www.quandl.com/c/markets/bitcoin-data'
  },
  {
    heading: 'Science',
    ts: require('!!prismjs?lang=typescript!./handsontable/science-demo.ts'),
    html: require('!!prismjs?lang=markup!./handsontable/science-demo.html'),
    source: 'https://plot.ly/~JStevens/0/an-age-distribution-for-scientific-genius'
  },
  {
    heading: 'Sport',
    ts: require('!!prismjs?lang=typescript!./handsontable/sport-demo.ts'),
    html: require('!!prismjs?lang=markup!./handsontable/sport-demo.html'),
    source: 'http://www.forbes.com/nba-valuations/list'
  }
];

let dataLink = `<p>All data completes that used in these examples are available in
  <a href="https://github.com/valor-software/ng2-handsontable/blob/master/demo/components/handsontable/data.ts">next file</a>.</p>`;

let tabsContent:string = ``;
tabDesc.forEach(desc => {
  let source = '';
  if (desc.source) {
    source = `Source of data: <a href="${desc.source}" target="_blank">${desc.source}</a><br>`;
  }

  tabsContent += `
          <tab heading="${desc.heading}" (select)="select($event)">
          <div class="card card-block panel panel-default panel-body">

            <${desc.heading.toLowerCase()}-demo *ng-if="currentHeading === '${desc.heading}'"></${desc.heading.toLowerCase()}-demo>

            <br>

            <div class="row" style="margin: 0px;">
              <tabset>
                <tab heading="Markup">
                  <div class="card card-block panel panel-default panel-body">
                    <pre class="language-html"><code class="language-html" ng-non-bindable>${desc.html}</code></pre>
                  </div>
                </tab>
                <tab heading="TypeScript">
                  <div class="card card-block panel panel-default panel-body">
                    <pre class="language-typescript"><code class="language-typescript" ng-non-bindable>${desc.ts}</code></pre>
                  </div>
                </tab>
              </tabset>
              ${source}
              ${dataLink}
            </div>
          </div>
        </tab>
  `;
});

@Component({
  selector: 'handsontable-section'
})
@View({
  template: `
  <section id="${name.toLowerCase()}">
    <div class="row">
      <tabset>

        ${tabsContent}

      </tabset>
    </div>

    <div class="row">
      <h2>API</h2>
      <div class="card card-block panel panel-default panel-body">${doc}</div>
    </div>
  </section>
  `,
  directives: [BasicDemo, AdvancedDemo, SheetDemo, PersonalDemo, FinanceDemo, ScienceDemo, SportDemo,
    tabs, CORE_DIRECTIVES]
})
export class HandsontableSection {
  private currentHeading:string = 'Basic';

  private select(e) {
    if (e.heading) {
      this.currentHeading = e.heading;
    }
  }
}
