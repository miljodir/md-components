# Structure

To use the `Help` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

## HelpButton

```html
<button
    class="md-helpbutton [md-helpbutton--expanded, md-helpbutton--noarrow]"
>
    <svg-icon class="md-helpbutton__icon" /> <!-- svg icon of some sort -->
</button>
```

## HelpText

```html
<div class="md-helptext">
    CONTENT
</div>
```
