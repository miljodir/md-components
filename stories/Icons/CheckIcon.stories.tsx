import React from 'react';

import MdCheckIcon from '../../packages/react/src/icons/MdCheckIcon';

export default {
  title: 'Icons/CheckIcon',
  component: MdCheckIcon,
  parameters: {
    docs: {
      description: {
        component: 'Check mark icon. Color is inherited from parent.',
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
      <MdCheckIcon className={args.className} />
    </div>
  );
}

export const CheckIcon = Template.bind({})
CheckIcon.args = {
  className: '',
  color: '#005e5d'
};
