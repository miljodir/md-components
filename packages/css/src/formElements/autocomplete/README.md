# Structure

To use the `Autocomplete` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div className="md-autocomplete [md-autocomplete--open, md-autocomplete--disabled, md-autocomplete--medium, md-autocomplete--small, md-autocomplete--error]">
    <div className="md-autocomplete__label">
        <div>{label}</div>
        <div className="md-autocomplete__help-button">
            {button to trigger help text}
        </div>
    </div>

    <div className="md-autocomplete__help-text [md-autocomplete__help-text--open]">
        {helpText}
    </div>

    <MdClickOutsideWrapper> <- optional wrapper to close autocomplete box when clicking outside
        <!-- Optional prefix-icon -->
        <div className="md-autocomplete__input__prefix [md-autocomplete__input__prefix--disabled]">
            {prefixIcon}
        </div>

        <input
            id=""
            className="md-autocomplete__input [md-autocomplete__input--open, md-autocomplete__input--error, md-autocomplete__input--has-prefix]"
            value={value}
            ...
        />

        <div className="md-autocomplete__input-icon">
            <MdChevronIcon />
        </div>

        <div className="md-autocomplete__dropdown">
            <button
                tabIndex={open ? 0: -1}
                className="md-autocomplete__dropdown-item [md-autocomplete__dropdown-item--selected]"
                onClick={function to handle select|deselect option}
            >
            <div className="md-autocomplete__dropdown-item-text">{option.text}</div>

            {if seleceted option
                <div className="md-autocomplete__dropdown-item-clear" title="Klikk for å fjerne valg">
                    <MdXIcon />
                </div>
            }

            </button>
        </div>
    </MdClickOutsideWrapper>
    <div className="md-autocomplete__error">{errorText}</div>
</div>
```
