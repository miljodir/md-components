import React from 'react';

import MdShortcut from '../packages/react/src/shortcut/MdShortcut';

export default {
  title: 'Components/Shortcut',
  component: MdShortcut,
};

export const Primary = () => (
  <MdShortcut
    to="#"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
    }}
  >
    Dette er en snarvei
  </MdShortcut>
);
