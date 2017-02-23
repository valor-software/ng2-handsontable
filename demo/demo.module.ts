import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {TabsModule} from 'ng2-bootstrap/ng2-bootstrap';

import {HotTableModule} from '../components';
import {DemoComponent} from './components/demo.component';
import {HandsontableSection} from './components/handsontable-section';
import {BasicDemo} from './components/handsontable/basic-demo';
import {SheetDemo} from './components/handsontable/sheet-demo';
import {PersonalDemo} from './components/handsontable/personal-demo';
import {FinanceDemo} from './components/handsontable/finance-demo';
import {ScienceDemo} from './components/handsontable/science-demo';
import {SportDemo} from './components/handsontable/sport-demo';
import {AdvancedDemo} from './components/handsontable/advanced-demo';

@NgModule({
  declarations: [
    DemoComponent,
    HandsontableSection,
    BasicDemo,
    SheetDemo,
    PersonalDemo,
    FinanceDemo,
    ScienceDemo,
    SportDemo,
    AdvancedDemo
  ],
  imports: [
    BrowserModule,
    HotTableModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [ DemoComponent ]
})
export class DemoModule {
}
