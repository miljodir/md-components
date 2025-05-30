# Structure

To use the `FileList` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div class="md-filelist">
  <div class="md-filelist__file">
    <div class="md-filelist__file-label">
      <div class="md-filelist__file-icon">{fileIcon}</div>
      <div>
        <div>{file.name}</div>
        <div class="md-filelist__file-size">{file.size}</div>
      </div>
    </div>

    <div class="md-filelist__file-actions">
      <!-- Use html/css from MdIconButton for this button -->
      <MdIconButton class="md-icon-button md-icon-button--plain">{downloadIcon}</MdIconButton>
      <!-- Use html/css from MdIconButton for this button -->
      <MdIconButton class="md-icon-button md-icon-button--plain">{deleteIcon}</MdIconButton>
    </div>
  </div>

  <!-- Repeat for each file in list -->
  <div class="md-filelist__file">...</div>
</div>
```
