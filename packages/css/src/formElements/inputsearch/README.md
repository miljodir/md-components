# Structure

To use the `Input` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div class="md-input__outer-wrapper">
  <div class="md-input__label">
    <label> {label} </label>

    <!-- Optional button for handling help text -->
    <div class="md-input__help-button">
      <MdHelpButton />
    </div>
    }
  </div>

  <!-- Optional container for displaying helpt text -->
  <div class="md-input__help-text [md-input__help-text--open]">
    <!-- See MdHelpText html/css for this -->
    <MdHelpText>{ helpText }</MdHelpText>
  </div>

  <div class="md-input__wrapper [md-input__wrapper--small]">
    <!-- Optional prefix-icon -->
    <div class="md-input__prefix [md-input__prefix--disabled]">{prefixIcon}</div>

    <input
      id=""
      class="md-input [md-input--small, md-input--disabled, md-input--readonly, md-input--error, md-input--has-suffix, md-input--has-prefix]"
      value="{value}"
      ...
    />

    <!-- Optional container for suffix -->
    <div class="md-input__suffix">
      <div class="md-input__suffix-content">{suffix}</div>

      <div class="md-input__error-icon">
        <!-- Use MdIconWarning or icon from Material Symbols here -->
        <MdIconWarning />
        <!-- Warning icon -->
      </div>
    </div>
  </div>

  <!-- Optional container for error text -->
  <div class="md-input__error">{errorText}</div>

  <!-- Optional container for support text -->
  <div class="md-input__support-text">{supportText}</div>
</div>
```
