# Structure

To use the `Badge` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names and elements in brackets [] are optional-/togglable-/decorator- or state dependant classes. As a dot badge, remove content and add class `md-badge--dot`.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<span class="md-badge [md-badge--primary, md-badge--secondary, md-badge--error, md-badge--warning, md-badge--success, md-badge--info, md-badge--small, md-badge--large, md-badge--pill]">
    8
</span>
```
