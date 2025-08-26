import React from 'react';

import { MdIconTable } from '../../packages/react/src/icons-material/MdIconTable';

import type { Args } from '@storybook/react-webpack5';

export default {
  title: 'Icons/Table',
  component: MdIconTable,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Table icon. Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdIconTable } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    large: {
      description: 'Use large version of icon. Best suited if displaying large icons.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: 'boolean',
    },
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
  const style = { width: '32px', height: '32px', color: args.color };

  if (args.large) {
    style.height = '64px';
    style.width = '64px';
  }
  return (
    <div style={style}>
      <MdIconTable {...args} />
    </div>
  );
};

export const Table = Template.bind({});
Table.args = {
  large: false,
  className: '',
  color: '#005e5d',
};
