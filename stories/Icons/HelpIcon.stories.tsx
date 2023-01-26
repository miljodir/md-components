import React from 'react';

import MdHelpIcon from '../../packages/react/src/icons/MdHelpIcon';
import MdHelpIcon64 from '../../packages/react/src/icons/MdHelpIcon64';

export default {
  title: 'Icons/Help',
  component: MdHelpIcon,
  parameters: {
    docs: {
      description: {
        component: "Help icon. Color is inherited from parent.<br/><br/>`import { MdHelpIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdHelpIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdHelpIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdHelpIcon64 className={args.className} />
    </div>
  );
}

export const HelpIcon = Template.bind({})
HelpIcon.args = {
  className: '',
  color: '#005e5d'
};


export const HelpIcon64 = Template64.bind({})
HelpIcon64.args = {
  className: '',
  color: '#005e5d'
};
