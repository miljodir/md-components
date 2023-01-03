import React from 'react';

import MdUploadIcon from '../../packages/react/src/icons/MdUploadIcon';

export default {
  title: 'Icons/UploadIcon',
  component: MdUploadIcon,
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
      <MdUploadIcon className={args.className} />
    </div>
  );
}

export const UploadIcon = Template.bind({})
UploadIcon.args = {
  className: '',
  color: '#005e5d'
};
