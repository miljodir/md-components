import React from 'react';

import MdDownloadIcon from '../../packages/react/src/icons/MdDownloadIcon';

export default {
  title: 'Icons/DownloadIcon',
  component: MdDownloadIcon,
  parameters: {
    docs: {
      description: {
        component: 'Download icon. Color is inherited from parent.',
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
    <div style={{ width: '100px', height: '100px', color: args.color }}>
      <MdDownloadIcon className={args.className} />
    </div>
  );
}

export const DownloadIcon = Template.bind({})
DownloadIcon.args = {
  className: '',
  color: '#005e5d'
};
