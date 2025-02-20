import React from 'react';

import MdBurgerMenuIcon from '../../../packages/react/src/icons/MdBurgerMenuIcon';
import MdBurgerMenuIcon64 from '../../../packages/react/src/icons/MdBurgerMenuIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Deprecated/Icons/BurgerMenu',
  component: MdBurgerMenuIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Burger menu icon. Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdBurgerMenuIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdBurgerMenuIcon64 } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    className: {
      description: 'Classes for svg icon',
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text',
    },
    color: {
      description: 'Set color of parent (for example purposes)',
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'color',
    },
  },
};

const Template = (args: Args) => {
  return (
    <div style={{ width: '32px', height: '32px', color: args.color }}>
      <MdBurgerMenuIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdBurgerMenuIcon64 className={args.className} />
    </div>
  );
};

export const BurgerMenuIcon = Template.bind({});
BurgerMenuIcon.args = {
  className: '',
  color: '#005e5d',
};

export const BurgerMenuIcon64 = Template64.bind({});
BurgerMenuIcon64.args = {
  className: '',
  color: '#005e5d',
};
