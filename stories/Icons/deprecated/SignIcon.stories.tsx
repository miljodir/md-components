import React from 'react';

import MdSignIcon from '../../../packages/react/src/icons/MdSignIcon';
import type { Args } from '@storybook/react';

export default {
  title: 'Deprecated/Icons/Sign',
  component: MdSignIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Sign/Road sign icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdSignIcon } from '@miljodirektoratet/md-react'`",
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
      <MdSignIcon className={args.className} />
    </div>
  );
};

export const SignIcon = Template.bind({});
SignIcon.args = {
  className: '',
  color: '#005e5d',
};
