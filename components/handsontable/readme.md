### Usage
```typescript
import {handsontable} from 'ng2-handsontable';
```

### Annotations
```typescript
// class HotTable
@Directive({
  selector: 'hot-table',
  properties: [
    'data',
    'colHeaders',
    'columns',
    'colWidths',
    'options'
  ],
  events: [...], // see events below
  lifecycle: [LifecycleEvent.onInit, LifecycleEvent.onDestroy]
})
```

### HotTable properties

  - `data` (`Array<any>`) - data source for this `HotTable`
  - `col-headers` (`?Array<string>`) - array of column headers, default column headers will be shown (or not be shown, it depends on other settings) if this parameter is undefined
  - `columns` - (`?Array<any>`) - descriptors of columns that contains information regarding type, format, source, ... of particular column
  - `col-widths` - (`?Array<number>`) - array of column sizes, default column size will be applied if this parameter is undefined
  - `options` - (`?any`) - other HotTables' properties that implemented in the original solution: [http://docs.handsontable.com/](http://docs.handsontable.com/)

### HotTable events

All names of the events are same as native (in original solution).

See 'Events' in [http://docs.handsontable.com/Hooks.html](http://docs.handsontable.com/Hooks.html).

Parameter of these events is same for all of these events - the arguments from original event.

### HotTable options

All Handsontable [http://docs.handsontable.com/Options.html](options) described in documentation should be supported.
