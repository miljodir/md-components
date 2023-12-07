import React from 'react';

import MdConfirmIcon from '../../packages/react/src/icons/MdConfirmIcon';
import MdConfirmIcon64 from '../../packages/react/src/icons/MdConfirmIcon64';

export default {
  title: 'Icons/Confirm',
  component: MdConfirmIcon,
  parameters: {
    docs: {
      description: {
        component:
          "Confirm icon. Color is inherited from parent.<br/><br/>`import { MdConfirmIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdConfirmIcon64 } from '@miljodirektoratet/md-react'`",
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

const Template = (args: any) => {
  return (
    <div style={{ width: '32px', height: '32px', color: args.color }}>
      <MdConfirmIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdConfirmIcon64 className={args.className} />
    </div>
  );
};

export const ConfirmIcon = Template.bind({});
ConfirmIcon.args = {
  className: '',
  color: '#005e5d',
};

export const ConfirmIcon64 = Template64.bind({});
ConfirmIcon64.args = {
  className: '',
  color: '#005e5d',
};
