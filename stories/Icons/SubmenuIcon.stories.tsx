import React from 'react';

import MdSubmenuIcon from '../../packages/react/src/icons/MdSubmenuIcon'
import MdSubmenuIcon64 from '../../packages/react/src/icons/MdSubmenuIcon64';

export default {
  title: 'Icons/Submenu',
  component: MdSubmenuIcon,
  parameters: {
    docs: {
      description: {
        component: "Submenu icon. Color is inherited from parent.<br/><br/>`import { MdSubmenuIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdSubmenuIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdSubmenuIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdSubmenuIcon64 className={args.className} />
    </div>
  );
}

export const SubmenuIcon = Template.bind({})
SubmenuIcon.args = {
  className: '',
  color: '#005e5d'
};

export const SubmenuIcon64 = Template64.bind({})
SubmenuIcon64.args = {
  className: '',
  color: '#005e5d'
};
