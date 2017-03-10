# ng2-handsontable

Native Angular2 directive for the [Handsontable](https://github.com/handsontable/handsontable) component.

[Handsontable](https://github.com/handsontable/handsontable) is a data grid component with an Excel-like appearance. Built in JavaScript, it integrates with any data source and comes with [features](http://docs.handsontable.com/tutorial-features.html) like data validation, sorting, grouping, data binding or column ordering. Actively supported by the Handsoncode team and the GitHub community.

- - -


## Quick start

1. Add ***ng2-handsontable*** to your package.json or install with `npm i ng2-handsontable --save`.

2. Import the `HotTableModule` into your module. Here's a TypeScript example:

```typescript
import {HotTableModule} from 'ng2-handsontable';
...

@NgModule({
  ...
  imports: [
    HotTableModule
  ],
  ...
})
export class MyModule {
}
```

3. Use the `hot-table` directive in your template. The following example displays the supported attributes:

```html
<hot-table [data]="data"
           [columns]="columns"
           [col-headers]="colHeaders"
           [col-widths]="colHeaders"
           [options]="options"
           (HANDSONTABLE_EVENT)="eventHandler">
</hot-table>
```

- `data: any[]` - data source for this `HotTable`
- `pageData: Observable<any[]>` - observable data source for this `HotTable` for paged data
- `columns?: any[]` - descriptors of columns that contains information regarding type, format, source, ... of particular column
- `col-headers?: string[]` - array of column headers, default column headers will be shown (or not be shown, it depends on other settings) if this parameter is undefined
- `col-widths?: number[]` - array of column sizes, default column size will be applied if this parameter is undefined
- `options?: any` - any of the [Handsontable options](http://docs.handsontable.com/pro/Options.html)
- 'HANDSONTABLE_EVENT' - all [Handsontable events](http://docs.handsontable.com/pro/Hooks.html#event:afterAddChild) are implemented as EventEmitters, e.g. `(beforeInit)="onBeforeInit"`.

The free version of Handsontable is used by default, but the pro-version could be used as a drop-in replacement.

4. See the [demo](http://valor-software.github.io/ng2-handsontable/) and the [demo sources](https://github.com/valor-software/ng2-handsontable/tree/master/demo/src) for further details.


## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/valor-software/ng2-handsontable/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for your understanding!


## License

The MIT License (see the [LICENSE](https://github.com/valor-software/ng2-handsontable/blob/master/LICENSE) file for the full text)
