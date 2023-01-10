import React from 'react';

import MdSettingsIcon from '../../packages/react/src/icons/MdSettingsIcon'
import MdSettingsIcon64 from '../../packages/react/src/icons/MdSettingsIcon64';

export default {
  title: 'Icons/Settings',
  component: MdSettingsIcon,
  parameters: {
    docs: {
      description: {
        component: "Settings icon. Color is inherited from parent.<br/><br/>`import { MdSettingsIcon } from '@md-components/md-react'`<br/>`import { MdSettingsIcon64 } from '@md-components/md-react'`",
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
      <MdSettingsIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdSettingsIcon64 className={args.className} />
    </div>
  );
}

export const SettingsIcon = Template.bind({})
SettingsIcon.args = {
  className: '',
  color: '#005e5d'
};

export const SettingsIcon64 = Template64.bind({})
SettingsIcon64.args = {
  className: '',
  color: '#005e5d'
};
