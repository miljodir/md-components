# Structure

To use the `Tile` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

## Tile horizontal

```html
<a className="md-tile [md-tile--secondary, md-tile--small, md-tile--medium]" href="{href}" onClick="{handleClick}">
  <div className="md-tile__content">
    <div className="md-tile__content-icon">{icon}</div>
    <div className="md-tile__content-text">
      <div className="md-tile__content-heading">{heading}</div>
      <div className="md-tile__content-description">{description}</div>
    </div>
  </div>

  <div className="md-tile__arrow">
    <MdChevronIcon height="{25}" />
  </div>
</a>
```

## Tile vertical

```html
<a
  className="md-tile-vertical [md-tile-vertical--secondary, md-tile-vertical--small, md-tile-vertical--large]"
  href="{href}"
  onClick="{handleClick}"
>
  <div className="md-tile-vertical__content">
    <div className="md-tile-vertical__content-icon">{icon}</div>
    <div className="md-tile-vertical__content-text">
      <div className="md-tile-vertical__content-heading">{heading}</div>
      <div className="md-tile-vertical__content-description">{description}</div>
    </div>
  </div>
</a>
```
