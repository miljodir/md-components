import React from 'react';

import MdButton from '../packages/react/src/MdButton';
import ChevronIcon from '../packages/react/src/icons/Chevron';

export default {
  title: 'Components/Button',
  component: MdButton,
};

function clickHandler(el) {
  console.log('Button was clicked', el);
}

export const Primary = () => (
  <MdButton onClick={clickHandler}>Testknapp</MdButton>
);
export const Secondary = () => (
  <MdButton onClick={clickHandler} theme="secondary">
    Testknapp
  </MdButton>
);
export const Danger = () => (
  <MdButton onClick={clickHandler} theme="danger">
    Testknapp
  </MdButton>
);
export const Disabled = () => (
  <MdButton onClick={clickHandler} disabled>
    Testknapp
  </MdButton>
);

export const ButtonWithIcon = () => (
  <MdButton rightIcon={<ChevronIcon color="#ffffff" />}>Testknapp</MdButton>
);
