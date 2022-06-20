import React from 'react';

import MdLink from '../packages/react/src/link/MdLink';

export default {
  title: 'Components/Link',
  component: MdLink,
};

function clickHandler(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log('Link was clicked', event);
}

export const Primary = () => (
  <MdLink onClick={clickHandler} href="#">
    Dette er en lenke
  </MdLink>
);
