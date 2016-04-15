/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
import { OnInit, OnDestroy, ElementRef } from 'angular2/core';
export declare class HotTable implements OnInit, OnDestroy {
    private element;
    private inst;
    private view;
    private data;
    private colHeaders;
    private columns;
    private colWidths;
    private options;
    constructor(element: ElementRef);
    parseAutoComplete(column: any, dataSet: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare const handsontable: Array<any>;
