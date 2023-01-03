import React from 'react';

import MdDocIcon from '../../packages/react/src/icons/MdDocIcon';

export default {
  title: 'Icons/DocIcon',
  component: MdDocIcon,
  parameters: {
    docs: {
      description: {
        component: 'Document icon. Color is inherited from parent.',
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
    <div style={{ width: '100px', height: '130px', color: args.color }}>
      <MdDocIcon className={args.className} />
    </div>
  );
}

export const DocIcon = Template.bind({})
DocIcon.args = {
  className: '',
  color: '#005e5d'
};
