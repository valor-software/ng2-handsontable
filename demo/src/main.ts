import './polyfills.ts';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { DemoModule } from './demo.module';

// Adding formular functionality to Handsontable (provided via webpack imports-loader)
// import 'handsontable-formula';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(DemoModule);
