import React from 'react';

import MdCancelIcon from '../../../packages/react/src/icons/MdCancelIcon';
import MdCancelIcon64 from '../../../packages/react/src/icons/MdCancelIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Deprecated/Icons/Cancel',
  component: MdCancelIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Cancel icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdCancelIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdCancelIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdCancelIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdCancelIcon64 className={args.className} />
    </div>
  );
};

export const CloseIcon = Template.bind({});
CloseIcon.args = {
  className: '',
  color: '#005e5d',
};

export const CloseIcon64 = Template64.bind({});
CloseIcon64.args = {
  className: '',
  color: '#005e5d',
};
