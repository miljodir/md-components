import React from 'react';
import MdPlusIcon from '../../packages/react/src/icons/MdPlusIcon';
import MdPlusIcon64 from '../../packages/react/src/icons/MdPlusIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Deprecated/Icons/Plus',
  component: MdPlusIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Plus/add/expand icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdPlusIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdPlusIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdPlusIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdPlusIcon64 className={args.className} />
    </div>
  );
};

export const PlusIcon = Template.bind({});
PlusIcon.args = {
  className: '',
  color: '#005e5d',
};

export const PlusIcon64 = Template64.bind({});
PlusIcon64.args = {
  className: '',
  color: '#005e5d',
};
