import React from 'react';

import MdTableIcon from '../../../packages/react/src/icons/MdTableIcon';
import type { Args } from '@storybook/react-webpack5';

export default {
  title: 'Deprecated/Icons/Table',
  component: MdTableIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Table icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdTableIcon } from '@miljodirektoratet/md-react'`",
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
      <MdTableIcon className={args.className} />
    </div>
  );
};

export const TableIcon = Template.bind({});
TableIcon.args = {
  className: '',
  color: '#005e5d',
};
