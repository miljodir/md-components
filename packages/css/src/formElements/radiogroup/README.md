# Structure

To use the `RadioGroup` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div class="md-radiogroup [md-radiogroup--disabled]">
  <div class="md-radiogroup__label">
    <div>{label}</div>

    <div class="md-radiogroup_help-button"><MdHelpButton /> <- see MdHelpButton styles</div>
  </div>

  <div class="md-radiogroup_help-text [md-radiogroup_help-text--open]">
    <MdHelpText>{ helpText }</MdHelpText> <- see MdHelpText styles
  </div>

  <div class="md-radiogroup__options [md-radiogroup__options--vertical]">
    <MdRadioButton /> <- see MdRadioButton styles
  </div>

  <!-- if error -->
  <div class="md-radiogroup__error">{error}</div>
</div>
```
