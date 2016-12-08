import { OnInit, OnDestroy, OnChanges, SimpleChanges, ElementRef, NgZone } from '@angular/core';
export declare class HotTable implements OnInit, OnDestroy, OnChanges {
    private element;
    private ngZone;
    private inst;
    private view;
    private pagedDataSubscription;
    private data;
    private pagedData$;
    private colHeaders;
    private columns;
    private colWidths;
    private options;
    constructor(element: ElementRef, ngZone: NgZone);
    private parseAutoComplete(options);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private checkInputs();
    private getCurrentOptions();
}
export declare const handsontable: Array<any>;
