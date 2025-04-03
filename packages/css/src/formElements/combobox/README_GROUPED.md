# Structure

To use the `MdComboBoxGrouped` CSS in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure. Note that this component is built on [Ariakit combobox](https://ariakit.org/components/combobox), so implementing it outside React may be challenging due to the complex accessibility behavior it provides.

Class names in brackets [] are optional-/togglable-/decorator- or state-dependent classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div class="md-combobox md-combobox--[large|medium|small] [md-combobox--has-error]">
  <!-- Label section with optional help button -->
  <div class="md-combobox__label-wrapper">
    <div class="md-combobox__label">
      <Ariakit.ComboboxLabel>{label}</Ariakit.ComboboxLabel>
      <div class="md-combobox__help-button">
        <!-- Help button component -->
      </div>
    </div>

    <div class="md-combobox__help-text [md-combobox__help-text--open]">
      <!-- Help text component -->
    </div>
  </div>

  <!-- Input wrapper with prefix icon and arrow -->
  <div class="md-combobox__input-wrapper [md-combobox__input-wrapper--disabled]">
    <div class="md-combobox__input--before">
      <!-- Prefix icon: search icon, loading spinner, or custom icon -->
    </div>

    <Ariakit.Combobox class="md-combobox__input [md-combobox__input--no-prefix-icon]" placeholder="{placeholder}" />

    <div class="md-combobox__input--after">
      <div>
        <!-- Counter for multi-select: +{count} -->
      </div>
      <!-- Reset button - displayed when allowReset is true and there's a value or search text -->
      <button class="md-combobox__reset" aria-label="Nullstill">
        <!-- Close/clear icon -->
      </button>
      <!-- Chevron icon -->
    </div>
  </div>

  <!-- Dropdown/popover -->
  <Ariakit.ComboboxPopover class="md-combobox__popover">
    <!-- Separator between groups -->
    <!-- if !hideSeparatorLine & !firstElement} -->
    <div class="md-combobox__group-separator">
      <hr />
    </div>

    <!-- Grouped options -->
    <div class="md-combobox__group [md-combobox__group--no-separator]">
      <div class="md-combobox__group-label">
        <!-- Optional group icon -->
        <div class="md-combobox__group-icon">{icon}</div>
        {groupLabel}
      </div>
      <Ariakit.ComboboxItem class="md-combobox__checkbox-item [md-combobox__checkbox-item--selected]">
        <!-- For single select: just text -->
        Option text

        <!-- For multi-select: checkbox -->
        <MdCheckbox label="Option text" />
      </Ariakit.ComboboxItem>
    </div>

    <!-- No results state -->
    <div class="md-combobox__checkbox-item md-combobox__checkbox-item--no-result">No results found</div>
  </Ariakit.ComboboxPopover>

  <!-- Error text -->
  <div class="md-combobox__error">{errorText}</div>
</div>
```

## Accessibility Notes

The MdComboBoxGrouped component uses Ariakit's ComboBox component, which handles numerous accessibility attributes, including:

- Proper ARIA roles and attributes
- Keyboard navigation
- Focus management
- Screen reader announcements

When implementing this outside of React, you'll need to handle these accessibility concerns manually. The library automatically manages attributes like `aria-activedescendant`, `aria-controls`, `aria-expanded`, etc. ```
