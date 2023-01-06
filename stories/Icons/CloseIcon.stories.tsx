import React from 'react';

import MdCloseIcon from '../../packages/react/src/icons/MdCloseIcon'
import MdCloseIcon64 from '../../packages/react/src/icons/MdCloseIcon64';

export default {
  title: 'Icons/Close',
  component: MdCloseIcon,
  parameters: {
    docs: {
      description: {
        component: "Close icon. Color is inherited from parent.<p>`import { MdCloseIcon } from '@md-components/md-react'`</p><p>`import { MdCloseIcon64 } from '@md-components/md-react'`</p>",
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
      <MdCloseIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdCloseIcon64 className={args.className} />
    </div>
  );
}

export const CloseIcon = Template.bind({})
CloseIcon.args = {
  className: '',
  color: '#005e5d'
};

export const CloseIcon64 = Template64.bind({})
CloseIcon64.args = {
  className: '',
  color: '#005e5d'
};
