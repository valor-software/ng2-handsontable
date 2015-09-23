# ng2-handsontable

Native Angular2 directive for [Handsontable](https://github.com/handsontable/handsontable) component.

[Handsontable](https://github.com/handsontable/handsontable) is a data grid component with an Excel-like appearance. Built in JavaScript, it integrates with any data source and comes with [features](http://docs.handsontable.com/0.17.0/tutorial-features.html) like data validation, sorting, grouping, data binding or column ordering. Actively supported by the Handsoncode team and the GitHub community.

- - -

## Quick start

1. A recommended way to install ***ng2-handsontable*** is through [npm](https://www.npmjs.com/search?q=ng2-handsontable) package manager using the following command:

  `npm i ng2-handsontable --save`

  Alternatively, you can [download it in a ZIP file](https://github.com/valor-software/ng2-handsontable/archive/master.zip).
2. A recommended way to install Handsontable component is through [Bower](http://bower.io/search/?q=handsontable) package manager using the following command:

  `bower install handsontable --save`

  Alternatively, you can [download it in a ZIP file](https://github.com/handsontable/handsontable/archive/master.zip).
3. After Handsontable component is downloaded, embed the code into your project.

  ```html
  <script src="bower_components/handsontable/dist/handsontable.full.js"></script>
  <link rel="stylesheet" media="screen" href="bower_components/handsontable/dist/handsontable.full.css">
  ```

4. More information regarding using of ***ng2-handsontable*** is located in
  [demo](http://valor-software.github.io/ng2-handsontable/) and [demo sources](https://github.com/valor-software/ng2-handsontable/tree/master/demo).

## API

### Properties

  - `data` (`Array<any>`) - data source for this `HotTable`
  - `col-headers` (`?Array<string>`) - array of column headers, default column headers will be shown (or not be shown, it depends on other settings) if this parameter is undefined
  - `columns` - (`?Array<any>`) - descriptors of columns that contains information regarding type, format, source, ... of particular column
  - `col-widths` - (`?Array<number>`) - array of column sizes, default column size will be applied if this parameter is undefined
  - `options` - (`?any`) - other HotTables' properties that implemented in the original solution: [http://docs.handsontable.com/](http://docs.handsontable.com/)

### Events

All names of the events are same as native (in original solution).

See 'Events' in [http://docs.handsontable.com/Hooks.html](http://docs.handsontable.com/Hooks.html).

Parameter of these events is same for all of these events - the arguments from original event.

### Options

All Handsontable [http://docs.handsontable.com/Options.html](options) described in documentation should be supported.

## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/valor-software/ng2-handsontable/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/valor-software/ng2-handsontable/blob/master/LICENSE) file for the full text)
