import React from 'react';

import MdChevronIcon from '../../packages/react/src/icons/MdChevronIcon';

export default {
  title: 'Icons/ChevronIcon',
  component: MdChevronIcon,
  parameters: {
    docs: {
      description: {
        component: 'Chevron icon. Color is inherited from parent.',
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
    <div style={{ width: '100px', height: '100px', color: args.color, rotate: '90deg' }}>
      <MdChevronIcon className={args.className} />
    </div>
  );
}

export const ChevronIcon = Template.bind({})
ChevronIcon.args = {
  className: '',
  color: '#005e5d'
};
