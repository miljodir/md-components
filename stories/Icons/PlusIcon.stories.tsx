import React from 'react';

import MdPlusIcon from '../../packages/react/src/icons/MdPlusIcon';
import MdPlusIcon64 from '../../packages/react/src/icons/MdPlusIcon64';

export default {
  title: 'Icons/PlusIcon',
  component: MdPlusIcon,
  parameters: {
    docs: {
      description: {
        component: "Plus/add/expand icon. Color is inherited from parent.<p>`import { MdPlusIcon } from '@md-components/md-react'`</p><p>`import { MdPlusIcon64 } from '@md-components/md-react'`</p>",
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
      <MdPlusIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdPlusIcon64 className={args.className} />
    </div>
  );
}

export const PlusIcon = Template.bind({})
PlusIcon.args = {
  className: '',
  color: '#005e5d'
};

export const PlusIcon64 = Template64.bind({})
PlusIcon64.args = {
  className: '',
  color: '#005e5d'
};
