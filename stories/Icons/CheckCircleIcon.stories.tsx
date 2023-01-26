import React from 'react';

import MdCheckCircleIcon from '../../packages/react/src/icons/MdCheckCircleIcon';
import MdCheckCircleIcon64 from '../../packages/react/src/icons/MdCheckCircleIcon64';

export default {
  title: 'Icons/CheckCircle',
  component: MdCheckCircleIcon,
  parameters: {
    docs: {
      description: {
        component: "Circle with checkmark icon. Color is inherited from parent.<br/><br/>`import { MdCheckCircleIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdCheckCircleIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdCheckCircleIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdCheckCircleIcon64 className={args.className} />
    </div>
  );
}

export const CheckCircle = Template.bind({})
CheckCircle.args = {
  className: '',
  color: '#005e5d'
};

export const CheckCircle64 = Template64.bind({})
CheckCircle64.args = {
  className: '',
  color: '#005e5d'
};
