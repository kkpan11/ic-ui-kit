# ic-pagination-bar



<!-- Auto Generated Below -->


## Properties

| Property                  | Attribute                     | Description                                                                                                                                                                    | Type                                   | Default     |
| ------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- | ----------- |
| `alignment`               | `alignment`                   | Sets the alignment of the items in the pagination bar.                                                                                                                         | `"left" \| "right" \| "space-between"` | `"right"`   |
| `appearance`              | `appearance`                  | Sets the styling for the items in the pagination bar.                                                                                                                          | `"dark" \| "default" \| "light"`       | `"default"` |
| `itemLabel`               | `item-label`                  | The label which will be used in place of 'items' if paginationType is data. Should be capitalised.                                                                             | `string`                               | `"Item"`    |
| `itemsPerPageOptions`     | --                            | The options which will be displayed for 'items per page' select input. Set a maximum of 4 options including a required 'All' option with value equal to total number of items. | `{ label: string; value: string; }[]`  | `undefined` |
| `pageLabel`               | `page-label`                  | The label which will be used in place of 'Page' if paginationType is page. Should be capitalised.                                                                              | `string`                               | `"Page"`    |
| `paginationControl`       | `pagination-control`          | Whether the displayed pagination is simple or complex.                                                                                                                         | `"complex" \| "simple"`                | `"simple"`  |
| `paginationType`          | `pagination-type`             | Whether total number of items and current item range or total number of pages and current page is displayed.                                                                   | `"data" \| "page"`                     | `"page"`    |
| `showGoToPageControl`     | `show-go-to-page-control`     | If `true`, the 'go to page' control should be displayed.                                                                                                                       | `boolean`                              | `false`     |
| `showItemsPerPage`        | `show-items-per-page`         | If `true`, the number of total items and current item range or number of total pages and current page should be displayed.                                                     | `boolean`                              | `true`      |
| `showItemsPerPageControl` | `show-items-per-page-control` | If `true`, the select input to control 'items per page' should be displayed.                                                                                                   | `boolean`                              | `false`     |
| `totalItems` _(required)_ | `total-items`                 | Total number of items to be displayed across all pages.                                                                                                                        | `number`                               | `undefined` |


## Events

| Event                  | Description                                                | Type                              |
| ---------------------- | ---------------------------------------------------------- | --------------------------------- |
| `icItemsPerPageChange` | Emitted when the items per page option is changed.         | `CustomEvent<{ value: number; }>` |
| `icPageChange`         | Emitted when a page is navigated to via the 'go to' input. | `CustomEvent<{ value: number; }>` |


## Dependencies

### Used by

 - [ic-data-table](../ic-data-table)

### Depends on

- [ic-pagination](../ic-pagination)

### Graph
```mermaid
graph TD;
  ic-pagination-bar --> ic-pagination
  ic-pagination --> ic-pagination-item
  ic-data-table --> ic-pagination-bar
  style ic-pagination-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


