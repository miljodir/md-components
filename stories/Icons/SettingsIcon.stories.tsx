import React from 'react';

import MdSettingsIcon from '../../packages/react/src/icons/MdSettingsIcon';
import MdSettingsIcon64 from '../../packages/react/src/icons/MdSettingsIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Deprecated/Icons/Settings',
  component: MdSettingsIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Settings icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdSettingsIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdSettingsIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdSettingsIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdSettingsIcon64 className={args.className} />
    </div>
  );
};

export const SettingsIcon = Template.bind({});
SettingsIcon.args = {
  className: '',
  color: '#005e5d',
};

export const SettingsIcon64 = Template64.bind({});
SettingsIcon64.args = {
  className: '',
  color: '#005e5d',
};
