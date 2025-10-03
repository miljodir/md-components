import React from 'react';

import { MdIconHelp } from '../../packages/react/src/icons-material/MdIconHelp';
import { MdIconHelpFilled } from '../../packages/react/src/icons-material/MdIconHelpFilled';

import type { MdIconProps } from '../../packages/react/src/icons-material/icon.model';
import type { StoryFn } from '@storybook/react-webpack5';

export default {
  title: 'Icons/Help',
  component: MdIconHelp,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Help icon. Color can be inherited from parent, or set directly on the component.<br/>The filled variant can be used for hover or active states.<br/>In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdIconHelp, MdIconHelpFilled } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    large: {
      description: 'Use large version of icon. Best suited if displaying large icons.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: 'boolean',
    },
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

const Template: StoryFn<typeof MdIconHelp> = (args: MdIconProps) => {
  const style = { width: '32px', height: '32px', color: args.color };

  if (args.large) {
    style.height = '64px';
    style.width = '64px';
  }
  return (
    <div style={style}>
      <MdIconHelp {...args} />
    </div>
  );
};
const TemplateFilled = (args: Args) => {
  const style = { width: '32px', height: '32px', color: args.color };

  if (args.large) {
    style.height = '64px';
    style.width = '64px';
  }
  return (
    <div style={style}>
      <MdIconHelpFilled {...args} />
    </div>
  );
};

export const Help = Template.bind({});
Help.args = {
  large: false,
  className: '',
  color: '#005e5d',
};

export const HelpFilled = TemplateFilled.bind({});
HelpFilled.args = {
  large: false,
  className: '',
  color: '#005e5d',
};
