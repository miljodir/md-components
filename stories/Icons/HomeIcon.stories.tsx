import React from 'react';

import MdHomeIcon from '../../packages/react/src/icons/MdHomeIcon'
import MdHomeIcon64 from '../../packages/react/src/icons/MdHomeIcon64';

export default {
  title: 'Icons/Home',
  component: MdHomeIcon,
  parameters: {
    docs: {
      description: {
        component: "Home/house icon. Color is inherited from parent.<br/><br/>`import { MdHomeIcon } from '@md-components/md-react'`<br/>`import { MdHomeIcon64 } from '@md-components/md-react'`",
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
      <MdHomeIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdHomeIcon64 className={args.className} />
    </div>
  );
}

export const HomeIcon = Template.bind({})
HomeIcon.args = {
  className: '',
  color: '#005e5d'
};

export const HomeIcon64 = Template64.bind({})
HomeIcon64.args = {
  className: '',
  color: '#005e5d'
};
