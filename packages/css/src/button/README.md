# Structure

To use the `Button` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names and elements in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<button className="md-button [md-button--small, md-button--secondary, md-button--tertiary, md-button--danger, md-button--column]">
  [
  <div className="md-button__topIcon">{topIcon}</div>
  ] [
  <div className="md-button__content">
    ]
    <div className="md-button__leftIcon">{leftIcon}</div>
    BUTTON TEXT
    <div className="md-button__rightIcon">{rightIcon}</div>
    [
  </div>
  ]
</button>
```
