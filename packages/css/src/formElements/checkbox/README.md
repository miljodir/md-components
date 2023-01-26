# Structure

To use the `Checkbox` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div className="md-checkbox [md-checkbox--disabled]">
    <input
        className="md-checkbox__input"
        checked={true|false}
        type="checkbox"
        value={value}
        disabled={disabled}
        {...otherProps}
    />
    <label className="md-checkbox__label">
        <span className="md-checkbox__labelText">{label}</span>
    </label>
</div>
```
