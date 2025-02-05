import React from 'react';

import MdCalendarIcon from '../../packages/react/src/icons/MdCalendarIcon';
import MdCalendarIcon64 from '../../packages/react/src/icons/MdCalendarIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Deprecated/Icons/Calendar',
  component: MdCalendarIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Calendar icon. Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdCalendarIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdCalendarIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdCalendarIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdCalendarIcon64 className={args.className} />
    </div>
  );
};

export const CalendarIcon = Template.bind({});
CalendarIcon.args = {
  className: '',
  color: '#005e5d',
};

export const CalendarIcon64 = Template64.bind({});
CalendarIcon64.args = {
  className: '',
  color: '#005e5d',
};
