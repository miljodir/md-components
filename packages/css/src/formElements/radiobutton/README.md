# Structure

To use the `RadioGroup` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
    <div className="md-radiobutton [md-checkbox--disabled]">
      <span className="md-radiobutton__check-area">
        <span className="md-radiobutton__selected-dot" />
      </span>
      <input
        id={String(radioGroupId) || undefined}
        type="radio"
        value={value}
        checked="{true|false}"
        disabled="{disabled}"
        {...otherProps}
      />
      <label>{label}</label>
    </div>
```
