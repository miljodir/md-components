# Structure

To use the `Chips` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<button
    className="md-chip [md-chip--active, md-chip--disabled, md-chip--solid]"
>
    <div className="md-chip__left-icon">
        {leftIcon}
    </div>

    <div className="md-chip__label">{label}</div>

    <div className="md-chip__right-icon">
        {rightIcon}
    </div>
</button>
```
