# Structure

To use the `Table` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React components, please use the following HTML structure.

Class names and elements in brackets [] are optional-/togglable-/decorator- or state dependant classes. Add `md-table--striped` for zebra striped body rows and `md-table--bordered` for a border around the table. Add `md-table--secondary` for the secondary theme with less vibrant colors (`theme="secondary"` on `MdTable`).

To add a bottom border to a row, add `md-table__row--bordered` (`bordered` on `MdTableRow`). To add borders to a cell, add `md-table__cell--bordered` or `md-table__header-cell--bordered` (`bordered` on `MdTableCell` and `MdTableHeaderCell`).

Cells are left aligned by default. Add `md-table__cell--align-center` / `md-table__cell--align-right` or `md-table__header-cell--align-center` / `md-table__header-cell--align-right` to change alignment.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

To make a wide table scroll horizontally (`horizontalScroll` on `MdTableContainer`), wrap it in a focusable, labelled region:

```html
<div
  class="md-table-container md-table-container--horizontal-scroll"
  role="region"
  tabindex="0"
  aria-labelledby="caption-id"
>
  <table class="md-table">
    <caption id="caption-id" class="md-table__caption">
      Table caption
    </caption>
    ...
  </table>
</div>
```

```html
<table class="md-table [md-table--secondary, md-table--striped, md-table--bordered]">
  <!-- optional -->
  <caption class="md-table__caption">
    Table caption
  </caption>
  <thead class="md-table__head">
    <tr class="md-table__row [md-table__row--bordered]">
      <th
        class="md-table__header-cell [md-table__header-cell--bordered, md-table__header-cell--align-center, md-table__header-cell--align-right]"
        scope="col"
      >
        Header 1
      </th>
      <th
        class="md-table__header-cell [md-table__header-cell--bordered, md-table__header-cell--align-center, md-table__header-cell--align-right]"
        scope="col"
      >
        Header 2
      </th>
    </tr>
  </thead>
  <tbody class="md-table__body">
    <tr class="md-table__row [md-table__row--bordered]">
      <th
        class="md-table__header-cell [md-table__header-cell--bordered, md-table__header-cell--align-center, md-table__header-cell--align-right]"
        scope="row"
      >
        Row header
      </th>
      <td class="md-table__cell [md-table__cell--bordered, md-table__cell--align-center, md-table__cell--align-right]">
        Cell
      </td>
    </tr>
  </tbody>
</table>
```

A sortable column header wraps its content in a button with an icon. Set `aria-sort` to `ascending` or `descending` on the currently sorted header only.

```html
<th class="md-table__header-cell" scope="col" [aria-sort="ascending|descending"]>
  <button type="button" class="md-table__sort-button">
    Header
    <svg class="md-table__sort-icon [md-table__sort-icon--unsorted]" aria-hidden="true">...</svg>
  </button>
</th>
```
