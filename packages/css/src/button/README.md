# Structure

To use the `Button` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names and elements in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<button
  class="md-button [md-button--small, md-button--large, md-button--secondary, md-button--tertiary, md-button--danger, md-button--danger-secondary,  md-button--danger-tertiary, md-button--column]"
>
  <div class="md-button__topIcon">{topIcon}</div>
  <div class="md-button__content">
    <div class="md-button__leftIcon">{leftIcon}</div>
    BUTTON TEXT
    <div class="md-button__rightIcon">{rightIcon}</div>
  </div>
</button>
```
