import React from 'react';

import MdChevronIcon from '../../packages/react/src/icons/MdChevronIcon';
import MdChevronIcon64 from '../../packages/react/src/icons/MdChevronIcon64';

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
    <div style={{ width: '32px', height: '32px', color: args.color }}>
      <MdChevronIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdChevronIcon64 className={args.className} />
    </div>
  );
}

export const ChevronIcon = Template.bind({})
ChevronIcon.args = {
  className: '',
  color: '#005e5d'
};

export const ChevronIcon64 = Template64.bind({})
ChevronIcon64.args = {
  className: '',
  color: '#005e5d'
};
