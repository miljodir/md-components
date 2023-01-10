import React from 'react';

import MdDocIcon from '../../packages/react/src/icons/MdDocIcon';
import MdDocIcon64 from '../../packages/react/src/icons/MdDocIcon64';

export default {
  title: 'Icons/Doc',
  component: MdDocIcon,
  parameters: {
    docs: {
      description: {
        component: "Document icon. Color is inherited from parent.<br/><br/>`import { MdDocIcon } from '@md-components/md-react'`<br/>`import { MdDocIcon64 } from '@md-components/md-react'`",
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
      <MdDocIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdDocIcon64 className={args.className} />
    </div>
  );
}

export const DocIcon = Template.bind({})
DocIcon.args = {
  className: '',
  color: '#005e5d'
};


export const DocIcon64 = Template64.bind({})
DocIcon64.args = {
  className: '',
  color: '#005e5d'
};
