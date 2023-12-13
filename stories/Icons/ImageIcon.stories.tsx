import React from 'react';

import MdImageIcon from '../../packages/react/src/icons/MdImageIcon';
import MdImageIcon64 from '../../packages/react/src/icons/MdImageIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Icons/Image',
  component: MdImageIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Time/clock icon. Color is inherited from parent.<br/><br/>`import { MdImageIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdImageIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdImageIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdImageIcon64 className={args.className} />
    </div>
  );
};

export const ImageIcon = Template.bind({});
ImageIcon.args = {
  className: '',
  color: '#005e5d',
};

export const ImageIcon64 = Template64.bind({});
ImageIcon64.args = {
  className: '',
  color: '#005e5d',
};
