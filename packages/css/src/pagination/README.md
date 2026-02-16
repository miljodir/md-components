# Structure

To use the `Pagination` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names and elements in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<nav class="md-pagination [md-pagination--compact]" aria-label="Paginering">
  <button class="md-pagination__nav" aria-label="Forrige">
    <span class="md-pagination__nav-icon">{chevronBackwardIcon}</span>
    <span class="md-pagination__nav-label">Forrige</span>
  </button>

  <div class="md-pagination__pages">
    <div class="md-pagination__pages-desktop">
      <button class="md-pagination__page">1</button>
      <span class="md-pagination__page md-pagination__page--active" aria-current="page">2</span>
      <button class="md-pagination__page">3</button>
      <span class="md-pagination__ellipsis">...</span>
      <button class="md-pagination__page">10</button>
    </div>

    <div class="md-pagination__pages-compact [md-pagination__pages-compact--force]">
      <button class="md-pagination__page">1</button>
      <span class="md-pagination__page md-pagination__page--active" aria-current="page">2</span>
      <button class="md-pagination__page">3</button>
    </div>
  </div>

  <button class="md-pagination__nav" aria-label="Neste">
    <span class="md-pagination__nav-label">Neste</span>
    <span class="md-pagination__nav-icon">{chevronForwardIcon}</span>
  </button>
</nav>
```
