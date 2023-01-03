import React from 'react';

import MdConfirmIcon from '../../packages/react/src/icons/MdConfirmIcon';

export default {
  title: 'Icons/ConfirmIcon',
  component: MdConfirmIcon,
  parameters: {
    docs: {
      description: {
        component: 'Confirm icon. Color is inherited from parent.',
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
    <div style={{ width: '100px', height: '100px', color: args.color }}>
      <MdConfirmIcon className={args.className} />
    </div>
  );
}

export const ConfirmIcon = Template.bind({})
ConfirmIcon.args = {
  className: '',
  color: '#005e5d'
};
