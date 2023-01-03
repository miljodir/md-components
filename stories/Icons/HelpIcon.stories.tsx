import React from 'react';

import MdHelpIcon from '../../packages/react/src/icons/MdHelpIcon';

export default {
  title: 'Icons/HelpIcon',
  component: MdHelpIcon,
  parameters: {
    docs: {
      description: {
        component: 'Download icon. Color is inherited from parent.',
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
      <MdHelpIcon className={args.className} />
    </div>
  );
}

export const HelpIcon = Template.bind({})
HelpIcon.args = {
  className: '',
  color: '#005e5d'
};
