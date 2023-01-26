# Structure

To use the `CheckboxGroup` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div class="md-checkboxgroup [md-checkboxgroup--disabled]">
    <div class="md-checkboxgroup__label">
        <div>{label}</div>

        <!-- Optional button for handling help text -->
        <MdHelpButton />
    </div>

    <!-- Optional container for displaying helpt text -->
    <div class="md-checkboxgroup__help-text [md-checkboxgroup__help-text--open]">
        <MdHelpText>{helpText}</MdHelpText>
    </div>

    <div class="md-checkboxgroup__options [md-checkboxgroup__options--vertical]">
        <!-- Here we use the designsystem react components for checkbox, see structure for these separately -->
        <MdCheckbox />
        <MdCheckbox />
        <MdCheckbox />
        ...
    ))}
    </div>

    <div class="md-radiogroup__error">{error}</div>
</div>
```
