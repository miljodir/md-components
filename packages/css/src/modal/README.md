# Structure

To use the `Modal` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.

Class names in brackets [] are optional-/togglable-/decorator- or state dependant classes.

See [Storybook](https://miljodir.github.io/md-components) for examples and more info.

```html
<div>
    <div class="md-modal__overlay"></div>
    <div class="md-modal [md-modal--open, md-modal--error]">
    <div
        class="md-modal__content"
    >
        <!--
            This is a wrapper component for handling close when click outside.
            Use the react-component, or your own wrapper, just remeber the `md-modal__inner-wrapper` class
        -->
        <MdClickOutsideWrapper
            class="md-modal__inner-wrapper"
        >
        <div class="md-modal__header">
            <div>{heading}</div>
            <button
                class="md-modal__close-button"
            >
                <MdXIcon class="md-modal__close-button-icon" /> <!-- Icon for close-button, use the react icon from Miljødir, or you own -->
            </button>
        </div>
        <div class="md-modal__content-inner">
            MODAL CONTENT GOES HERE
        </div>
        </MdClickOutsideWrapper>
    </div>
    </div>
</div>
```

## Z-index

This component uses z-index to place itself as the top layer in the viewport. The default z-indexes are:

- `md-modal`: 900
- `md-model__overlay`: 800

If these z-indexes collide with other z-indexes in you stylesheet, please override the `z-index` for the two classes mentioned above in your own css.
