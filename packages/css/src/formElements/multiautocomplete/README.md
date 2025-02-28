# Structure

To use the `MultiAutocomplete` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div
  class="md-multiautocomplete [md-multiautocomplete--open, md-multiautocomplete--disabled, md-multiautocomplete--medium, md-multiautocomplete--small, md-multiautocomplete--error]"
>
  <div class="md-multiautocomplete__label">
    <div>{label}</div>
    <div class="md-multiautocomplete__help-button">{button to trigger help text}</div>
  </div>

  <div class="md-multiautocomplete__help-text [md-multiautocomplete__help-text--open]">{helpText}</div>

  <MdClickOutsideWrapper>
    <- optional wrapper to close multiautocomplete box when clicking outside
    <!-- Optional prefix-icon -->
    <div class="md-multiautocomplete__input__prefix [md-multiautocomplete__input__prefix--disabled]">{prefixIcon}</div>

    <input
      id=""
      class="md-multiautocomplete__input [md-multiautocomplete__input--open, md-multiautocomplete__input--error, md-multiautocomplete__input--has-prefix]"
      value="{value}"
      ...
    />

    {number of selected items > 1 && !open &&
    <div class="md-multiautocomplete__button-hasmultiple">+{selected.length - 1}</div>
    }
    <div class="md-multiautocomplete__input-icon">
      <!-- use MdIconChevronForward or icon from Material Symbols here -->
      <MdIconChevronForward />
    </div>

    <div class="md-multiautocomplete__dropdown [md-multiautocomplete__dropdown--open]">
      <div class="md-multiautocomplete__dropdown-item [md-multiautocomplete__dropdown-item--selected]">
        {IMPORTANT! see MdCheckbox styles for description for the individual checkboxes}
        <MdCheckbox ... />
        ...
      </div>
    </div>
  </MdClickOutsideWrapper>

  <div class="md-multiautocomplete__error">{errorText}</div>

  <div class="md-multiautocomplete__chips">
    To show input chips for selected options, see doc for MdInputChip. These can be listed here.
  </div>
</div>
```
