# Structure

To use the `Modal` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<!-- Modal overlay/backdrop -->
<div class="md-modal__overlay"></div>

<!-- Modal dialog -->
<div class="md-modal [md-modal--error]">
  <div class="md-modal__header-wrapper">
    <div class="md-modal__header">
      <div class="md-modal__header-content">
        <!-- Optional heading icon -->
        {headingIcon}
        <!-- Modal heading text -->
        {heading}
      </div>
      <!-- Close button -->
      <button type="button" class="md-modal__close-button" aria-label="Lukk">
        <!-- Use MdIconClose or icon from Material Symbols here -->
        <MdIconClose />
      </button>
    </div>
    <!-- Optional divider below header -->
    <div class="md-modal__header-divider"></div>
  </div>

  <!-- Modal content -->
  <div class="md-modal__content">
    <!-- Modal children/content goes here -->
  </div>

  <!-- Optional footer -->
  <div class="md-modal__footer-wrapper">
    <!-- Optional divider above footer -->
    <div class="md-modal__footer-divider"></div>
    <div class="md-modal__footer">
      <!-- Footer content goes here -->
    </div>
  </div>
</div>
```

## Z-index

This component uses z-index to place itself as the top layer in the viewport. The default z-indexes are:

- `md-modal`: 900
- `md-modal__overlay`: 800
