import React from 'react';

import MdUserIcon from '../../packages/react/src/icons/MdUserIcon';

export default {
  title: 'Icons/UserIcon',
  component: MdUserIcon,
  parameters: {
    docs: {
      description: {
        component: 'Upload icon. Color is inherited from parent.',
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
      <MdUserIcon className={args.className} />
    </div>
  );
}

export const UserIcon = Template.bind({})
UserIcon.args = {
  className: '',
  color: '#005e5d'
};
