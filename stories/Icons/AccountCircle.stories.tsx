import React from 'react';

import { MdIconAccountCircle } from '../../packages/react/src/icons-material/MdIconAccountCircle';

import type { Args } from '@storybook/react-webpack5';

export default {
  title: 'Icons/Account circle',
  component: MdIconAccountCircle,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Account circle icon. Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdIconAccountCircle } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    large: {
      description: 'Use large version of icon. Best suited if displaying large icons.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: 'boolean',
    },
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
  const style = { width: '32px', height: '32px', color: args.color };

  if (args.large) {
    style.height = '64px';
    style.width = '64px';
  }
  return (
    <div style={style}>
      <MdIconAccountCircle {...args} />
    </div>
  );
};

/* const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdIconAccountCircle large {...args} />
    </div>
  );
}; */

export const AccountCircle = Template.bind({});
AccountCircle.args = {
  large: false,
  className: '',
  color: '#005e5d',
};

/* export const AccountCircleLarge = Template64.bind({});
AccountCircleLarge.args = {
  className: '',
  color: '#005e5d',
}; */
