# Structure

To use the `RadioGroup` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div className="md-radiogroup [md-radiogroup--disabled]">
  <div className="md-radiogroup__label">
    <div>{label}</div>

    <div className="md-multiselect__help-button"><MdHelpButton /> <- see MdHelpButton styles</div>
  </div>

  <div className="md-multiselect__help-text [md-multiselect__help-text--open]">
    <MdHelpText>{ helpText }</MdHelpText> <- see MdHelpText styles
  </div>

  <div className="md-radiogroup__options [md-radiogroup__options--vertical]">
    <label className="md-radiogroup-option">
      <span className="md-radiogroup-option__check-area" id="">
        <!-- if selected option -->
        <span className="md-radiogroup-option__selected-dot"></span>
      </span>
      <input id="" type="radio" value="some value" checked={true/false} onChange={handleChange} disabled={true/false}
      onFocus={handleFocus} onBlur={handleBlur} />
      <span className="md-radiogroup-option__text"> {option.text} </span>
    </label>
    ... ...
  </div>

  <!-- if error -->
  <div className="md-radiogroup__error">{error}</div>
</div>
```
