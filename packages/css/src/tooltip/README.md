# Structure

To use the `MdTooltip` CSS in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure. Note that this component is built on [Ariakit Tooltip](https://ariakit.org/components/tooltip), so implementing it outside React may be challenging due to the complex accessibility behavior it provides.

Class names in brackets [] are optional-/togglable-/decorator- or state-dependent classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<!-- Ariakit.TooltipProvider -->
<div>
  <!-- Ariakit.TooltipAnchor -->
  <div class="md-tooltip__anchor" aria-label="{tooltipContent}">{children}</div>

  <!-- Ariakit.Tooltip -->
  <div
    class="md-tooltip md-tooltip--[small|medium|large] [md-tooltip--top|bottom|right|left]"
    role="tooltip"
    aria-hidden="true"
  >
    {tooltipContent}
  </div>
</div>
```

## Accessibility Notes

The MdTooltip component uses Ariakit's Tooltip component, which handles numerous accessibility attributes, including:

- Proper ARIA roles and attributes (`role="tooltip"`, `aria-hidden`, etc.)
- Keyboard navigation
- Focus management
- Screen reader announcements

When implementing this outside of React, you'll need to handle these accessibility concerns manually. The library automatically manages attributes like `aria-describedby`, `aria-expanded`, and `aria-hidden`.
