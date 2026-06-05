# Structure

To use the `AlertMessage` css as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div
  class="md-alert-message
    [md-alert-message--success]
    [md-alert-message--warning]
    [md-alert-message--error]
    [md-alert-message--info-box]
    [md-alert-message--fullWidth]"
>
  <!-- Theme icon, e.g. from Material Symbols. Omit to hide icon. -->
  <svg class="md-alert-message__icon" width="24" height="24" aria-label="Info">...</svg>

  <div class="md-alert-message__content [md-alert-message__content--center] [md-alert-message__content--end]">

    <!-- Optional label -->
    <div class="md-alert-message__label">Label text</div>

    <!-- Optional description -->
    <div class="md-alert-message__description [md-alert-message__description--collapsed]" id="description-id">
      Description text
    </div>

    <!-- Expand/collapse button — only when expandable -->
    <button
      type="button"
      class="md-alert-message__expand-button"
      aria-expanded="false"
      aria-controls="description-id"
    >
      <span class="md-alert-message__expand-icon" aria-hidden="true">
        <!-- Up arrow icon (shown when expanded) -->
        <svg class="md-alert-message__expand-icon__open">...</svg>
        <!-- Down arrow icon (shown when collapsed) -->
        <svg class="md-alert-message__expand-icon__close">...</svg>
      </span>
      Vis mer
    </button>

  </div>

  <!-- Close button — only when closable. Use md-icon-button html/css. -->
  <div class="md-alert-message__button-wrapper">
    <button class="md-alert-message__button md-icon-button md-icon-button--plain" aria-label="Lukk">
      <!-- Close icon -->
    </button>
  </div>
</div>
```
