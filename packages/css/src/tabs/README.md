# Structure

To use the `Tabs` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure. The styling for this component applies to the tab-buttons, content and what to show is up to you.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div class="md-tabs-container [md-tabs__compact]">
  <ul>
    <li>
      <button class="md-tabs-button [md-tabs-button--selected, md-tabs-button--disabled]">Tab 1</button>
    </li>
    <li>
      <button class="md-tabs-button [md-tabs-button--selected, md-tabs-button--disabled]">Tab 2</button>
    </li>
  </ul>

  <!-- This is the tab-content, and will need some logic to toggle what content to show. Handle as you see fit. -->
  <div>
    <div>This is the first tab</div>
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro maiores reprehenderit quasi itaque eveniet soluta
      aliquam consectetur perspiciatis assumenda laborum quam expedita, vitae, odio dignissimos obcaecati ipsa incidunt!
      Pariatur, blanditiis.
    </div>
  </div>
</div>
```
