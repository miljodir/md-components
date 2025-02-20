import React from 'react';

import MdEditIcon from '../../../packages/react/src/icons/MdEditIcon';
import MdEditIcon64 from '../../../packages/react/src/icons/MdEditIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Deprecated/Icons/Edit',
  component: MdEditIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Edit icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdEditIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdEditIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdEditIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdEditIcon64 className={args.className} />
    </div>
  );
};

export const EditIcon = Template.bind({});
EditIcon.args = {
  className: '',
  color: '#005e5d',
};

export const EditIcon64 = Template64.bind({});
EditIcon64.args = {
  className: '',
  color: '#005e5d',
};
