import React from 'react';

import MdTimeIcon from '../../packages/react/src/icons/MdTimeIcon';
import MdTimeIcon64 from '../../packages/react/src/icons/MdTimeIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Deprecated/Icons/Time',
  component: MdTimeIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Time/clock icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdTimeIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdTimeIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdTimeIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdTimeIcon64 className={args.className} />
    </div>
  );
};

export const TimeIcon = Template.bind({});
TimeIcon.args = {
  className: '',
  color: '#005e5d',
};

export const TimeIcon64 = Template64.bind({});
TimeIcon64.args = {
  className: '',
  color: '#005e5d',
};
