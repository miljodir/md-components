# Structure

To use the `Select` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div class="md-select [md-select--open, md-select--disabled, md-select--medium, md-select--small]">
    <div class="md-select__label">
        <div>{label}</div>
        <div class="md-select__help-button">
            {button to trigger help text}
        </div>
    </div>

    <div class="md-select__help-text [md-select__help-text--open]">
        {helpText}
    </div>

    <MdClickOutsideWrapper> <- optional wrapper to close selectbox when clicking outside
        <button
            class="md-select__button [md-select__button--open]"
            tabIndex={0}
            onClick={function to toggle expand|collapse}
        >
            <div class="md-select__button-text">{displayValue}</div>
            <div class="md-select__button-icon">
                <!-- Use MdIconChevronForward or icon from Material Symbols here -->
                <MdIconChevronForwward />
            </div>
        </button>

        <div class="md-select__dropdown">
            <button
                tabIndex={open ? 0: -1}
                class="md-select__dropdown-item [md-select__dropdown-item--selected]"
                onClick={function to handle select|deselect option}
            >
            <div class="md-select__dropdown-item-text">{option.text}</div>

            {if seleceted option
                <div class="md-select__dropdown-item-clear" title="Klikk for å fjerne valg">
                    <!-- Use MdIconClose or icon from Material Symbols here -->
                    <MdIconClose />
                </div>
            }

            </button>
        </div>
    </MdClickOutsideWrapper>
    <div class="md-select__error">{errorText}</div>
</div>
```
