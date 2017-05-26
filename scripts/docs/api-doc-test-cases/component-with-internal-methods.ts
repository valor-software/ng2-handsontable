// tslint:disable:no-empty
import { Component, Input, OnInit } from '@angular/core';

/**
 * Foo doc
 */
@Component({
  selector: '[foo]',
  template: '<button (click)="forTemplateOnly()">{{buttonTxt}}</button>',
  exportAs: 'foo'
})
export class FooComponent implements OnInit {
  @Input() buttonTxt;

  constructor() {}

  /**
   * Only used in a template
   *
   * @internal
   */
  forTemplateOnly() {
    console.log('I was clicked!');
  }

  ngOnInit() {}

  // tslint:disable-next-line:prefer-function-over-method
  private _dontSerialize() {}
}
