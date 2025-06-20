# Structure

The `MdAccordion` component is a wrapper for `MdAccordionItem` components. This will create an accordion that allows one accordion item to be open a time. The props set on the `MdAccordion` is inherited by the `MdAccordionItem` children.

To override props on children, just set the prop you want to override on the child. The following example sets the theme for all items, but is overridden on the last child:

```html
<MdAccordion theme="secondary">
  <MdAccordionItem />
  <MdAccordionItem theme="add" />
</MdAccordion>
```

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div class="md-accordion">
  <MdAccordionItem />
  <MdAccordionItem />
  <MdAccordionItem />
</div>
```
