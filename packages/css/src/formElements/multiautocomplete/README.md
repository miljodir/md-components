# Structure

To use the `MultiAutocomplete` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div className="md-multiautocomplete [md-multiautocomplete--open, md-multiautocomplete--disabled, md-multiautocomplete--medium, md-multiautocomplete--small, md-multiautocomplete--error]">
    <div className="md-multiautocomplete__label">
        <div>{label}</div>
        <div className="md-multiautocomplete__help-button">
            {button to trigger help text}
        </div>
    </div>

    <div className="md-multiautocomplete__help-text [md-multiautocomplete__help-text--open]">
        {helpText}
    </div>

    <MdClickOutsideWrapper> <- optional wrapper to close multiautocomplete box when clicking outside
        <!-- Optional prefix-icon -->
        <div className="md-multiautocomplete__input__prefix [md-multiautocomplete__input__prefix--disabled]">
            {prefixIcon}
        </div>

        <input
            id=""
            className="md-multiautocomplete__input [md-multiautocomplete__input--open, md-multiautocomplete__input--error, md-multiautocomplete__input--has-prefix]"
            value={value}
            ...
        />

        {number of selected items > 1 && !open &&
        <div className="md-multiautocomplete__button-hasmultiple">+{selected.length - 1}</div>
        }
        <div className="md-multiautocomplete__input-icon">
            <MdChevronIcon />
        </div>

        <div className="md-multiautocomplete__dropdown [md-multiautocomplete__dropdown--open]">
            <div className="md-multiautocomplete__dropdown-item [md-multiautocomplete__dropdown-item--selected]">
                {IMPORTANT! see MdCheckbox styles for description for the individual checkboxes}
                <MdCheckbox
                label="{option.text}"
                tabIndex="{open"
                ?
                0
                :
                -1}
                checked="{true|false}"
                value="{option.value}"
                id="id-for-checkbox"
                disabled="{true|false}"
                data-value="{option.value}"
                data-text="{option.text}"
                onChange="{function"
                for
                change
                handling}
                />
                ... ...
            </div>
        </div>
    </MdClickOutsideWrapper>
    
    <div className="md-multiautocomplete__error">{errorText}</div>

    <div className="md-multiautocomplete__chips">
        To show input chips for selected options, see doc for MdInputChip. These can be listed here.
    </div>
</div>
```
