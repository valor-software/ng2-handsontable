import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HotTableComponent } from './handsontable.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HotTableComponent],
  exports: [HotTableComponent]
})
export class HotTableModule {
}
