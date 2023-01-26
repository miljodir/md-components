import React from 'react';

import MdSignIcon from '../../packages/react/src/icons/MdSignIcon'

export default {
  title: 'Icons/Sign',
  component: MdSignIcon,
  parameters: {
    docs: {
      description: {
        component: "Sign/Road sign icon. Color is inherited from parent.<br/><br/>`import { MdSignIcon } from '@miljodirektoratet/md-react'`",
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
      <MdSignIcon className={args.className} />
    </div>
  );
}

export const SignIcon = Template.bind({})
SignIcon.args = {
  className: '',
  color: '#005e5d'
};
