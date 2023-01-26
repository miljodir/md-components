import React from 'react';

import MdPinIcon from '../../packages/react/src/icons/MdPinIcon'
import MdPinIcon64 from '../../packages/react/src/icons/MdPinIcon64';
import MdPinAltIcon from '../../packages/react/src/icons/MdPinAltIcon'
import MdPinAltIcon64 from '../../packages/react/src/icons/MdPinAltIcon64';

export default {
  title: 'Icons/Pin',
  component: MdPinIcon,
  parameters: {
    docs: {
      description: {
        component: "Pin/map pin icon. Color is inherited from parent.<br/><br/>`import { MdPinIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdPinIcon64 } from '@miljodirektoratet/md-react'`<br/>`import { MdPinAltIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdPinAltIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdPinIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdPinIcon64 className={args.className} />
    </div>
  );
}

const TemplateAlt = (args: any) => {
  return (
    <div style={{ width: '32px', height: '32px', color: args.color }}>
      <MdPinAltIcon className={args.className} />
    </div>
  );
}

const TemplateAlt64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdPinAltIcon64 className={args.className} />
    </div>
  );
}

export const PinIcon = Template.bind({})
PinIcon.args = {
  className: '',
  color: '#005e5d'
};

export const PinIcon64 = Template64.bind({})
PinIcon64.args = {
  className: '',
  color: '#005e5d'
};

export const PinAltIcon = TemplateAlt.bind({})
PinAltIcon.args = {
  className: '',
  color: '#005e5d'
};

export const PinAltIcon64 = TemplateAlt64.bind({})
PinAltIcon64.args = {
  className: '',
  color: '#005e5d'
};
