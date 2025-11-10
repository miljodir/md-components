# Structure

To use the `Input` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div class="md-inputsearch__outer-wrapper">
  <div class="md-inputsearch__label">
    <label> {label} </label>

    <!-- Optional button for handling help text -->
    <div class="md-inputsearch__help-button">
      <MdHelpButton />
    </div>
    }
  </div>

  <!-- Optional container for displaying helpt text -->
  <div class="md-inputsearch__help-text [md-inputsearch__help-text--open]">
    <!-- See MdHelpText html/css for this -->
    <MdHelpText>{ helpText }</MdHelpText>
  </div>

  <div class="md-inputsearch__wrapper [md-inputsearch__wrapper--small]">
    <!-- Optional prefix-icon -->
    <div class="md-inputsearch__prefix [md-inputsearch__prefix--disabled]">{prefixIcon}</div>

    <input
      id=""
      class="md-inputsearch [md-input--small, md-input--has-prefix]"
      value="{value}"
      ...
    />
    <MdIconButton
      aria-label="Søk"
      onClick={() => {}}
      theme="filled"
    >
      <MdIconSearch />
    </MdIconButton>
  </div>

  <!-- Optional container for error text -->
  <div class="md-inputsearch__error">{errorText}</div>

  <!-- Optional container for support text -->
  <div class="md-inputsearch__support-text">{supportText}</div>
</div>
```
