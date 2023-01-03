import React from 'react';

import MdXIcon from '../../packages/react/src/icons/MdXIcon';

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
    <div style={{ width: '100px', height: '100px', color: args.color }}>
      <MdXIcon className={args.className} />
    </div>
  );
}

export const XIcon = Template.bind({})
XIcon.args = {
  className: '',
  color: '#005e5d'
};
