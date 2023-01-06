import React from 'react';

import MdGraphIcon from '../../packages/react/src/icons/MdGraphIcon';
import MdGraphIcon64 from '../../packages/react/src/icons/MdGraphIcon64';

export default {
  title: 'Icons/Graph',
  component: MdGraphIcon,
  parameters: {
    docs: {
      description: {
        component: "Graph icon. Color is inherited from parent.<p>`import { MdGraphIcon } from '@md-components/md-react'`</p><p>`import { MdGraphIcon64 } from '@md-components/md-react'`</p>",
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
      <MdGraphIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdGraphIcon64 className={args.className} />
    </div>
  );
}

export const GraphIcon = Template.bind({})
GraphIcon.args = {
  className: '',
  color: '#005e5d'
};


export const GraphIcon64 = Template64.bind({})
GraphIcon64.args = {
  className: '',
  color: '#005e5d'
};
