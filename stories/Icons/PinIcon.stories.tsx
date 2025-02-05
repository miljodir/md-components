import React from 'react';
import MdPinAltIcon from '../../packages/react/src/icons/MdPinAltIcon';
import MdPinAltIcon64 from '../../packages/react/src/icons/MdPinAltIcon64';
import MdPinIcon from '../../packages/react/src/icons/MdPinIcon';
import MdPinIcon64 from '../../packages/react/src/icons/MdPinIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Deprecated/Icons/Pin',
  component: MdPinIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Pin/map pin icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdPinIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdPinIcon64 } from '@miljodirektoratet/md-react'`<br/>`import { MdPinAltIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdPinAltIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdPinIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdPinIcon64 className={args.className} />
    </div>
  );
};

const TemplateAlt = (args: Args) => {
  return (
    <div style={{ width: '32px', height: '32px', color: args.color }}>
      <MdPinAltIcon className={args.className} />
    </div>
  );
};

const TemplateAlt64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdPinAltIcon64 className={args.className} />
    </div>
  );
};

export const PinIcon = Template.bind({});
PinIcon.args = {
  className: '',
  color: '#005e5d',
};

export const PinIcon64 = Template64.bind({});
PinIcon64.args = {
  className: '',
  color: '#005e5d',
};

export const PinAltIcon = TemplateAlt.bind({});
PinAltIcon.args = {
  className: '',
  color: '#005e5d',
};

export const PinAltIcon64 = TemplateAlt64.bind({});
PinAltIcon64.args = {
  className: '',
  color: '#005e5d',
};
