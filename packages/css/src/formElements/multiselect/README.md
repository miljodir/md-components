# Structure

To use the `Multiselect` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div
  class="md-select [md-multiselect--open, md-multiselect--disabled, md-multiselect--error, md-multiselect--medium, md-multiselect--small]"
>
  <div class="md-multiselect__label">
    <div>{label}</div>

    <div class="md-multiselect__help-button"><MdHelpButton /> <- see MdHelpButton styles</div>
  </div>

  <div class="md-multiselect__help-text [md-multiselect__help-text--open]">
    <MdHelpText>{ helpText }</MdHelpText> <- see MdHelpText styles
  </div>

  <MdClickOutsideWrapper>
    <- optional wrapper to close selectbox when clicking outside
    <button
      class="md-multiselect__button [md-multiselect__button--open]"
      tabindex="{0}"
      onClick="{function"
      to
      toggle
      expand|collapse}
    >
      <div class="md-multiselect__button-text">{displayValue}</div>
      {number of selected items > 1 && !open &&
      <div class="md-multiselect__button-hasmultiple">+{selected.length - 1}</div>
      }
      <div class="md-multiselect__button-icon">
        <!-- use MdIconChevronForward or icon from Material Symbols here -->
        <MdIconChevronForward />
      </div>
    </button>

    <div class="md-multiselect__dropdown [md-multiselect__dropdown--open]">
      <div class="md-multiselect__dropdown-item [md-multiselect__dropdown-item--selected]">
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

  <div class="md-multiselect__error">{errorText}</div>

  <div class="md-multiselect__chips">
    To show input chips for selected options, see doc for MdInputChip. These can be listed here.
  </div>
  }
</div>
```
