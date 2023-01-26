import React from 'react';

import MdCalendarDayIcon from '../../packages/react/src/icons/MdCalendarDayIcon'
import MdCalendarDayIcon64 from '../../packages/react/src/icons/MdCalendarDayIcon64';

export default {
  title: 'Icons/CalendarDay',
  component: MdCalendarDayIcon,
  parameters: {
    docs: {
      description: {
        component: "Calendar day icon. Color is inherited from parent.<br/><br/>`import { MdCalendarDayIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdCalendarDayIcon64 } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    className: {
      description: "Classes for svg icon",
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text'
    },
    color: {
      description: "Set color of parent (for example purposes)",
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'color'
    }
  }
};

const Template = (args: any) => {
  return (
    <div style={{ width: '32px', height: '32px', color: args.color }}>
      <MdCalendarDayIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdCalendarDayIcon64 className={args.className} />
    </div>
  );
}

export const CalendarDayIcon = Template.bind({})
CalendarDayIcon.args = {
  className: '',
  color: '#005e5d'
};

export const CalendarDayIcon64 = Template64.bind({})
CalendarDayIcon64.args = {
  className: '',
  color: '#005e5d'
};
