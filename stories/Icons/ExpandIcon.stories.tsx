import React from 'react';
import MdExpandIcon from '../../packages/react/src/icons/MdExpandIcon';
import MdExpandIcon64 from '../../packages/react/src/icons/MdExpandIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Deprecated/Icons/Expand',
  component: MdExpandIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Expand icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdExpandIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdExpandIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdExpandIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdExpandIcon64 className={args.className} />
    </div>
  );
};

export const ExpandIcon = Template.bind({});
ExpandIcon.args = {
  className: '',
  color: '#005e5d',
};

export const ExpandIcon64 = Template64.bind({});
ExpandIcon64.args = {
  className: '',
  color: '#005e5d',
};
