import React from 'react';

import MdWarningIcon from '../../packages/react/src/icons/MdWarningIcon';

export default {
  title: 'Icons/WarningIcon',
  component: MdWarningIcon,
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
      <MdWarningIcon className={args.className} />
    </div>
  );
}

export const WarningIcon = Template.bind({})
WarningIcon.args = {
  className: '',
  color: '#ca0000'
};
