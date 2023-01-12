# Select

To use the `Select` css as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div className="md-select [md-select--open, md-select--disabled, md-select--medium, md-select--small]">
    <div className="md-select__label">
        <div>{label}</div>
        <div className="md-select__help-button">
            {button to trigger help text}
        </div>
    </div>

    <div className="md-select__help-text [md-select__help-text--open]">
        {helpText}
    </div>

    <MdClickOutsideWrapper> <- optional wrapper to close selectbox when clicking outside
        <button
            className="md-select__button [md-select__button--open]"
            tabIndex={0}
            onClick={function to toggle expand|collapse}
        >
            <div className="md-select__button-text">{displayValue}</div>
            <div className="md-select__button-icon">
                <MdChevronIcon />
            </div>
        </button>

        <div className="md-select__dropdown">
            <button
                tabIndex={open ? 0: -1}
                className="md-select__dropdown-item [md-select__dropdown-item--selected]"
                onClick={function to handle select|deselect option}
            >
            <div className="md-select__dropdown-item-text">{option.text}</div>

            {if seleceted option
                <div className="md-select__dropdown-item-clear" title="Klikk for å fjerne valg">
                    <MdXIcon />
                </div>
            }

            </button>
        </div>
    </MdClickOutsideWrapper>
</div>
```
