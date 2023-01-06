import React from 'react';

import MdImageIcon from '../../packages/react/src/icons/MdImageIcon'
import MdImageIcon64 from '../../packages/react/src/icons/MdImageIcon64';

export default {
  title: 'Icons/Image',
  component: MdImageIcon,
  parameters: {
    docs: {
      description: {
        component: "Time/clock icon. Color is inherited from parent.<p>`import { MdImageIcon } from '@md-components/md-react'`</p><p>`import { MdImageIcon64 } from '@md-components/md-react'`</p>",
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
      <MdImageIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdImageIcon64 className={args.className} />
    </div>
  );
}

export const ImageIcon = Template.bind({})
ImageIcon.args = {
  className: '',
  color: '#005e5d'
};

export const ImageIcon64 = Template64.bind({})
ImageIcon64.args = {
  className: '',
  color: '#005e5d'
};
