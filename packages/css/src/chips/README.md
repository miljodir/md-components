# Structure

To use the `Chips` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<button class="md-chip [md-chip--active, md-chip--disabled, md-chip--solid]">
  <div class="md-chip__left-icon">{leftIcon}</div>

  <div class="md-chip__label">{label}</div>

  <div class="md-chip__right-icon">{rightIcon}</div>
</button>
```
