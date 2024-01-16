# Structure

To use the `Input` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div className="md-input__outer-wrapper">
  <div className="md-input__label">
    <label> {label} </label>

    <!-- Optional button for handling help text -->
    <div className="md-input__help-button">
      <MdHelpButton />
    </div>
    }
  </div>

  <!-- Optional container for displaying helpt text -->
  <div className="md-input__help-text [md-input__help-text--open]">
    <MdHelpText>{ helpText }</MdHelpText>
  </div>

  <div className="md-input__wrapper [md-input__wrapper--small]">
    <!-- Optional prefix-icon -->
    <div className="md-input__prefix [md-input__prefix--disabled]">{prefixIcon}</div>

    <input
      id=""
      className="md-input [md-input--small, md-input--disabled, md-input--readonly, md-input--error, md-input--has-suffix, md-input--has-prefix]"
      value="{value}"
      ...
    />

    <!-- Optional container for suffix -->
    <div className="md-input__suffix">
      <div className="md-input__suffix-content">{suffix}</div>

      <div className="md-input__error-icon">
        <MdWarningIcon />
        <!-- Warning icon -->
      </div>
    </div>
  </div>

  <!-- Optional container for error text -->
  <div className="md-input__error">{errorText}</div>
</div>
```
