# @miljodirektoratet/md-css

To start using the stylesheets:

```bash
npm install @miljodirektoratet/md-css
```

Then import the CSS, for example from JavaScript:

```jsx
import { MdButton } from '@miljodirektoratet/md-react';
import '@miljodirektoratet/md-css';

const MyComponent = () => {
  return <MdButton>Example</MdButton>;
};
```

**For more documentation, please refer to the [Storybook](https://miljodir.github.io/md-components/)**

**For HTML structure for each component, see the README.md for each css-file, located in /src, or the `Docs`-section in the [Storybook](https://miljodir.github.io/md-components/) for each component. This must be followed if stylesheets are used as standalone, without React components.**

## Fonts

This package uses the fonts "Sofia Pro" and "Open Sans", and assumes that you use, or have access to, these fonts in your project. The font "Sofia Pro"can be downloaded from [here](https://github.com/miljodir/md-components/tree/main/assets/webfonts). "Open Sans" is accessible through [Google Fonts](https://fonts.google.com/specimen/Open+Sans).

## DISCLAIMER:

> All fonts included in this repository are provided solely for use as part of the Norwegian Environment agencys projects and its associated systems.
>
> It is strictly prohibited to redistribute, or reuse these fonts outside the scope of the Norwegian Environment agencys projects without obtaining proper authorization or licenses from their respective owners.
>
> Our organization does not hold the rights to these fonts and cannot be held liable for any unauthorized use, distribution, or legal consequences arising from such actions.
>
> Please refer to the applicable font licenses for detailed terms of use.

_For React components, see [@miljodirektoratet/md-react](https://www.npmjs.com/package/@miljodirektoratet/md-react)_
