/// <reference path="../../../tsd.d.ts" />

import {
  Component, View,
  CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass
} from 'angular2/angular2';

import {handsontable} from '../../../components/index';

declare var Handsontable:any;

// webpack html imports
let template = require('./sheet-demo.html');

@Component({
  selector: 'sport-demo'
})
@View({
  template: template,
  directives: [handsontable, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class SportDemo {
  private data:Array<any>;
  private colHeaders:Array<string> = ['Rank', 'Team', 'Logo', 'Current Value ($mil)', '1-Yr Value Change (%)',
    'Debt/Value (%)', 'Revenue ($mil)', 'Operating Income ($mil)'];
  private options:any = {
    height: 600,
    rowHeaders: false,
    stretchH: 'all',
    columnSorting: true,
    contextMenu: true,
    autoWrapRow: true,
    columns: [
      {data: 0, type: 'numeric'},
      {data: 1, type: 'text'},
      {data: 2, renderer: 'html', width: 200},
      {data: 3, type: 'numeric', format: '$0,0.00'},
      {data: 4, type: 'numeric', format: '0.00%'},
      {data: 5, type: 'numeric', format: '0.00%'},
      {data: 6, type: 'numeric', format: '$0,0.00'},
      {data: 7, type: 'numeric', format: '$0,0.00'}
    ],
    cells: function (row, col, prop) {
      let cellProperties:any = {};
      cellProperties.className = 'htMiddle htCenter';
      return cellProperties;
    }
  };

  constructor() {
    this.data = [
      [1, 'Los Angeles Lakers', '<img src="assets/images/lakers.gif">', '2600', '0.93', '0.02', '293', '104.1'],
      [2, 'New York Knicks', '<img src="assets/images/knicks.gif">', '2500', '0.79', '0.00', '278', '53.4'],
      [3, 'Chicago Bulls', '<img src="assets/images/bulls.gif">', '2000', '0.100', '0.03', '201', '65.3'],
      [4, 'Boston Celtics', '<img src="assets/images/celtic.gif">', '1700', '0.94', '0.09', '173', '54.9'],
      [5, 'Los Angeles Clippers', '<img src="assets/images/clippers.gif">', '1600', '0.178', '0.00', '146', '20.1'],
      [6, 'Brooklyn Nets', '<img src="assets/images/nets.gif">', '1500', '0.92', '0.019', '212', '-99.4'],
      [8, 'Houston Rockets', '<img src="assets/images/rockets.gif">', '1250', '0.61', '0.08', '175', '38'],
      [9, 'Miami Heat', '<img src="assets/images/heat.gif">', '1175', '0.53', '0.08', '188', '12.6'],
      [10, 'Dallas Mavericks', '<img src="assets/images/mavericks.gif">', '1150', '0.50', '0.017', '168', '30.4'],
      [11, 'San Antonio Spurs', '<img src="assets/images/spurs.gif">', '1000', '0.52', '0.08', '172', '40.9'],
      [12, 'Portland Trail Blazers', '<img src="assets/images/blazers.gif">', '940', '0.60', '0.011', '153', '11.7'],
      [13, 'Oklahoma City Thunder', '<img src="assets/images/thunder.gif">', '930', '0.58', '0.015', '152', '30.8'],
      [14, 'Toronto Raptors', '<img src="assets/images/raptors.gif">', '920', '0.77', '0.016', '151', '17.9'],
      [15, 'Cleveland Cavaliers', '<img src="assets/images/cavaliers.gif">', '915', '0.78', '0.022', '149', '20.6'],
      [16, 'Phoenix Suns', '<img src="assets/images/suns.gif">', '910', '0.61', '0.020', '145', '28.2'],
      [17, 'Washington Wizards', '<img src="assets/images/wizards.gif">', '900', '0.86', '0.014', '143', '10.1'],
      [18, 'Orlando Magic', '<img src="assets/images/magic.gif">', '875', '0.56', '0.017', '143', '20.9'],
      [19, 'Denver Nuggets', '<img src="assets/images/nuggets.gif">', '855', '0.73', '0.01', '136', '14'],
      [20, 'Utah Jazz', '<img src="assets/images/jazz.gif">', '850', '0.62', '0.06', '142', '32.7'],
      [21, 'Indiana Pacers', '<img src="assets/images/pacers.gif">', '830', '0.75', '0.018', '139', '25'],
      [22, 'Atlanta Hawks', '<img src="assets/images/hawks.gif">', '825', '0.94', '0.021', '133', '14.8'],
      [23, 'Detroit Pistons', '<img src="assets/images/pistons.gif">', '810', '0.80', '0.023', '144', '17.6'],
      [24, 'Sacramento Kings', '<img src="assets/images/kings.gif">', '800', '0.45', '0.029', '125', '8.9'],
      [25, 'Memphis Grizzlies', '<img src="assets/images/memphis.gif">', '750', '0.66', '0.023', '135', '10.5'],
      [26, 'Charlotte Hornets', '<img src="assets/images/hornets.gif">', '725', '0.77', '0.021', '130', '1.2'],
      [27, 'Philadelphia 76ers', '<img src="assets/images/76ers.gif">', '700', '0.49', '0.021', '125', '24.4'],
      [28, 'New Orleans Pelicans', '<img src="assets/images/orleans.gif">', '650', '0.55', '0.019', '131', '19'],
      [29, 'Minnesota Timberwolves', '<img src="assets/images/timberwolves.gif">', '625', '0.45', '0.016', '128', '6.9'],
      [30, 'Milwaukee Bucks', '<img src="assets/images/bucks.gif">', '600', '0.48', '0.029', '110', '11.5']
    ];
  }
}
