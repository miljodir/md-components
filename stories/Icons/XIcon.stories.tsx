import React from 'react';

import MdXIcon from '../../packages/react/src/icons/MdXIcon';
import MdXIcon64 from '../../packages/react/src/icons/MdXIcon64';

export default {
  title: 'Icons/XIcon',
  component: MdXIcon,
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
    <div style={{ width: '32px', height: '32px', color: args.color }}>
      <MdXIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdXIcon64 className={args.className} />
    </div>
  );
}

export const XIcon = Template.bind({})
XIcon.args = {
  className: '',
  color: '#005e5d'
};


export const XIcon64 = Template64.bind({})
XIcon64.args = {
  className: '',
  color: '#005e5d'
};
