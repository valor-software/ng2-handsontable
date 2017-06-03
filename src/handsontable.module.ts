import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HotTable } from './handsontable.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HotTable],
  exports: [HotTable]
})
export class HotTableModule {
}
