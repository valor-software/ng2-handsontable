webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);


/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../tsd.d.ts"/>
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(84));
	__export(__webpack_require__(85));
	//# sourceMappingURL=index.js.map

/***/ },

/***/ 84:
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
	var angular2_1 = __webpack_require__(5);
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
	        var _this = this;
	        this.element = element;
	        this.data = [];
	        eventNames.forEach(function (eventName) {
	            _this[eventName] = new angular2_1.EventEmitter();
	        });
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
	            data: this.data
	        };
	        eventNames.forEach(function (eventName) {
	            htOptions[eventName] = function (data) {
	                _this[eventName].next(data);
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
	        this.inst = Handsontable(this.view, htOptions);
	        if (this.columns && this.columns.length) {
	            this.columns.forEach(function (column) {
	                _this.parseAutoComplete(column, _this.data);
	            });
	        }
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
	                'options'
	            ],
	            events: eventNames
	        }), 
	        __metadata('design:paramtypes', [angular2_1.ElementRef])
	    ], HotTable);
	    return HotTable;
	})();
	exports.HotTable = HotTable;
	exports.handsontable = [HotTable];
	//# sourceMappingURL=handsontable.js.map

/***/ },

/***/ 85:
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