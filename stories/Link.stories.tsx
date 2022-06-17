import React from 'react';

import MdLink from '../packages/react/src/link/MdLink';

export default {
  title: 'Components/Link',
  component: MdLink,
};

function clickHandler(el) {
  console.log('Link was clicked', el);
}

export const Primary = () => (
  <MdLink onClick={clickHandler}>Dette er en lenke</MdLink>
);
