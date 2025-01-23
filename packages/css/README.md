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

This package uses the fonts "Sofia Pro" and "Open Sans", and assumes that you use, or have access to, these fonts in your project. To get the font "Sofia Pro" to use in your project, please contact Miljødirektoratet. "Open Sans" is accessible through [Google Fonts](https://fonts.google.com/specimen/Open+Sans).

_For React components, see [@miljodirektoratet/md-react](https://www.npmjs.com/package/@miljodirektoratet/md-react)_
