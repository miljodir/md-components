import React from 'react';

import MdInfoIcon from '../../packages/react/src/icons/MdInfoIcon'
import MdInfoIcon64 from '../../packages/react/src/icons/MdInfoIcon64';

export default {
  title: 'Icons/Info',
  component: MdInfoIcon,
  parameters: {
    docs: {
      description: {
        component: "Info icon. Color is inherited from parent.<br/><br/>`import { MdInfoIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdInfoIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdInfoIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdInfoIcon64 className={args.className} />
    </div>
  );
}

export const InfoIcon = Template.bind({})
InfoIcon.args = {
  className: '',
  color: '#005e5d'
};

export const InfoIcon64 = Template64.bind({})
InfoIcon64.args = {
  className: '',
  color: '#005e5d'
};
