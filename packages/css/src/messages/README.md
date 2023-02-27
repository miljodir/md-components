# Structure

To use the `InfoBox` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div className="md-info-box [md-info-box--fullWidth]">
    {Icon width="20" height="20"}
    {label}
</div>
```

To use the `AlertMessage` css as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div className="md-alert-message [md-alert-message--confirm, md-alert-message--warning, md-alert-message--error, md-alert-message--fullWidth]">
    <div className="md-alert-message__content">
        {Icon width="20" height="20"}
        {label}
    </div>

    <button
        className="md-alert-message__button"
        onClick={handleClick}
    >
        {Icon width="16" height="16"}
    </button>
</div>
```
