/* tslint:disable:no-any no-magic-numbers no-consecutive-blank-lines max-file-line-count */
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { BasicDemoComponent } from './components/handsontable/basic-demo';
import { DemoModule } from './demo.module';

let fixture: ComponentFixture<any>;

describe('HotTableComponent', () => {

  describe('basic example', () => {

    beforeEach( async(() => {
      TestBed.configureTestingModule({
        imports: [DemoModule]
      })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(BasicDemoComponent);
        fixture.detectChanges();
      });
    }));

    fit('should display correctly', () => {
      expect(fixture).toBeTruthy();
    });

  });

});
