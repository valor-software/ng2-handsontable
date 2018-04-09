# ng2-handsontable

Native Angular2+ wrapper for [Handsontable](https://github.com/handsontable/handsontable).

[Handsontable](https://github.com/handsontable/handsontable) is a data grid component with an Excel-like appearance. Built in JavaScript, it integrates with any data source and comes with [features](http://docs.handsontable.com/tutorial-features.html) like data validation, sorting, grouping, data binding or column ordering. Actively supported by the Handsoncode team and the GitHub community.

- - -


## Quick start

1. Add ***ng2-handsontable*** to your package.json or install with `npm i ng2-handsontable --save`.

2. If you are using SystemJS, add the ng2-handsontable path to your SystemJS.config.js: `'ng2-handsontable': 'node_modules/ng2-handsontable/bundles/ng2-handsontable.umd.js'`. Webpack (used by Angular-CLI) picks up the path automatically.

3. Import the `HotTableModule` into your module. Here's a TypeScript example:

```typescript
import { HotTableModule } from 'ng2-handsontable';
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

4. Use the `hot-table` component in your template. The following example displays the supported attributes:

```html
<hot-table [data]="data"
           [columns]="columns"
           [colHeaders]="colHeaders"
           [colWidths]="colHeaders"
           [options]="options"
           (HANDSONTABLE_EVENT)="eventHandler">
</hot-table>
```

- `data: any[]` - data source
- `pageData: Observable<any[]>` - observable data source for paged data
- `columns?: any[]` - descriptors of columns that contains information regarding type, format, source, ... of particular column
- `colHeaders?: string[]` - array of column headers, default column headers will be shown (or not be shown, it depends on other settings) if this parameter is undefined
- `colWidths?: number[]` - array of column sizes, default column size will be applied if this parameter is undefined
- `options?: any` - any of the [Handsontable options](http://docs.handsontable.com/pro/Options.html)
- 'HANDSONTABLE_EVENT' - all [Handsontable events](http://docs.handsontable.com/pro/Hooks.html#event:afterAddChild) are implemented as EventEmitters, e.g. `(beforeInit)="onBeforeInit"`.

The free version of Handsontable is used by default, but the pro-version could be used as a drop-in replacement.

5. The following methods are available as a public API on HotTableComponent (which you can access from your parent component with `@ViewChild(HotTableComponent) hotTableComponent`):
- `getHandsontableInstance(): Handsontable` - returns the underlying [Handsontable Core instance](https://docs.handsontable.com/Core.html); all registered Handsontable plugins are accessible via [instance.getPlugin()](https://docs.handsontable.com/pro/1.11.0/Core.html#getPlugin)
- `markAsChanged(properties: ('data' | 'options' | 'colHeaders' | 'colWidths' | 'columns')[])`- Call this function to mark any of the given input properties as changed in case they were changed partially, rather than replaced by a new object. The component picks up the latter through Angular's ngOnChanges(), but not the former. For example, when a new row is added to an existing 'data' input array, call `markAsChanged(['data'])`.

6. See the [demo](http://valor-software.github.io/ng2-handsontable/) and the [demo sources](https://github.com/valor-software/ng2-handsontable/tree/master/demo/src) for further details.

## Troubleshooting

- ZoneJS < 0.8.20 was throwing an error because of [Handsontable's wrapping of the native Promise](https://github.com/handsontable/handsontable/issues/4452). If you are not able to update zone.js, you will need to import handsontable _before_ zone.js with `import 'handsontable'`. For an AngularCLI-project, the zone.js import happens in the `polyfill.ts` file.

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/valor-software/ng2-handsontable/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for your understanding!


## License

The MIT License (see the [LICENSE](https://github.com/valor-software/ng2-handsontable/blob/master/LICENSE) file for the full text)
