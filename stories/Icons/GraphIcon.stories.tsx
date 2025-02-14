import React from 'react';

import MdGraphIcon from '../../packages/react/src/icons/MdGraphIcon';
import MdGraphIcon64 from '../../packages/react/src/icons/MdGraphIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Icons/Graph',
  component: MdGraphIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Graph icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdGraphIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdGraphIcon64 } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    className: {
      description: 'Classes for svg icon',
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text',
    },
    color: {
      description: 'Set color of parent (for example purposes)',
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'color',
    },
  },
};

const Template = (args: Args) => {
  return (
    <div style={{ width: '32px', height: '32px', color: args.color }}>
      <MdGraphIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdGraphIcon64 className={args.className} />
    </div>
  );
};

export const GraphIcon = Template.bind({});
GraphIcon.args = {
  className: '',
  color: '#005e5d',
};

export const GraphIcon64 = Template64.bind({});
GraphIcon64.args = {
  className: '',
  color: '#005e5d',
};
