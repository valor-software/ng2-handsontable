/* tslint:disable:no-any no-magic-numbers no-consecutive-blank-lines */
import { inject, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, NgModule } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import * as _ from 'lodash';
import { htEventNames, HotTableComponent } from '../../src/handsontable.component';
import { DemoModule } from './demo.module';
import { BasicDemoComponent } from './components/handsontable/basic-demo';
import { HotTableModule } from '../../src/handsontable.module';


@Component({template: ''})
class TestComponent {}


describe('HotTableComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      declarations: [TestComponent],
      imports: [HotTableModule, DemoModule]
    });
  });

  describe('without attributes', () => {

    it('should produce an empty table', () => {
      return buildTestComponentFromProperties({})
        .then(component => {
          expect(component).toBeTruthy();
          const table = getTable(component);
          assertDimension(table, 0, 0);
        });
    });

  });

  describe('with [data]', () => {

    it('should display correctly', () => {
      return buildTestComponentFromProperties({
        data: [['1', '2'], ['3', '4']]
      })
        .then(component => {
          expect(component).toBeTruthy();
          const table = getTable(component);
          assertDimension(table, 2, 2);
          expect(getCellContent(table, 2, 1)).toBe('3');
        });
    });

  });


  describe('basic example', () => {

    it('should display correctly', () => {
      return compileTestComponent('<basic-demo></basic-demo>')
        .then(component => {
          expect(component).toBeTruthy();
          const table = getTable(component);
          assertDimension(table, 11, 7);
          assertDimension(table, 10, 7, 'tbody');
          expect(getCellContent(table, 10, 2)).toBeTruthy(); // random data
        });
    });

  });

  describe('advanced example', () => {

    it('should display correctly', () => {
      return compileTestComponent('<advanced-demo></advanced-demo>')
        .then(component => {
          expect(component).toBeTruthy();
          const table = getTable(component);
          assertDimension(table, 189, 7, 'tbody');
          expect(getCellContent(table, 10, 1)).toBe('Azerbaijan');
        });
    });

  });

  describe('sheet example', () => {

    it('should display correctly', () => {
      return compileTestComponent('<sheet-demo></sheet-demo>')
        .then(component => {
          expect(component).toBeTruthy();
          const table = getTable(component);
          assertDimension(table, 100, 12, 'tbody');
          expect(getCellContent(table, 10, 1)).toBe('B10');
        });
    });

  });

  describe('finance example', () => {

    it('should display correctly', () => {
      return compileTestComponent('<finance-demo></finance-demo>')
        .then(component => {
          expect(component).toBeTruthy();
          const table = getTable(component);
          assertDimension(table, 15, 5, 'tbody');
          expect(getCellContent(table, 10, 1)).toBe('$212.41');
        });
    });

  });

  describe('science example', () => {

    it('should display correctly', () => {
      return compileTestComponent('<science-demo></science-demo>')
        .then(component => {
          expect(component).toBeTruthy();
          const table = getTable(component);
          assertDimension(table, 110, 5, 'tbody');
          expect(getCellContent(table, 10, 3)).toBe('0.008387622149837');
        });
    });

  });

  describe('sport example', () => {

    it('should display correctly', () => {
      return compileTestComponent('<sport-demo></sport-demo>')
        .then(component => {
          expect(component).toBeTruthy();
          const table = getTable(component);
          assertDimension(table, 30, 8, 'tbody');
          expect(getCellContent(table, 3, 2)).toBe('Chicago Bulls');
        });
    });

  });

});



/*---- Helpers ----*/

function compileTestComponent(template: string, properties?: object) {
  TestBed.overrideComponent(TestComponent, {set: { template }});

  return TestBed.compileComponents()
    .then(() => {
      const component = TestBed.createComponent(TestComponent);
      _.extend(component.componentInstance, properties);
      component.detectChanges();

      return component;
    });
}

function buildTestComponentFromProperties(properties: object) {
  // Build template
  const inputs = ['data', 'pagedData', 'colHeaders', 'columns', 'colWidths', 'options'];
  const outputs = htEventNames;
  let template = '<hotTable ';
  for (const input of inputs) {
    if (input in properties) {
      template += `[${input}]="${input}"`;
    }
  }
  for (const ouput of outputs) {
    if (ouput in properties) {
      template += `(${ouput})="${ouput}"`;
    }
  }
  template += '><hotTable>';

  return compileTestComponent(template, properties);
}

/* Retrieve main Handsontable <table> element in component element */
function getTable(component: ComponentFixture<any>): Element {
  // Return last result, as buildTestComponentFromProperties() creates 2 instances for unknown reasons
  const results = (component.nativeElement as Element).querySelectorAll('.ht_master table');

  return results[results.length - 1];
}

/* Assert height and width of table's body or */
function assertDimension(table: Element, height: number, width: number, section?: 'thead' | 'tbody') {
  if (height <= 10) {
    expect(table.querySelectorAll(`${section || ''} tr`).length).toBe(height);
  } else {
    // TODO: Scroll down to ensure all rows are rendered (or add renderAllRowsBoolean option to demos)
    expect(table.querySelectorAll(`${section || ''} tr`).length).toBeGreaterThan(10);
  }
  if (section === 'thead') {
    expect(table.querySelectorAll(`thead tr:first-child > th`).length).toBe(width);
  } else {
    expect(table.querySelectorAll(`tbody tr:first-child > td`).length).toBe(width);
  }
}

/**
 * Get text content of a specific table cell in the table's body
 *
 * @param {Element} table table DOM element
 * @param {number} row 1-based index
 * @param {number} column  1-based index
 * @returns {string} cell's text content
 */
function getCellContent(table: Element, row: number, column: number): string {
  return table.querySelector(`tbody tr:nth-child(${row}) > td:nth-child(${column})`).textContent;
}
