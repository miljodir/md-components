# Structure

To use the `Toggle` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div>
  <div class="md-toggle__wrapper">
    <input class="md-toggle__checkbox" type="checkbox" checked="{true|false}" onChange="{}" />
    <label class="md-toggle__label-wrapper [md-toggle__label-wrapper--disabled]">
      <div class="md-toggle__label-text">{label}</div>
      <div class="md-toggle__label [md-toggle__label--checked, md-toggle__label--disabled]">
        <span class="md-toggle__button" />
      </div>
    </label>
  </div>
  <div class="md-toggle__error">{errorText}</div>
</div>
```
