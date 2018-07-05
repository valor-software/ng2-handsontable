<a name="3.0.0"></a>
# [3.0.0](https://github.com/valor-software/ng2-handsontable/compare/2.0.1...3.0.0) (2018-06-18)


### Bug Fixes

* Add missing runOutsideAngular wrappers ([a5d1380](https://github.com/valor-software/ng2-handsontable/commit/a5d1380)).


### Features

* Add hotInstanceCreated output which emits the Handsontable instance on creation ([0bd3691](https://github.com/valor-software/ng2-handsontable/commit/0bd3691)).
* Add markAsChanged() to mark partial input changes; fixes #482 and #459 ([57da1ec](https://github.com/valor-software/ng2-handsontable/commit/57da1ec)).
* Update Handsontable dependency to '>= 0.37 < 1.0' ([047285e](https://github.com/valor-software/ng2-handsontable/commit/047285e)).
* Update demo to Angular 6 ([7ec2e20](https://github.com/valor-software/ng2-handsontable/commit/7ec2e20)).
* Update global Handsontable css ([6369f97](https://github.com/valor-software/ng2-handsontable/commit/6369f97)).

### BREAKING CHANGES

* Support for Angular versions 2 and 4 was dropped. **ng2-handsontable@3.x will only work with Angular5+.**
* Component selector was renamed from `<hotTable>` to `<hot-table>`. The former was correct for directives, but the latter is required for components by some linters. ([
79a2dfa](https://github.com/valor-software/ng2-handsontable/commit/79a2dfa))
* Remove autocomplete implementation, which had been broken for a while ([
a60f8e66](https://github.com/valor-software/ng2-handsontable/commit/a60f8e66)).



<a name="2.0.1"></a>
## [2.0.1](https://github.com/valor-software/ng2-handsontable/compare/2.0.0...v2.0.1) (2017-12-15)


### Bug Fixes

* **demo:** Update numeric formats ([8a7b278](https://github.com/valor-software/ng2-handsontable/commit/8a7b278))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/valor-software/ng2-handsontable/compare/v1.0.4...v2.0.0) (2017-12-12)


### Bug Fixes

* **component:** Updates inline handsontable css ([baf3194](https://github.com/valor-software/ng2-handsontable/commit/baf3194)), closes [#483](https://github.com/valor-software/ng2-handsontable/issues/483)
* **module:** Use handsontable branch with fixes typings temporarily ([f58d18d](https://github.com/valor-software/ng2-handsontable/commit/f58d18d))
* **module:** Uses handsontable commit with fixed typing temporarily ([cf5714f](https://github.com/valor-software/ng2-handsontable/commit/cf5714f))


### Code Refactoring

* **component:** Adds Component suffix & removes output defs ([611318d](https://github.com/valor-software/ng2-handsontable/commit/611318d))


### Features

* **module:** Updates to Handsontable[@0](https://github.com/0).34.4 ([84a3938](https://github.com/valor-software/ng2-handsontable/commit/84a3938)), closes [#479](https://github.com/valor-software/ng2-handsontable/issues/479)
* **module:** Updates to Handsontable[@0](https://github.com/0).35.0 ([cf97518](https://github.com/valor-software/ng2-handsontable/commit/cf97518))


### BREAKING CHANGES

* **component:** `HotTable` was renamed to `HotTableComponentComponent`
* **module:** Handsontable@0.34 requires 'handsontable' to be imported before zone.js, e.g. in polyfills.ts. See https://github.com/handsontable/handsontable/issues/4452



<a name="1.0.4"></a>
## [1.0.4](https://github.com/valor-software/ng2-handsontable/compare/v1.0.2...v1.0.4) (2017-06-07)


### Features

* **component:** Adds getter for Handsontable instance ([a40ccf8](https://github.com/valor-software/ng2-handsontable/commit/a40ccf8))



<a name="1.0.3"></a>
## [1.0.3](https://github.com/valor-software/ng2-handsontable/compare/v1.0.2...v1.0.3) (2017-06-02)



<a name="1.0.2"></a>
## [1.0.2](https://github.com/valor-software/ng2-handsontable/compare/1.0.1...v1.0.2) (2017-06-01)



<a name="1.0.1"></a>
# [1.0.1](https://github.com/valor-software/ng2-handsontable/compare/0.48.0...1.0.1) (2017-05-26)
- Update to Angular 4

### Breaking changes
- Directive's selector was renamed from `<hot-table>` to `<hotTable>`
- Input property `[col-headers]` was renamed to `[colHeaders]`
- Input property `[col-widths]` was renamed to `[colWidths]`

<a name="0.48.0"></a>
# [0.48.0](https://github.com/valor-software/ng2-handsontable/compare/0.47.2...0.48.0) (2017-03-13)
- Several fixes & improvements
- Update to latest build structure

<a name="0.47.2"></a>
# [0.47.2](https://github.com/valor-software/ng2-handsontable/compare/0.47.0...0.47.2) (2017-03-09)
- Several fixes & improvements

<a name="0.47.0"></a>
# [0.47.0](https://github.com/valor-software/ng2-handsontable/tree/0.47.0) (2017-02-23)
- Initial release for Angular 2.4.x
