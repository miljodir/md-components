import React from 'react';

import MdPanIcon from '../../../packages/react/src/icons/MdPanIcon';
import MdPanIcon64 from '../../../packages/react/src/icons/MdPanIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Deprecated/Icons/Pan',
  component: MdPanIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Pan icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdPanIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdPanIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdPanIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdPanIcon64 className={args.className} />
    </div>
  );
};

export const PanIcon = Template.bind({});
PanIcon.args = {
  className: '',
  color: '#005e5d',
};

export const PanIcon64 = Template64.bind({});
PanIcon64.args = {
  className: '',
  color: '#005e5d',
};
