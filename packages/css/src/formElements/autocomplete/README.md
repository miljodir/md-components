# Structure

To use the `Autocomplete` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div class="md-autocomplete [md-autocomplete--open, md-autocomplete--disabled, md-autocomplete--medium, md-autocomplete--small, md-autocomplete--error]">
    <div class="md-autocomplete__label">
        <div>{label}</div>
        <div class="md-autocomplete__help-button">
            {button to trigger help text}
        </div>
    </div>

    <div class="md-autocomplete__help-text [md-autocomplete__help-text--open]">
        {helpText}
    </div>

    <MdClickOutsideWrapper> <- optional wrapper to close autocomplete box when clicking outside
        <!-- Optional prefix-icon -->
        <div class="md-autocomplete__input__prefix [md-autocomplete__input__prefix--disabled]">
            {prefixIcon}
        </div>

        <input
            id=""
            class="md-autocomplete__input [md-autocomplete__input--open, md-autocomplete__input--error, md-autocomplete__input--has-prefix]"
            value={value}
            ...
        />

        <div class="md-autocomplete__input-icon">
            <!-- use MdIconChevronForward or icon from Material Symbols here -->
            <MdIconChevronForward />
        </div>

        <div class="md-autocomplete__dropdown">
            <button
                tabIndex={open ? 0: -1}
                class="md-autocomplete__dropdown-item [md-autocomplete__dropdown-item--selected]"
                onClick={function to handle select|deselect option}
            >
            <div class="md-autocomplete__dropdown-item-text">{option.text}</div>

            {if seleceted option
                <div class="md-autocomplete__dropdown-item-clear" title="Klikk for å fjerne valg">
                    <!-- use MdIconClose or icon from Material Symbols here -->
                    <MdIconClose />
                </div>
            }

            </button>
        </div>
    </MdClickOutsideWrapper>
    <div class="md-autocomplete__error">{errorText}</div>
</div>
```
