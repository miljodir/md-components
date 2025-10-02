import React from 'react';

import { MdIconKeyboardArrowDown } from '../../packages/react/src/icons-material/MdIconKeyboardArrowDown';

import type { MdIconProps } from '../../packages/react/src/icons-material/icon.model';
import type { StoryFn } from '@storybook/react-webpack5';

export default {
  title: 'Icons/Keyboard Arrow Down',
  component: MdIconKeyboardArrowDown,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Keyboard arrow down / chevron down icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdIconKeyboardArrowDown } from '@miljodirektoratet/md-react'`",
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

const Template: StoryFn<typeof MdIconKeyboardArrowDown> = (args: MdIconProps) => {
  const style = { width: '32px', height: '32px', color: args.color };

  if (args.large) {
    style.height = '64px';
    style.width = '64px';
  }
  return (
    <div style={style}>
      <MdIconKeyboardArrowDown {...args} />
    </div>
  );
};

export const KeyboardArrowDown = Template.bind({});
KeyboardArrowDown.args = {
  large: false,
  className: '',
  color: '#005e5d',
};
