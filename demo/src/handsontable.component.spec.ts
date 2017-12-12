/* tslint:disable:no-any no-magic-numbers no-consecutive-blank-lines max-file-line-count */
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import { HotTableModule } from '../../src/handsontable.module';
import { HotTableComponent } from '../../src/handsontable.component';
import { BasicDemoComponent } from './components/handsontable/basic-demo';
import { AdvancedDemoComponent } from './components/handsontable/advanced-demo';
import { SheetDemoComponent } from './components/handsontable/sheet-demo';
import { FinanceDemoComponent } from './components/handsontable/finance-demo';
import { ScienceDemoComponent } from './components/handsontable/science-demo';
import { SportDemoComponent } from './components/handsontable/sport-demo';
import { DemoModule } from './demo.module';
import * as Handsontable from 'handsontable';


@Component({template: ''})
class TestComponent {}

let fixture: ComponentFixture<TestComponent>;


describe('HotTableComponent', () => {

  afterEach(() => {
    fixture.destroy();
  });

  describe('without attributes', () => {

    beforeEach(done => {
      TestBed.configureTestingModule({
        providers: [],
        declarations: [TestComponent],
        imports: [HotTableModule],
        schemas: [NO_ERRORS_SCHEMA]
      });
      buildTestComponentFromProperties({})
      .then(comp => {
        fixture = comp;
        done();
      })
      .catch(done.fail);
    });

    it('should produce an empty table', () => {
      expect(fixture).toBeTruthy();
      const table = getTable(fixture);
      scrollToBottomOfTable(table);
      assertDimension(table, 0, 0);
    });

  });

  describe('with [data]', () => {

    beforeEach(done => {
      TestBed.configureTestingModule({
        providers: [],
        declarations: [TestComponent],
        imports: [HotTableModule],
        schemas: [NO_ERRORS_SCHEMA]
      });
      buildTestComponentFromProperties({ data: [['1', '2'], ['3', '4']] })
      .then(comp => {
        fixture = comp;
        done();
      })
      .catch(done.fail);
    });

    it('should display correctly', () => {
      expect(fixture).toBeTruthy();
      const table = getTable(fixture);
      scrollToBottomOfTable(table);
      assertDimension(table, 2, 2);
    });

  });


  describe('basic example', () => {

    beforeEach(done => {
      TestBed.configureTestingModule({
        imports: [DemoModule],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(BasicDemoComponent);
        fixture.detectChanges();
        done();
      }).catch(done.fail);
    });

    it('should display correctly', () => {
      expect(fixture).toBeTruthy();
      const table = getTable(fixture);
      scrollToBottomOfTable(table);
      assertDimension(table, 11, 7);
    });

  });

  describe('advanced example', () => {

    beforeEach(done => {
      TestBed.configureTestingModule({
        imports: [DemoModule],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AdvancedDemoComponent);
        fixture.detectChanges();
        done();
      })
      .catch(done.fail);
    });

    it('should display correctly', () => {
      expect(fixture).toBeTruthy();
      const table = getTable(fixture);
      scrollToBottomOfTable(table);
      assertDimension(table, 189, 7, 'tbody');
    });

  });

  describe('sheet example', () => {

    beforeEach(done => {
      TestBed.configureTestingModule({
        imports: [DemoModule],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SheetDemoComponent);
        fixture.detectChanges();
        done();
      })
      .catch(done.fail);
    });

    it('should display correctly', () => {
      expect(fixture).toBeTruthy();
      const table = getTable(fixture);
      scrollToBottomOfTable(table);
      assertDimension(table, 100, 12, 'tbody');
    });

  });

  describe('finance example', () => {

    beforeEach(done => {
      TestBed.configureTestingModule({
        imports: [DemoModule],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(FinanceDemoComponent);
        fixture.detectChanges();
        done();
      })
      .catch(done.fail);
    });

    it('should display correctly', () => {
      expect(fixture).toBeTruthy();
      const table = getTable(fixture);
      scrollToBottomOfTable(table);
      assertDimension(table, 15, 5, 'tbody');
    });

  });

  describe('science example', () => {

    beforeEach(done => {
      TestBed.configureTestingModule({
        imports: [DemoModule],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ScienceDemoComponent);
        fixture.detectChanges();
        done();
      })
      .catch(done.fail);
    });

    it('should display correctly', () => {
      expect(fixture).toBeTruthy();
      const table = getTable(fixture);
      scrollToBottomOfTable(table);
      assertDimension(table, 110, 5, 'tbody');
    });

  });

  describe('sport example', () => {

    beforeEach(done => {
      TestBed.configureTestingModule({
        imports: [DemoModule],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SportDemoComponent);
        fixture.detectChanges();
        done();
      })
      .catch(done.fail);
    });

    it('should display correctly', () => {
      expect(fixture).toBeTruthy();
      const table = getTable(fixture);
      scrollToBottomOfTable(table);
      assertDimension(table, 30, 8, 'tbody');
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

function buildTestComponentFromProperties(inputsAndOutputs: object) {
  const component = new HotTableComponent(null, null);
  // Build template
  const inputs = ['data', 'pagedData', 'colHeaders', 'columns', 'colWidths', 'options'];
  let template = '<hotTable ';
  _.forOwn(inputsAndOutputs, (value, key) => {
    if (component[key] instanceof EventEmitter) {
      template += `(${key})="${key}"`;
    } else {
      template += `[${key}]="${key}"`;
    }
  });
  template += '><hotTable>';

  return compileTestComponent(template, inputsAndOutputs);
}

/* Retrieve main Handsontable <table> element in component element */
function getTable(component: ComponentFixture<any>): Element {
  // Return last result, as buildTestComponentFromProperties() creates 2 instances for unknown reasons
  const results = (component.nativeElement as Element).querySelectorAll('.ht_master table');

  return results[results.length - 1];
}

function scrollToBottomOfTable(table: Element) {
  table.scrollIntoView();
  if (table.nextElementSibling) {
    table.nextElementSibling.scrollIntoView();
    table.nextElementSibling.scrollIntoView();
  }
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
  const cells = table.querySelectorAll(`tbody tr:nth-child(${row}) > td, tbody tr:nth-child(${row}) > th`);

  return cells[column - 1].textContent;
}
