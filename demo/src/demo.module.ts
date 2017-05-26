import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TabsModule } from 'ngx-bootstrap';
import { HotTableModule } from '../../src';

import { DemoComponent } from './components/demo.component';
import { HandsontableSectionComponent } from './components/handsontable-section';
import { BasicDemoComponent } from './components/handsontable/basic-demo';
import { SheetDemoComponent } from './components/handsontable/sheet-demo';
import { PersonalDemoComponent } from './components/handsontable/personal-demo';
import { FinanceDemoComponent } from './components/handsontable/finance-demo';
import { ScienceDemoComponent } from './components/handsontable/science-demo';
import { SportDemoComponent } from './components/handsontable/sport-demo';
import { AdvancedDemoComponent } from './components/handsontable/advanced-demo';

@NgModule({
  declarations: [
    DemoComponent,
    HandsontableSectionComponent,
    BasicDemoComponent,
    SheetDemoComponent,
    PersonalDemoComponent,
    FinanceDemoComponent,
    ScienceDemoComponent,
    SportDemoComponent,
    AdvancedDemoComponent
  ],
  imports: [
    BrowserModule,
    HotTableModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [ DemoComponent ]
})
export class DemoModule {
}
