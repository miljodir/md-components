import React from 'react';

import MdPersonIcon from '../../packages/react/src/icons/MdPersonIcon'
import MdPersonIcon64 from '../../packages/react/src/icons/MdPersonIcon64';

export default {
  title: 'Icons/Person',
  component: MdPersonIcon,
  parameters: {
    docs: {
      description: {
        component: "Person icon. Color is inherited from parent.<p>`import { MdPersonIcon } from '@md-components/md-react'`</p><p>`import { MdPersonIcon64 } from '@md-components/md-react'`</p>",
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
      <MdPersonIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdPersonIcon64 className={args.className} />
    </div>
  );
}

export const PersonIcon = Template.bind({})
PersonIcon.args = {
  className: '',
  color: '#005e5d'
};

export const PersonIcon64 = Template64.bind({})
PersonIcon64.args = {
  className: '',
  color: '#005e5d'
};
