# Structure

To use the `RadioGroup` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div class="md-radiobutton [md-radiobutton--disabled]">
  <input
    id="{radioGroupId}"
    type="radio"
    value="{value}"
    checked="{true|false}"
    disabled="{disabled}"
    {...otherProps}
  />
  <label class="md-radiobutton__label" for="{radioGroupId}">
    <span class="md-radiobutton__check-area">
      <span class="md-radiobutton__selected-dot" />
    </span>
    {label}
  </label>
</div>
```
