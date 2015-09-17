webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(41);


/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../tsd.d.ts"/>
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(75));
	__export(__webpack_require__(76));
	//# sourceMappingURL=index.js.map

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../tsd.d.ts" />
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(21);
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
	    function HotTable(element) {
	        this.element = element;
	        this.afterCellMetaReset = new angular2_1.EventEmitter();
	        this.afterChange = new angular2_1.EventEmitter();
	        this.afterCreateCol = new angular2_1.EventEmitter();
	        this.afterCreateRow = new angular2_1.EventEmitter();
	        this.afterDeselect = new angular2_1.EventEmitter();
	        this.afterDestroy = new angular2_1.EventEmitter();
	        this.afterDocumentKeyDown = new angular2_1.EventEmitter();
	        this.afterGetCellMeta = new angular2_1.EventEmitter();
	        this.afterGetColHeader = new angular2_1.EventEmitter();
	        this.afterGetRowHeader = new angular2_1.EventEmitter();
	        this.afterInit = new angular2_1.EventEmitter();
	        this.afterIsMultipleSelectionCheck = new angular2_1.EventEmitter();
	        this.afterLoadData = new angular2_1.EventEmitter();
	        this.afterMomentumScroll = new angular2_1.EventEmitter();
	        this.afterOnCellCornerMouseDown = new angular2_1.EventEmitter();
	        this.afterOnCellMouseDown = new angular2_1.EventEmitter();
	        this.afterOnCellMouseOver = new angular2_1.EventEmitter();
	        this.afterRemoveCol = new angular2_1.EventEmitter();
	        this.afterRemoveRow = new angular2_1.EventEmitter();
	        this.afterRender = new angular2_1.EventEmitter();
	        this.afterRenderer = new angular2_1.EventEmitter();
	        this.afterScrollHorizontally = new angular2_1.EventEmitter();
	        this.afterScrollVertically = new angular2_1.EventEmitter();
	        this.afterSelection = new angular2_1.EventEmitter();
	        this.afterSelectionByProp = new angular2_1.EventEmitter();
	        this.afterSelectionEnd = new angular2_1.EventEmitter();
	        this.afterSelectionEndByProp = new angular2_1.EventEmitter();
	        this.afterSetCellMeta = new angular2_1.EventEmitter();
	        this.afterUpdateSettings = new angular2_1.EventEmitter();
	        this.afterValidate = new angular2_1.EventEmitter();
	        this.beforeAutofill = new angular2_1.EventEmitter();
	        this.beforeCellAlignment = new angular2_1.EventEmitter();
	        this.beforeChange = new angular2_1.EventEmitter();
	        this.beforeChangeRender = new angular2_1.EventEmitter();
	        this.beforeDrawBorders = new angular2_1.EventEmitter();
	        this.beforeGetCellMeta = new angular2_1.EventEmitter();
	        this.beforeInit = new angular2_1.EventEmitter();
	        this.beforeInitWalkontable = new angular2_1.EventEmitter();
	        this.beforeKeyDown = new angular2_1.EventEmitter();
	        this.beforeOnCellMouseDown = new angular2_1.EventEmitter();
	        this.beforeRemoveCol = new angular2_1.EventEmitter();
	        this.beforeRemoveRow = new angular2_1.EventEmitter();
	        this.beforeRender = new angular2_1.EventEmitter();
	        this.beforeSetRangeEnd = new angular2_1.EventEmitter();
	        this.beforeTouchScroll = new angular2_1.EventEmitter();
	        this.beforeValidate = new angular2_1.EventEmitter();
	        this.construct = new angular2_1.EventEmitter();
	        this.init = new angular2_1.EventEmitter();
	        this.modifyCol = new angular2_1.EventEmitter();
	        this.modifyColWidth = new angular2_1.EventEmitter();
	        this.modifyRow = new angular2_1.EventEmitter();
	        this.modifyRowHeight = new angular2_1.EventEmitter();
	        this.persistentStateLoad = new angular2_1.EventEmitter();
	        this.persistentStateReset = new angular2_1.EventEmitter();
	        this.persistentStateSave = new angular2_1.EventEmitter();
	        this.data = [];
	        this.colHeaders = [];
	        this.columns = [];
	        this.colWidths = [];
	        this.options = {};
	    }
	    HotTable.prototype.parseAutoComplete = function (column, dataSet) {
	        var inst = this.inst;
	        if (typeof column.source === 'string') {
	            var relatedField = column.source;
	            column.source = function (query, process) {
	                var row = inst.getSelected()[0];
	                var data = dataSet[row];
	                if (!data) {
	                    return;
	                }
	                var fieldParts = relatedField.split('.');
	                var o = data;
	                for (var i = 0; i < fieldParts.length; i++) {
	                    o = o[fieldParts[i]];
	                }
	                process(o.map(function (item) {
	                    return !column.optionField ? item : item[column.optionField];
	                }));
	            };
	        }
	    };
	    HotTable.prototype.onInit = function () {
	        var _this = this;
	        this.view = document.createElement('div');
	        this.view.class = 'handsontable-container';
	        this.element.nativeElement.appendChild(this.view);
	        var htOptions = {
	            data: this.data,
	            width: this.width,
	            height: this.height,
	            stretchH: 'all',
	            columnSorting: true
	        };
	        eventNames.forEach(function (eventName) {
	            htOptions[eventName] = function (data) {
	                _this[eventName].next(data);
	            };
	        });
	        Object.assign(htOptions, {
	            colHeaders: this.colHeaders,
	            columns: this.columns,
	            colWidths: this.colWidths
	        }, this.options);
	        this.inst = Handsontable(this.view, htOptions);
	        this.columns.forEach(function (column) {
	            _this.parseAutoComplete(column, _this.data);
	        });
	    };
	    HotTable.prototype.onDestroy = function () {
	        if (this.view) {
	            this.view.remove();
	        }
	    };
	    HotTable = __decorate([
	        angular2_1.Directive({
	            selector: 'hot-table',
	            properties: [
	                'data',
	                'colHeaders',
	                'columns',
	                'colWidths',
	                'options',
	                'width',
	                'height'
	            ],
	            events: eventNames,
	            lifecycle: [angular2_1.LifecycleEvent.onInit, angular2_1.LifecycleEvent.onDestroy]
	        }), 
	        __metadata('design:paramtypes', [angular2_1.ElementRef])
	    ], HotTable);
	    return HotTable;
	})();
	exports.HotTable = HotTable;
	exports.handsontable = [HotTable];
	//# sourceMappingURL=handsontable.js.map

/***/ },

/***/ 76:
/***/ function(module, exports) {

	(function (Ng2HandsontableTheme) {
	    Ng2HandsontableTheme[Ng2HandsontableTheme["BS3"] = 1] = "BS3";
	    Ng2HandsontableTheme[Ng2HandsontableTheme["BS4"] = 2] = "BS4";
	})(exports.Ng2HandsontableTheme || (exports.Ng2HandsontableTheme = {}));
	var Ng2HandsontableTheme = exports.Ng2HandsontableTheme;
	var Ng2HandsontableConfig = (function () {
	    function Ng2HandsontableConfig() {
	    }
	    Object.defineProperty(Ng2HandsontableConfig, "theme", {
	        get: function () {
	            var w = window;
	            if (w && w.__theme === 'bs4') {
	                return Ng2HandsontableTheme.BS4;
	            }
	            return (this._theme || Ng2HandsontableTheme.BS3);
	        },
	        set: function (v) {
	            this._theme = v;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Ng2HandsontableConfig;
	})();
	exports.Ng2HandsontableConfig = Ng2HandsontableConfig;
	//# sourceMappingURL=ng2-handsontable-config.js.map

/***/ }

});
//# sourceMappingURL=angular2-handsontable.js.map