import React from 'react';
import MdPersonIcon from '../../packages/react/src/icons/MdPersonIcon';
import MdPersonIcon64 from '../../packages/react/src/icons/MdPersonIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Deprecated/Icons/Person',
  component: MdPersonIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Person icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdPersonIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdPersonIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdPersonIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdPersonIcon64 className={args.className} />
    </div>
  );
};

export const PersonIcon = Template.bind({});
PersonIcon.args = {
  className: '',
  color: '#005e5d',
};

export const PersonIcon64 = Template64.bind({});
PersonIcon64.args = {
  className: '',
  color: '#005e5d',
};
