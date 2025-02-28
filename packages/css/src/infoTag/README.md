# Structure

To use the `InfoTag` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div class="md-info-tag [md-info-tag--secondary, md-info-tag--warning, md-info-tag--danger]">
  <div class="md-info-tag__label">{label}</div>
  <div class="md-info-tag__icon">{icon}</div>
</div>
```
