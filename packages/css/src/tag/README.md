# Structure

To use the `Tag` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div class="md-tag [md-tag-theme--primary, md-tag-theme--secondary, md-tag-theme--success, md-tag-theme--warning, md-tag-theme--info, md-tag-theme--error,  md-tag-type--base, md-tag-type--light, md-tag-type--outline]">
  <div className='md-tag-icon'>
      {icon}
  </div>
  <div>
    {label}
  </div>
</div>
```
