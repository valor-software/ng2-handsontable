"use strict";
var core_1 = require('@angular/core');
var Handsontable = require('handsontable/dist/handsontable.full.js');
var eventNames = ['afterCellMetaReset', 'afterChange',
    'afterCreateCol', 'afterCreateRow', 'afterDeselect',
    'afterDestroy', 'afterDocumentKeyDown', 'afterGetCellMeta', 'afterGetColHeader', 'afterGetRowHeader',
    'afterInit', 'afterIsMultipleSelectionCheck', 'afterLoadData',
    'afterMomentumScroll', 'afterOnCellCornerMouseDown',
    'afterOnCellMouseDown', 'afterOnCellMouseOver', 'afterRemoveCol', 'afterRemoveRow', 'afterRender',
    'afterRenderer', 'afterScrollHorizontally', 'afterScrollVertically',
    'afterSelection', 'afterSelectionByProp',
    'afterSelectionEnd', 'afterSelectionEndByProp', 'afterSetCellMeta', 'afterUpdateSettings', 'afterValidate',
    'beforeAutofill', 'beforeCellAlignment', 'beforeChange', 'beforeChangeRender', 'beforeDrawBorders',
    'beforeGetCellMeta', 'beforeInit', 'beforeInitWalkontable', 'beforeKeyDown', 'beforeOnCellMouseDown',
    'beforeRemoveCol', 'beforeRemoveRow', 'beforeRender', 'beforeSetRangeEnd', 'beforeTouchScroll',
    'beforeValidate', 'construct', 'init', 'modifyCol', 'modifyColWidth', 'modifyRow', 'modifyRowHeight',
    'persistentStateLoad', 'persistentStateReset', 'persistentStateSave'];
var HotTable = (function () {
    function HotTable(element, ngZone) {
        var _this = this;
        this.element = element;
        this.ngZone = ngZone;
        this.data = [];
        eventNames.forEach(function (eventName) {
            _this[eventName] = new core_1.EventEmitter();
        });
    }
    HotTable.prototype.parseAutoComplete = function (options) {
        var inst = this.inst;
        var columns = this.columns || options.columns;
        var dataSet = options.data;
        if (columns) {
            columns.forEach(function (column) {
                if (typeof column.source === 'string') {
                    var relatedField_1 = column.source;
                    column.source = function (query, process) {
                        var row = inst.getSelected()[0];
                        var data = dataSet[row];
                        if (!data) {
                            return;
                        }
                        var fieldParts = relatedField_1.split('.');
                        var o = data;
                        for (var i = 0; i < fieldParts.length; i++) {
                            o = o[fieldParts[i]];
                        }
                        process(o.map(function (item) {
                            return !column.optionField ? item : item[column.optionField];
                        }));
                    };
                }
            });
        }
    };
    HotTable.prototype.ngOnInit = function () {
        var _this = this;
        this.checkInputs();
        this.view = document.createElement('div');
        this.view.class = 'handsontable-container';
        this.element.nativeElement.appendChild(this.view);
        var options = this.getCurrentOptions();
        this.ngZone.runOutsideAngular(function () {
            _this.inst = new Handsontable(_this.view, options);
        });
        this.parseAutoComplete(options);
        if (this.pagedData$) {
            this.data = [];
            this.pagedDataSubscription = this.pagedData$.subscribe(function (newPagedData) {
                Array.prototype.push.apply(_this.data, newPagedData);
                _this.inst.loadData(_this.data);
                _this.parseAutoComplete(options);
                _this.inst.updateSettings(options);
            });
        }
    };
    HotTable.prototype.ngOnDestroy = function () {
        if (this.view) {
            this.view.remove();
        }
        if (this.pagedDataSubscription) {
            this.pagedDataSubscription.unsubscribe();
        }
        if (this.inst) {
            this.inst.destroy();
        }
    };
    HotTable.prototype.ngOnChanges = function (changes) {
        if (changes['data'] && !changes['data'].isFirstChange()) {
            this.inst.loadData(this.data);
        }
        if ('options' in changes && this.inst) {
            this.inst.updateSettings(this.getCurrentOptions());
        }
    };
    HotTable.prototype.checkInputs = function () {
        var dataCount = Number(!!this.pagedData$) + Number(!!this.data) +
            Number(!!(this.options && this.options.data));
        if (dataCount > 1) {
            console.error('[pagedData], [data] and [options.data] are all mutually' +
                ' exclusive');
            return false;
        }
        else if (dataCount === 0) {
            console.error('One of [pagedData], [data] and [options.data] needs' +
                ' to be provided');
            return false;
        }
    };
    HotTable.prototype.getCurrentOptions = function () {
        var _this = this;
        var htOptions = {
            data: this.data || null
        };
        eventNames.forEach(function (eventName) {
            htOptions[eventName] = function (data) {
                _this[eventName].emit(data);
            };
        });
        var additionalFields = ['colHeaders', 'colWidths', 'columns'];
        additionalFields.forEach(function (field) {
            if (_this[field]) {
                Object.assign(htOptions, (_a = {},
                    _a[field] = _this[field],
                    _a
                ));
            }
            var _a;
        });
        if (this.options) {
            Object.assign(htOptions, this.options);
        }
        return htOptions;
    };
    HotTable.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'hot-table',
                    outputs: eventNames
                },] },
    ];
    HotTable.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
    ];
    HotTable.propDecorators = {
        'data': [{ type: core_1.Input },],
        'pagedData$': [{ type: core_1.Input, args: ['pagedData',] },],
        'colHeaders': [{ type: core_1.Input, args: ['col-headers',] },],
        'columns': [{ type: core_1.Input },],
        'colWidths': [{ type: core_1.Input, args: ['col-widths',] },],
        'options': [{ type: core_1.Input },],
    };
    return HotTable;
}());
exports.HotTable = HotTable;
exports.handsontable = [HotTable];
//# sourceMappingURL=handsontable.js.map