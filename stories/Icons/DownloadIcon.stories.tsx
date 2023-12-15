import React from 'react';

import MdDownloadIcon from '../../packages/react/src/icons/MdDownloadIcon';
import MdDownloadIcon64 from '../../packages/react/src/icons/MdDownloadIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Icons/Download',
  component: MdDownloadIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Download icon. Color is inherited from parent.<br/><br/>`import { MdDownloadIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdDownloadIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdDownloadIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdDownloadIcon64 className={args.className} />
    </div>
  );
};

export const DownloadIcon = Template.bind({});
DownloadIcon.args = {
  className: '',
  color: '#005e5d',
};

export const DownloadIcon64 = Template64.bind({});
DownloadIcon64.args = {
  className: '',
  color: '#005e5d',
};
