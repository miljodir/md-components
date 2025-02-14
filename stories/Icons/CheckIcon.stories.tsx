import React from 'react';

import MdCheckIcon from '../../packages/react/src/icons/MdCheckIcon';
import MdCheckIcon64 from '../../packages/react/src/icons/MdCheckIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Icons/Check',
  component: MdCheckIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Check mark icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdCheckIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdCheckIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdCheckIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdCheckIcon64 className={args.className} />
    </div>
  );
};

export const CheckIcon = Template.bind({});
CheckIcon.args = {
  className: '',
  color: '#005e5d',
};

export const CheckIcon64 = Template64.bind({});
CheckIcon64.args = {
  className: '',
  color: '#005e5d',
};
