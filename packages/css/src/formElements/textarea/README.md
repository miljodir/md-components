# Textarea

To use the `Textarea` css as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div className="md-textarea__outer-wrapper">
    <div className="md-textarea__label">
        <label htmlFor="id-for-text-area">
            {label}
        </label>

        <div className="md-textarea__help-button">
            {button to trigger help text}
        </div>
    }
    </div>

    <div className="md-textarea__help-text [md-textarea__help-text--open]">
        {helpText}
    </div>

    <div className="md-textarea__wrapper">
        <textarea
            id="id-for-text-area"
            className="md-textarea [md-textarea--disabled, md-textarea--readonly, md-textarea--error]"
            value={value}
            rows={number}
            placeholder="Placeholder text"
            disabled={true requires class 'md-textarea--disabled'}
            readOnly={true requires class 'md-textarea--readonly'}
            ...
        />
    </div>

    <div className="md-textarea__error">{errorText}</div>
</div>
```
