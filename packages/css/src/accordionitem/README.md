# Structure

To use the `AccordionItem` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<details class="md-accordion-item [md-accordion-item--secondary, md-accordion-item--add]" [open]>
  <summary class="md-accordion-item__header">
    <div class="md-accordion-item__header-left">
      <div class="md-accordion-item__header-icon">
        <!-- Hidden when open -->
        <MdIconAdd class="md-accordion-item__header-icon__open" />
        <!-- Hidden when closed -->
        <MdIconRemove class="md-accordion-item__header-icon__close" />
      </div>
      <div class="md-accordion-item__header-label">LABEL/TITLE</div>
    </div>
    <div class="md-accordion-item__header-right">OPTIONAL RIGHT SIDE CONTENT IN HEADER</div>
  </summary>

  <div id="md-accordion-item_content_${accordionId}" class="md-accordion-item__content">
    <div class="md-accordion-item__content-inner">MAIN CONTENT OF ACCORDION GOES HERE</div>

    [<button class="md-accordion-item__close-button"></button>]
  </div>
</details>
```
