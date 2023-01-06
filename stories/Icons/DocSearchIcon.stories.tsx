import React from 'react';

import MdDocSearchIcon from '../../packages/react/src/icons/MdDocSearchIcon';
import MdDocSearchIcon64 from '../../packages/react/src/icons/MdDocSearchIcon64';

export default {
  title: 'Icons/DocSearch',
  component: MdDocSearchIcon,
  parameters: {
    docs: {
      description: {
        component: "Document search icon. Color is inherited from parent.<p>`import { MdDocSearchIcon } from '@md-components/md-react'`</p><p>`import { MdDocSearchIcon64 } from '@md-components/md-react'`</p>",
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
      <MdDocSearchIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdDocSearchIcon64 className={args.className} />
    </div>
  );
}

export const DocSearchIcon = Template.bind({})
DocSearchIcon.args = {
  className: '',
  color: '#005e5d'
};


export const DocSearchIcon64 = Template64.bind({})
DocSearchIcon64.args = {
  className: '',
  color: '#005e5d'
};
