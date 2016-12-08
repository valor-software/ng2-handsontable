"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var handsontable_1 = require('./handsontable');
var HotTableModule = (function () {
    function HotTableModule() {
    }
    HotTableModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [handsontable_1.HotTable],
                    exports: [handsontable_1.HotTable]
                },] },
    ];
    HotTableModule.ctorParameters = [];
    return HotTableModule;
}());
exports.HotTableModule = HotTableModule;
//# sourceMappingURL=handsontable.module.js.map