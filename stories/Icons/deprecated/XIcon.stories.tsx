import React from 'react';

import MdXIcon from '../../../packages/react/src/icons/MdXIcon';
import MdXIcon64 from '../../../packages/react/src/icons/MdXIcon64';
import type { Args } from '@storybook/react-webpack5';

export default {
  title: 'Deprecated/Icons/X',
  component: MdXIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "X/close icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdXIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdXIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdXIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdXIcon64 className={args.className} />
    </div>
  );
};

export const XIcon = Template.bind({});
XIcon.args = {
  className: '',
  color: '#005e5d',
};

export const XIcon64 = Template64.bind({});
XIcon64.args = {
  className: '',
  color: '#005e5d',
};
