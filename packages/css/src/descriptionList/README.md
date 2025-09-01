# Structure

To use the `DescriptionList` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<dl class="md-description-list [md-description-list--narrow]">
  <div class="md-description-list-item">
    <dt class="md-description-list-item-label">Label 1</dt>
    <dd class="md-description-list-item-description">Value 1</dd>
  </div>
  <div class="md-description-list-item">
    <dt class="md-description-list-item-label">Label 2</dt>
    <dd class="md-description-list-item-description">Value 2</dd>
  </div>
</dl>
```
