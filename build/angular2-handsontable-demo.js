webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

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
	/// <reference path="../tsd.d.ts" />
	var angular2_1 = __webpack_require__(21);
	var index_1 = __webpack_require__(41);
	var w = window;
	if (w && w.__theme === 'bs4') {
	    index_1.Ng2HandsontableConfig.theme = index_1.Ng2HandsontableTheme.BS4;
	}
	var handsontable_section_1 = __webpack_require__(194);
	var gettingStarted = __webpack_require__(186);
	var Demo = (function () {
	    function Demo() {
	        this.isBs3 = index_1.Ng2HandsontableConfig.theme === index_1.Ng2HandsontableTheme.BS3;
	    }
	    Demo = __decorate([
	        angular2_1.Component({
	            selector: 'app'
	        }),
	        angular2_1.View({
	            template: "\n  <!--<demo-header>Loading header</demo-header>-->\n\n  <main class=\"bd-pageheader\">\n    <div class=\"container\">\n      <h1>ng2-handsontable</h1>\n      <p>Native Angular2 directives for Handsontable</p>\n      <a class=\"btn btn-primary\" href=\"https://github.com/valor-software/ng2-handsontable\">View on GitHub</a>\n      <div class=\"row\">\n        <!--<div class=\"col-lg-1\"><iframe src=\"https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-bootstrap&type=star&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"170px\" height=\"20px\"></iframe></div>\n        <div class=\"col-lg-1\"><iframe src=\"https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-bootstrap&type=fork&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"170px\" height=\"20px\"></iframe></div>-->\n      </div>\n    </div>\n  </main>\n\n  <div class=\"container\">\n    <div class=\"col-md-12 card card-block panel panel-default\">\n      <selection>\n          <h1>ng2-handsontable available with:\n          <a class=\"btn btn-default btn-secondary btn-lg\" [ng-class]=\"{active: isBs3}\" href=\"./\">Bootstrap 3</a>\n          <a class=\"btn btn-default btn-secondary btn-lg\" [ng-class]=\"{active: !isBs3}\" href=\"./index-bs4.html\">Bootstrap 4</a>\n          </h1>\n      </selection>\n    </div>\n    <br>\n    <section id=\"getting-started\">" + gettingStarted + "</section>\n\n    <handsontable-section class=\"col-md-12\"></handsontable-section>\n  </div>\n\n  </div>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <p class=\"text-muted text-center\"><a href=\"https://github.com/valor-software/ng2-handsontable\">ng2-handsontable</a> is maintained by <a href=\"https://github.com/valor-software\">valor-software</a>.</p>\n    </div>\n  </footer>\n  ",
	            directives: [
	                angular2_1.NgClass,
	                handsontable_section_1.HandsontableSection
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Demo);
	    return Demo;
	})();
	exports.Demo = Demo;
	angular2_1.bootstrap(Demo);
	//# sourceMappingURL=index.js.map

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

/***/ },

/***/ 184:
/***/ function(module, exports) {

	module.exports = "<h3 id=\"usage\">Usage</h3>\n<pre class=\"language-typescript\"><code class=\"language-typescript\"><span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span>handsontable<span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'ng2-handsontable'</span><span class=\"token punctuation\" >;</span>\n</code></pre>\n";

/***/ },

/***/ 185:
/***/ function(module, exports) {

	module.exports = "";

/***/ },

/***/ 186:
/***/ function(module, exports) {

	module.exports = "<h1 id=\"getting-started\">Getting started</h1>\n<h3 id=\"first-of-all-welcome-\">First of all, Welcome!</h3>\n";

/***/ },

/***/ 187:
/***/ function(module, exports) {

	module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>hot-table</span> <span class=\"token attr-name\" >[data]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>data<span class=\"token punctuation\" >\"</span></span>\n           <span class=\"token attr-name\" >(after-change)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>afterChange($event)<span class=\"token punctuation\" >\"</span></span>\n           <span class=\"token attr-name\" >(after-on-cell-mouse-down)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>afterOnCellMouseDown($event)<span class=\"token punctuation\" >\"</span></span>\n           <span class=\"token attr-name\" >[col-headers]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>colHeaders<span class=\"token punctuation\" >\"</span></span>\n           <span class=\"token attr-name\" >[columns]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>columns<span class=\"token punctuation\" >\"</span></span>\n           <span class=\"token attr-name\" >[options]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>options<span class=\"token punctuation\" >\"</span></span>\n           <span class=\"token attr-name\" >[col-widths]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>colWidths<span class=\"token punctuation\" >\"</span></span>\n           <span class=\"token attr-name\" >[height]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>200<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>hot-table</span><span class=\"token punctuation\" >></span></span>"

/***/ },

/***/ 188:
/***/ function(module, exports) {

	module.exports = "<span class=\"token comment\" spellcheck=\"true\">/// &lt;reference path=\"../../../tsd.d.ts\" /></span>\n\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span>\n  Component<span class=\"token punctuation\" >,</span> View<span class=\"token punctuation\" >,</span>\n  CORE_DIRECTIVES<span class=\"token punctuation\" >,</span> FORM_DIRECTIVES<span class=\"token punctuation\" >,</span> NgClass\n<span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'angular2/angular2'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span>handsontable<span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'../../../components/index'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >declare</span> <span class=\"token keyword\" >var</span> Handsontable<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Function</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// webpack html imports</span>\n<span class=\"token keyword\" >let</span> template <span class=\"token operator\" >=</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'./handsontable-demo.html'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >genData</span><span class=\"token punctuation\" >(</span>rows<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >number</span> <span class=\"token operator\" >=</span> <span class=\"token number\" >10</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >let</span> products<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span>\n      <span class=\"token punctuation\" >{</span>\n        description<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Big Mac'</span><span class=\"token punctuation\" >,</span>\n        options<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n          <span class=\"token punctuation\" >{</span>description<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Big Mac'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n          <span class=\"token punctuation\" >{</span>description<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Big Mac &amp; Co'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n          <span class=\"token punctuation\" >{</span>description<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'McRoyal'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n          <span class=\"token punctuation\" >{</span>description<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Hamburger'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n          <span class=\"token punctuation\" >{</span>description<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Cheeseburger'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n          <span class=\"token punctuation\" >{</span>description<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Double Cheeseburger'</span><span class=\"token punctuation\" >}</span>\n        <span class=\"token punctuation\" >]</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >{</span>\n        description<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Fried Potatoes'</span><span class=\"token punctuation\" >,</span>\n        options<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n          <span class=\"token punctuation\" >{</span>description<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Fried Potatoes'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n          <span class=\"token punctuation\" >{</span>description<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Fried Onions'</span><span class=\"token punctuation\" >}</span>\n        <span class=\"token punctuation\" >]</span>\n      <span class=\"token punctuation\" >}</span>\n    <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n    firstNames <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token string\" >'Ted'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'John'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Macy'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Rob'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Gwen'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Fiona'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Mario'</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token string\" >'Ben'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Kate'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Kevin'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Thomas'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Frank'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n    lastNames <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token string\" >'Tired'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Johnson'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Moore'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Rocket'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Goodman'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Farewell'</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token string\" >'Manson'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Bentley'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Kowalski'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Schmidt'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Tucker'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Fancy'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n    address <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token string\" >'Turkey'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Japan'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Michigan'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Russia'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Greece'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'France'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'USA'</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token string\" >'Germany'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Sweden'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Denmark'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Poland'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Belgium'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n  <span class=\"token keyword\" >let</span> items<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >let</span> product<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >let</span> newProduct<span class=\"token punctuation\" >;</span>\n\n  <span class=\"token keyword\" >for</span> <span class=\"token punctuation\" >(</span><span class=\"token keyword\" >let</span> i <span class=\"token operator\" >=</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span> i <span class=\"token operator\" >&lt;</span> rows<span class=\"token punctuation\" >;</span> i<span class=\"token operator\" >++</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// clone expected product</span>\n    product <span class=\"token operator\" >=</span> products<span class=\"token punctuation\" >[</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >floor</span><span class=\"token punctuation\" >(</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >random</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >*</span> products<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n    newProduct <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n      description<span class=\"token punctuation\" >:</span> product<span class=\"token punctuation\" >.</span>description<span class=\"token punctuation\" >,</span>\n      options<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    product<span class=\"token punctuation\" >.</span>options<span class=\"token punctuation\" >.</span><span class=\"token function\" >forEach</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >function</span> <span class=\"token punctuation\" >(</span>p<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      newProduct<span class=\"token punctuation\" >.</span>options<span class=\"token punctuation\" >.</span><span class=\"token function\" >push</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>description<span class=\"token punctuation\" >:</span> p<span class=\"token punctuation\" >.</span>description<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token comment\" spellcheck=\"true\">/// clone expected product</span>\n\n    items<span class=\"token punctuation\" >.</span><span class=\"token function\" >push</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      id<span class=\"token punctuation\" >:</span> i <span class=\"token operator\" >+</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >,</span>\n      name<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        first<span class=\"token punctuation\" >:</span> firstNames<span class=\"token punctuation\" >[</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >floor</span><span class=\"token punctuation\" >(</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >random</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >*</span> firstNames<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n        last<span class=\"token punctuation\" >:</span> lastNames<span class=\"token punctuation\" >[</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >floor</span><span class=\"token punctuation\" >(</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >random</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >*</span> lastNames<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >]</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n      date<span class=\"token punctuation\" >:</span> <span class=\"token template-string\" ><span class=\"token string\" >`</span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >max</span><span class=\"token punctuation\" >(</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >round</span><span class=\"token punctuation\" >(</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >random</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >*</span> <span class=\"token number\" >12</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" > / </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >max</span><span class=\"token punctuation\" >(</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >round</span><span class=\"token punctuation\" >(</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >random</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >*</span> <span class=\"token number\" >28</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" > /\n      </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span><span class=\"token punctuation\" >(</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >round</span><span class=\"token punctuation\" >(</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >random</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >*</span> <span class=\"token number\" >80</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >+</span> <span class=\"token number\" >1940</span><span class=\"token punctuation\" >)</span><span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >,</span>\n      address<span class=\"token punctuation\" >:</span> <span class=\"token template-string\" ><span class=\"token string\" >`</span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >floor</span><span class=\"token punctuation\" >(</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >random</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >*</span> <span class=\"token number\" >100000</span><span class=\"token punctuation\" >)</span><span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" > </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>address<span class=\"token punctuation\" >[</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >floor</span><span class=\"token punctuation\" >(</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >random</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >*</span> address<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >]</span><span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >,</span>\n      price<span class=\"token punctuation\" >:</span> Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >floor</span><span class=\"token punctuation\" >(</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >random</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >*</span> <span class=\"token number\" >100000</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >/</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >,</span>\n      isActive<span class=\"token punctuation\" >:</span> Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >floor</span><span class=\"token punctuation\" >(</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >random</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >*</span> products<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >/</span> <span class=\"token number\" >2</span> <span class=\"token operator\" >===</span> <span class=\"token number\" >0</span> <span class=\"token operator\" >?</span> <span class=\"token string\" >'Yes'</span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >'No'</span><span class=\"token punctuation\" >,</span>\n      product<span class=\"token punctuation\" >:</span> newProduct\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token keyword\" >return</span> items<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'handsontable-demo'</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n@<span class=\"token function\" >View</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  template<span class=\"token punctuation\" >:</span> template<span class=\"token punctuation\" >,</span>\n  directives<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>handsontable<span class=\"token punctuation\" >,</span> NgClass<span class=\"token punctuation\" >,</span> CORE_DIRECTIVES<span class=\"token punctuation\" >,</span> FORM_DIRECTIVES<span class=\"token punctuation\" >]</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >HandsontableDemo</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >private</span> data<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> <span class=\"token function\" >genData</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >100</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >private</span> colHeaders<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >string</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token string\" >'ID'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'First Name'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Last Name'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Address'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token string\" >'Favorite food'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Price'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'Is active'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >private</span> columns<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span>\n    <span class=\"token punctuation\" >{</span>\n      data<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'id'</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>\n      data<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name.first'</span><span class=\"token punctuation\" >,</span>\n      renderer<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'text'</span><span class=\"token punctuation\" >,</span>\n      readOnly<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >true</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>\n      data<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name.last'</span><span class=\"token punctuation\" >,</span>\n      readOnly<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >true</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>\n      data<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>\n      data<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'product.description'</span><span class=\"token punctuation\" >,</span>\n      source<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'product.options'</span><span class=\"token punctuation\" >,</span>\n      optionField<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'description'</span><span class=\"token punctuation\" >,</span>\n      type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'autocomplete'</span><span class=\"token punctuation\" >,</span>\n      strict<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >false</span><span class=\"token punctuation\" >,</span>\n      visibleRows<span class=\"token punctuation\" >:</span> <span class=\"token number\" >4</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>\n      data<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'price'</span><span class=\"token punctuation\" >,</span>\n      type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'numeric'</span><span class=\"token punctuation\" >,</span>\n      format<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'$ 0,0.00'</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>\n      data<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'isActive'</span><span class=\"token punctuation\" >,</span>\n      type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'checkbox'</span><span class=\"token punctuation\" >,</span>\n      checkedTemplate<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Yes'</span><span class=\"token punctuation\" >,</span>\n      uncheckedTemplate<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'No'</span>\n    <span class=\"token punctuation\" >}</span>\n  <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >private</span> colWidths<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >number</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token keyword\" >null</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >null</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >null</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >null</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >80</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >null</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >private</span> options<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n    stretchH<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'all'</span><span class=\"token punctuation\" >,</span>\n    columnSorting<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >true</span><span class=\"token punctuation\" >,</span>\n    contextMenu<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n      <span class=\"token string\" >'row_above'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'row_below'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'remove_row'</span>\n    <span class=\"token punctuation\" >]</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\n  <span class=\"token keyword\" >private</span> <span class=\"token function\" >afterChange</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token keyword\" >private</span> <span class=\"token function\" >afterOnCellMouseDown</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n"

/***/ },

/***/ 189:
/***/ function(module, exports) {

	module.exports = "<hot-table [data]=\"data\"\n           (after-change)=\"afterChange($event)\"\n           (after-on-cell-mouse-down)=\"afterOnCellMouseDown($event)\"\n           [col-headers]=\"colHeaders\"\n           [columns]=\"columns\"\n           [options]=\"options\"\n           [col-widths]=\"colWidths\"\n           [height]=\"200\">\n</hot-table>"

/***/ },

/***/ 194:
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
	var handsontable_demo_1 = __webpack_require__(195);
	var name = 'Handsontable';
	var src = 'https://github.com/valor-software/ng2-handsontable/blob/master/components/handsontable/handsontable.ts';
	var doc = __webpack_require__(184);
	var titleDoc = __webpack_require__(185);
	var ts = __webpack_require__(188);
	var html = __webpack_require__(187);
	var HandsontableSection = (function () {
	    function HandsontableSection() {
	    }
	    HandsontableSection = __decorate([
	        angular2_1.Component({
	            selector: 'handsontable-section'
	        }),
	        angular2_1.View({
	            template: "\n  <br>\n  <section id=\"" + name.toLowerCase() + "\">\n    <div class=\"row\"><h1>" + name + "<small>(<a href=\"" + src + "\">src</a>)</small></h1></div>\n\n    <hr>\n\n    <div class=\"row\"><div class=\"col-md-12\">" + titleDoc + "</div></div>\n\n    <div class=\"row\">\n      <h2>Example</h2>\n      <div class=\"card card-block panel panel-default panel-body\">\n        <handsontable-demo></handsontable-demo>\n      </div>\n    </div>\n\n    <br>\n\n    <div class=\"row\">\n      <!--<tabset>\n        <tab heading=\"Markup\">\n          <div class=\"card card-block panel panel-default panel-body\">\n            <pre class=\"language-html\"><code class=\"language-html\" ng-non-bindable>" + html + "</code></pre>\n          </div>\n        </tab>\n        <tab heading=\"TypeScript\">\n          <div class=\"card card-block panel panel-default panel-body\">\n            <pre class=\"language-typescript\"><code class=\"language-typescript\" ng-non-bindable>" + ts + "</code></pre>\n          </div>\n        </tab>\n      </tabset>-->\n    </div>\n\n    <br>\n\n    <div class=\"row\">\n      <h2>API</h2>\n      <!--<div class=\"card card-block panel panel-default panel-body\">" + doc + "</div>-->\n    </div>\n  </section>\n  ",
	            directives: [handsontable_demo_1.HandsontableDemo, angular2_1.CORE_DIRECTIVES, angular2_1.NgNonBindable]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HandsontableSection);
	    return HandsontableSection;
	})();
	exports.HandsontableSection = HandsontableSection;
	//# sourceMappingURL=handsontable-section.js.map

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../tsd.d.ts" />
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
	var index_1 = __webpack_require__(41);
	var template = __webpack_require__(189);
	function genData(rows) {
	    if (rows === void 0) { rows = 10; }
	    var products = [
	        {
	            description: 'Big Mac',
	            options: [
	                { description: 'Big Mac' },
	                { description: 'Big Mac & Co' },
	                { description: 'McRoyal' },
	                { description: 'Hamburger' },
	                { description: 'Cheeseburger' },
	                { description: 'Double Cheeseburger' }
	            ]
	        },
	        {
	            description: 'Fried Potatoes',
	            options: [
	                { description: 'Fried Potatoes' },
	                { description: 'Fried Onions' }
	            ]
	        }
	    ], firstNames = ['Ted', 'John', 'Macy', 'Rob', 'Gwen', 'Fiona', 'Mario',
	        'Ben', 'Kate', 'Kevin', 'Thomas', 'Frank'], lastNames = ['Tired', 'Johnson', 'Moore', 'Rocket', 'Goodman', 'Farewell',
	        'Manson', 'Bentley', 'Kowalski', 'Schmidt', 'Tucker', 'Fancy'], address = ['Turkey', 'Japan', 'Michigan', 'Russia', 'Greece', 'France', 'USA',
	        'Germany', 'Sweden', 'Denmark', 'Poland', 'Belgium'];
	    var items = [];
	    var product;
	    var newProduct;
	    for (var i = 0; i < rows; i++) {
	        product = products[Math.floor(Math.random() * products.length)];
	        newProduct = {
	            description: product.description,
	            options: []
	        };
	        product.options.forEach(function (p) {
	            newProduct.options.push({ description: p.description });
	        });
	        items.push({
	            id: i + 1,
	            name: {
	                first: firstNames[Math.floor(Math.random() * firstNames.length)],
	                last: lastNames[Math.floor(Math.random() * lastNames.length)]
	            },
	            date: Math.max(Math.round(Math.random() * 12), 1) + " / " + Math.max(Math.round(Math.random() * 28), 1) + " /\n      " + (Math.round(Math.random() * 80) + 1940),
	            address: Math.floor(Math.random() * 100000) + " " + address[Math.floor(Math.random() * address.length)],
	            price: Math.floor(Math.random() * 100000) / 100,
	            isActive: Math.floor(Math.random() * products.length) / 2 === 0 ? 'Yes' : 'No',
	            product: newProduct
	        });
	    }
	    return items;
	}
	var HandsontableDemo = (function () {
	    function HandsontableDemo() {
	        this.data = genData(100);
	        this.colHeaders = ['ID', 'First Name', 'Last Name', 'Address',
	            'Favorite food', 'Price', 'Is active'];
	        this.columns = [
	            {
	                data: 'id'
	            },
	            {
	                data: 'name.first',
	                renderer: 'text',
	                readOnly: true
	            },
	            {
	                data: 'name.last',
	                readOnly: true
	            },
	            {
	                data: 'address'
	            },
	            {
	                data: 'product.description',
	                source: 'product.options',
	                optionField: 'description',
	                type: 'autocomplete',
	                strict: false,
	                visibleRows: 4
	            },
	            {
	                data: 'price',
	                type: 'numeric',
	                format: '$ 0,0.00'
	            },
	            {
	                data: 'isActive',
	                type: 'checkbox',
	                checkedTemplate: 'Yes',
	                uncheckedTemplate: 'No'
	            }
	        ];
	        this.colWidths = [null, null, null, null, 100, 80, null];
	        this.options = {
	            stretchH: 'all',
	            columnSorting: true,
	            contextMenu: [
	                'row_above', 'row_below', 'remove_row'
	            ]
	        };
	    }
	    HandsontableDemo.prototype.afterChange = function (e) {
	        console.log(e);
	    };
	    HandsontableDemo.prototype.afterOnCellMouseDown = function (e) {
	        console.log(e);
	    };
	    HandsontableDemo = __decorate([
	        angular2_1.Component({
	            selector: 'handsontable-demo'
	        }),
	        angular2_1.View({
	            template: template,
	            directives: [index_1.handsontable, angular2_1.NgClass, angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HandsontableDemo);
	    return HandsontableDemo;
	})();
	exports.HandsontableDemo = HandsontableDemo;
	//# sourceMappingURL=handsontable-demo.js.map

/***/ }

});
//# sourceMappingURL=angular2-handsontable-demo.js.map