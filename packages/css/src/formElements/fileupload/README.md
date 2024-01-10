# Structure

To use the `FileUpload` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div class="md-fileupload">
  <div class="md-fileupload__droparea" onDragEnter="{}" onDragLeave="{}" onDragEnd="{}" onDragOver="{}" onDrop="{}">
    <div class="md-fileupload__droparea-icon">
      <MdUploadIcon />
      <!-- Icon for upload -->
    </div>

    <div class="md-fileupload__droparea-content">
      Dropp en fil eller <button onClick="{}">velg fra denne maskinen</button>
    </div>

    <input ref="{inputRef}" type="file" multiple class="md-fileupload__input" onChange="{}" />

    <!-- List files, for this we use the filelist-component, see separate structure for this -->
    <div class="md-fileupload__files-wrapper">
      <MdFileList />
    </div>
    }
  </div>

  <div class="md-fileupload__actions">
    <!-- Buttons for upload/done and cancel -->
    <MdButton> {cancelButtonText} </MdButton>
    <MdButton> {uploadButtonText} </MdButton>
  </div>
</div>
```
