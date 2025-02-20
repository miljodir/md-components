import React from 'react';

import MdUploadIcon from '../../../packages/react/src/icons/MdUploadIcon';
import MdUploadIcon64 from '../../../packages/react/src/icons/MdUploadIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Deprecated/Icons/Upload',
  component: MdUploadIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Upload icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdUploadIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdUploadIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdUploadIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdUploadIcon64 className={args.className} />
    </div>
  );
};

export const UploadIcon = Template.bind({});
UploadIcon.args = {
  className: '',
  color: '#005e5d',
};

export const UploadIcon64 = Template64.bind({});
UploadIcon64.args = {
  className: '',
  color: '#005e5d',
};
