// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './demo/e2e/**/*.e2e-spec.ts',
  ],
  exclude: [
  ],
  capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true', '--no-sandbox']
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print() {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch() {
    require('ts-node').register({project: 'demo/e2e'});
  },
  // TODO add working specreporter
  // onPrepare() {
  //   jasmine.getEnv().addReporter(new SpecReporter());
  // }
};

if (process.env.SAUCE) {
  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    console.log('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.');
    process.exit(1);
  }
}
