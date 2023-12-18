# Structure

To use the `Tooltip` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div>
  <div className="md-tooltip__child">{children}</div>
  <div className="md-tooltip__parent [md-tooltip__parent--show]">
    <div className="md-tooltip [md-tooltip--show]">{label}</div>
  </div>
</div>
```
