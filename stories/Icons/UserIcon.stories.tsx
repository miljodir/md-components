import React from 'react';

import MdUserIcon from '../../packages/react/src/icons/MdUserIcon';
import MdUserIcon64 from '../../packages/react/src/icons/MdUserIcon64';

export default {
  title: 'Icons/UserIcon',
  component: MdUserIcon,
  parameters: {
    docs: {
      description: {
        component: 'User/avatar icon. Color is inherited from parent.',
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
      <MdUserIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdUserIcon64 className={args.className} />
    </div>
  );
}

export const UserIcon = Template.bind({})
UserIcon.args = {
  className: '',
  color: '#005e5d'
};


export const UserIcon64 = Template64.bind({})
UserIcon64.args = {
  className: '',
  color: '#005e5d'
};
