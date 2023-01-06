import React from 'react';

import MdPanIcon from '../../packages/react/src/icons/MdPanIcon'
import MdPanIcon64 from '../../packages/react/src/icons/MdPanIcon64';

export default {
  title: 'Icons/Pan',
  component: MdPanIcon,
  parameters: {
    docs: {
      description: {
        component: "Pan icon. Color is inherited from parent.<p>`import { MdPanIcon } from '@md-components/md-react'`</p><p>`import { MdPanIcon64 } from '@md-components/md-react'`</p>",
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
      <MdPanIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdPanIcon64 className={args.className} />
    </div>
  );
}

export const PanIcon = Template.bind({})
PanIcon.args = {
  className: '',
  color: '#005e5d'
};

export const PanIcon64 = Template64.bind({})
PanIcon64.args = {
  className: '',
  color: '#005e5d'
};
