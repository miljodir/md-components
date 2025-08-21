# Structure

To use the `MdSelect` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure. Note that this component is built on [Ariakit select](https://ariakit.org/components/select), so implementing it outside React may be challenging due to the complex accessibility behavior it provides.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div class="md-select md-select--[large|medium|small] [md-select--has-error]">
  <!-- Label section with optional help button -->
  <div class="md-select__label-wrapper">
    <div class="md-select__label">
      <Ariakit.SelectLabel>{label}</Ariakit.SelectLabel>
      <div class="md-select__help-button">
        <!-- Help button component -->
      </div>
    </div>

    <div class="md-select__help-text [md-select__help-text--open]">
      <!-- Help text component -->
    </div>
  </div>

  <!-- Button wrapper -->
  <div class="md-select__button-wrapper">
    <Ariakit.Select class="md-select__button">
      Selected value text
      <div class="md-select__button-right">
        <div>
          <!-- Counter for multi-select: +{count} -->
        </div>
        <!-- Reset button - displayed when allowReset is true and there's a value -->
        <button class="md-select__reset" aria-label="Nullstill">
          <!-- Close/clear icon -->
        </button>
        <!-- Dropdown arrow button -->
        <button class="md-select__button-icon">
          <!-- Chevron down icon -->
        </button>
      </div>
    </Ariakit.Select>
  </div>

  <!-- Dropdown/popover -->
  <Ariakit.SelectPopover class="md-select__popover">
    <!-- For regular options -->
    <Ariakit.SelectItem class="md-select__item">
      <!-- For single select: just text -->
      Option text

      <!-- For multi-select: checkbox -->
      <MdCheckbox label="Option text" />
    </Ariakit.SelectItem>
  </Ariakit.SelectPopover>

  <!-- Error text -->
  <div class="md-select__error">{errorText}</div>
</div>
```

## Accessibility Notes

The MdSelect component uses Ariakit's Select component which handles numerous accessibility attributes including:

- Proper ARIA roles and attributes
- Keyboard navigation
- Focus management
- Screen reader announcements

When implementing this outside of React, you'll need to handle these accessibility concerns manually. The library automatically manages attributes like `aria-controls`, `aria-expanded`, `aria-pressed`, etc.
