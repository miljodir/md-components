import React from 'react';

import MdPlusIcon from '../../packages/react/src/icons/MdPlusIcon';

export default {
  title: 'Icons/PlusIcon',
  component: MdPlusIcon,
  parameters: {
    docs: {
      description: {
        component: 'Plus/add/expand icon. Color is inherited from parent.',
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
      <MdPlusIcon className={args.className} />
    </div>
  );
}

export const PlusIcon = Template.bind({})
PlusIcon.args = {
  className: '',
  color: '#005e5d'
};
