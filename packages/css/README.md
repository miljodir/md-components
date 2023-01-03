## @miljodirektoratet/md-css

To start using the stylesheets:

```
npm install @miljodirektoratet/md-css
```

Then import the CSS, for example from JavaScript:

```
import { MdButton } from '@miljodirektoratet/md-react';
import '@miljodirektoratet/md-css';

const MyComponent = () => {
    return (
        <MdButton>Example</MdButton>
    )
}
```

**For HTML structure for each component, see the README.md for each css-file, located in /src. This must be followed if stylesheets are used as standalone, without React components.**

_For React components, see [@miljodirektoratet/md-react](https://www.npmjs.com/package/@miljodirektoratet/md-react)_
