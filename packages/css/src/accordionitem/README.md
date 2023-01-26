# Structure

To use the `AccordionItem` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div
    class="md-accordion-item [md-accordion-item--expanded, md-accordion-item--secondary, md-accordion-item--disabled]"
>
    <button
        class="md-accordion-item__header [md-accordion-item__header--expanded]"
        disabled={true/false}
    >
        <div class="md-accordion-item__header-left">
            <div class="md-accordion-item__header-icon">_no content here, this is container for expand/collapse icon, controlled by the css_</div>
            <div class="md-accordion-item__header-label">LABEL/TITLE</div>
        </div>
        <div class="md-accordion-item__header-right">OPTIONAL RIGHT SIDE CONTENT IN HEADER</div>
    </button>

    <div class="md-accordion-item__content [md-accordion-item__content--expanded]">
        <div class="md-accordion-item__content-inner">
            MAIN CONTENT OF ACCORDION GOES HERE
        </div>

        <button class="md-accordion-item__close-button"></button>
    </div>
</div>
```
