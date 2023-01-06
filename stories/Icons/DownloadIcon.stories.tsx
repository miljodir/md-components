import React from 'react';

import MdDownloadIcon from '../../packages/react/src/icons/MdDownloadIcon';
import MdDownloadIcon64 from '../../packages/react/src/icons/MdDownloadIcon64';

export default {
  title: 'Icons/Download',
  component: MdDownloadIcon,
  parameters: {
    docs: {
      description: {
        component: "Download icon. Color is inherited from parent.<p>`import { MdDownloadIcon } from '@md-components/md-react'`</p><p>`import { MdDownloadIcon64 } from '@md-components/md-react'`</p>",
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
      <MdDownloadIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdDownloadIcon64 className={args.className} />
    </div>
  );
}

export const DownloadIcon = Template.bind({})
DownloadIcon.args = {
  className: '',
  color: '#005e5d'
};


export const DownloadIcon64 = Template64.bind({})
DownloadIcon64.args = {
  className: '',
  color: '#005e5d'
};
