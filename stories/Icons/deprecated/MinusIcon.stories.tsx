import React from 'react';

import MdMinusIcon from '../../../packages/react/src/icons/MdMinusIcon';
import MdMinusIcon64 from '../../../packages/react/src/icons/MdMinusIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Deprecated/Icons/Minus',
  component: MdMinusIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Minus icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdMinusIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdMinusIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdMinusIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdMinusIcon64 className={args.className} />
    </div>
  );
};

export const MinusIcon = Template.bind({});
MinusIcon.args = {
  className: '',
  color: '#005e5d',
};

export const MinusIcon64 = Template64.bind({});
MinusIcon64.args = {
  className: '',
  color: '#005e5d',
};
