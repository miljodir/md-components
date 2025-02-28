# Structure

To use the `Tile` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

## Tile horizontal

```html
<a
  class="md-tile [md-tile--secondary, md-tile--small, md-tile--medium, md-tile--fullWidth]"
  href="{href}"
  onClick="{handleClick}"
>
  <div class="md-tile__content">
    <div class="md-tile__content-icon">{icon}</div>
    <div class="md-tile__content-text">
      <div class="md-tile__content-heading">{heading}</div>
      <div class="md-tile__content-description">{description}</div>
    </div>
  </div>

  <div class="md-tile__arrow">
    <!-- Can be replaced with chevron down icon from Material Symbols -->
    <MdIconChevronForward height="{25}" />
  </div>
</a>
```

## Tile vertical

```html
<a
  class="md-tile-vertical [md-tile-vertical--secondary, md-tile-vertical--small, md-tile-vertical--large]"
  href="{href}"
  onClick="{handleClick}"
>
  <div class="md-tile-vertical__content">
    <div class="md-tile-vertical__content-icon">{icon}</div>
    <div class="md-tile-vertical__content-text">
      <div class="md-tile-vertical__content-heading">{heading}</div>
      <div class="md-tile-vertical__content-description">{description}</div>
    </div>
  </div>
</a>
```
