import React from 'react';

import MdTableIcon from '../../packages/react/src/icons/MdTableIcon';

export default {
  title: 'Icons/Table',
  component: MdTableIcon,
  parameters: {
    docs: {
      description: {
        component:
          "Table icon. Color is inherited from parent.<br/><br/>`import { MdTableIcon } from '@miljodirektoratet/md-react'`",
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

const Template = (args: any) => {
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
