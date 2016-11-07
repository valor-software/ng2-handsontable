import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DemoModule } from './demo.module';

// Adding formular functionality to Handsontable (provided via webpack imports-loader)
import 'handsontable-formula';

platformBrowserDynamic().bootstrapModule(DemoModule);
