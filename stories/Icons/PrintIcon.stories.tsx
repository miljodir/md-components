import React from 'react';

import MdPrintIcon from '../../packages/react/src/icons/MdPrintIcon';
import MdPrintIcon64 from '../../packages/react/src/icons/MdPrintIcon64';

export default {
  title: 'Icons/Print',
  component: MdPrintIcon,
  parameters: {
    docs: {
      description: {
        component:
          "Print/printer icon. Color is inherited from parent.<br/><br/>`import { MdPrintIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdPrintIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdPrintIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdPrintIcon64 className={args.className} />
    </div>
  );
};

export const PrintIcon = Template.bind({});
PrintIcon.args = {
  className: '',
  color: '#005e5d',
};

export const PrintIcon64 = Template64.bind({});
PrintIcon64.args = {
  className: '',
  color: '#005e5d',
};
