# Structure

To use the `Tabs` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure. The styling for this component applies to the tab-buttons, content and what to show is up to you.

Class names and elements in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div class="md-tabs-container [md-tabs__compact]">
  <div class="md-tabs-list" role="tablist" aria-label="Example tabs">
    <!-- Plain text tab -->
    <button class="md-tabs-button [md-tabs-button--disabled]" role="tab" aria-selected="true">
      <span class="md-tabs-button__label">Tab 1</span>
    </button>

    <!-- Icon and text tab. Use md-tabs-button__right-icon instead of the badge when needed. -->
    <button class="md-tabs-button" role="tab" aria-selected="false">
      <span class="md-tabs-button__left-icon" aria-hidden="true">{leftIcon}</span>
      <span class="md-tabs-button__label">Tab 2</span>
    </button>

    <!-- Badge tab. A badge requires a visible text label. -->
    <button class="md-tabs-button" role="tab" aria-selected="false">
      <span class="md-tabs-button__label">Tab 3</span>
      <span class="md-tabs-button__badge">
        <span class="md-badge md-badge--small md-badge--info">3</span>
      </span>
    </button>

    <!-- Icon-only tab. Keep aria-label for an accessible name. -->
    <button class="md-tabs-button" role="tab" aria-label="Notifications" aria-selected="false">
      <span class="md-tabs-button__left-icon" aria-hidden="true">{leftIcon}</span>
    </button>

    <!-- Chip tab. The prefix icon is shown before the optional tab icon when selected. -->
    <button class="md-chip [md-chip--disabled]" role="tab" aria-selected="true">
      <span class="md-chip__left-icon" aria-hidden="true">{chipsPrefixIcon}</span>
      <span class="md-tabs-button__left-icon" aria-hidden="true">{leftIcon}</span>
      <span class="md-tabs-button__label">Selected chip</span>
    </button>
  </div>

  <!-- This is the tab-content, and will need some logic to toggle what content to show. Handle as you see fit. -->
  <div class="md-tabs-panels">
    <div class="md-tab-panel" role="tabpanel" aria-label="Tab 1 content">
      <div>This is the first tab</div>
      <div>Content for the selected tab.</div>
    </div>

    <div class="md-tab-panel" role="tabpanel" aria-label="Tab 2 content" hidden>
      <div>This is the second tab</div>
      <div>Content for another tab.</div>
    </div>
  </div>
</div>
```

Use either `md-tabs-button__badge` or `md-tabs-button__right-icon` on a tab, not both. Add `md-tabs-button--disabled` to a regular disabled tab and `md-chip--disabled` to a disabled chip. The tab list stretches tabs to the height of the tallest tab so icons, labels and badges remain aligned.
