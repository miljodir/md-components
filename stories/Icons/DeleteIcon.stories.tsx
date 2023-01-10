import React from 'react';

import MdDeleteIcon from '../../packages/react/src/icons/MdDeleteIcon';
import MdDeleteIcon64 from '../../packages/react/src/icons/MdDeleteIcon64';

export default {
  title: 'Icons/Delete',
  component: MdDeleteIcon,
  parameters: {
    docs: {
      description: {
        component: "Delete icon. Color is inherited from parent.<br/><br/>`import { MdDeleteIcon } from '@md-components/md-react'`<br/>`import { MdDeleteIcon64 } from '@md-components/md-react'`",
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
      <MdDeleteIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdDeleteIcon64 className={args.className} />
    </div>
  );
}

export const DeleteIcon = Template.bind({})
DeleteIcon.args = {
  className: '',
  color: '#005e5d'
};

export const DeleteIcon64 = Template64.bind({})
DeleteIcon64.args = {
  className: '',
  color: '#005e5d'
};
