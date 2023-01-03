import React from 'react';

import MdDeleteIcon from '../../packages/react/src/icons/MdDeleteIcon';

export default {
  title: 'Icons/DeleteIcon',
  component: MdDeleteIcon,
  parameters: {
    docs: {
      description: {
        component: 'Delete icon. Color is inherited from parent.',
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
    <div style={{ width: '100px', height: '151px', color: args.color }}>
      <MdDeleteIcon className={args.className} />
    </div>
  );
}

export const DeleteIcon = Template.bind({})
DeleteIcon.args = {
  className: '',
  color: '#005e5d'
};
