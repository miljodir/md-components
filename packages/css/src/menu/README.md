# Menu

A dropdown menu component for accessing commands and actions. Built on [Ariakit Menu](https://ariakit.org/components/menu).

## HTML Structure

```html
<!-- Trigger (rendered as-is, Ariakit adds aria-haspopup / aria-expanded) -->
<button class="md-menu__trigger">Open menu</button>

<!-- Menu popup -->
<div class="md-menu" role="menu">

  <!-- Group (optional) -->
  <div class="md-menu__group" role="group">

    <!-- Group heading (optional) -->
    <div class="md-menu__group-heading">Heading</div>

    <!-- Menu item -->
    <div class="md-menu__item" role="menuitem">
      <!-- Icon (optional) -->
      <span class="md-menu__item-icon" aria-hidden="true">
        <!-- SVG icon -->
      </span>
      <span class="md-menu__item-label">Item label</span>
    </div>

  </div>

  <!-- Separator (optional, shown between groups when showDividers=true) -->
  <hr class="md-menu__separator" />

</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `md-menu--small` | Small size variant |
| `md-menu--large` | Large size variant |
| `md-menu__item[data-active-item]` | Applied by Ariakit to the currently focused item |
| `md-menu__item[aria-disabled="true"]` | Disabled item state |
