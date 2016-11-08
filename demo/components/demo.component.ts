
import {Component} from '@angular/core';
import {HandsontableSection} from './components/handsontable-section';
// import {DemoHeader} from './components/demo-header';

let gettingStarted = require('../getting-started.md');

@Component({
  selector: 'app',
  template: `
  <main class="bd-pageheader">
    <div class="container">
      <h1>ng2-handsontable</h1>
      <p>The Angular2 directive for <a href="https://github.com/handsontable/handsontable" target="_blank">Handsontable</a></p>
      <a class="btn btn-primary" href="https://github.com/valor-software/ng2-handsontable">View on GitHub</a>
      <div class="row">
        <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-handsontable&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
        <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-handsontable&type=fork&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
      </div>
    </div>
  </main>

  <div class="container">
    <section id="getting-started">${gettingStarted}</section>

    <handsontable-section class="col-md-12"></handsontable-section>
  </div>

  <footer class="footer">
    <div class="container">
      <p class="text-muted text-center"><a href="https://github.com/valor-software/ng2-handsontable">ng2-handsontable</a> is maintained by <a href="https://github.com/valor-software">valor-software</a>.</p>
    </div>
  </footer>
  `
})
export class DemoComponent {
}
