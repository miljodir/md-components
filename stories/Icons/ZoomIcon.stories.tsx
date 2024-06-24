import React from 'react';
import MdZoomIcon from '../../packages/react/src/icons/MdZoomIcon';
import MdZoomIcon64 from '../../packages/react/src/icons/MdZoomIcon64';
import MdZoomIconMinus from '../../packages/react/src/icons/MdZoomIconMinus';
import MdZoomIconMinus64 from '../../packages/react/src/icons/MdZoomIconMinus64';
import MdZoomIconPlus from '../../packages/react/src/icons/MdZoomIconPlus';
import MdZoomIconPlus64 from '../../packages/react/src/icons/MdZoomIconPlus64';
import type { Args } from '@storybook/react';

export default {
  title: 'Icons/Zoom',
  component: MdZoomIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Zoom icons.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdZoomIcon, MdZoomIcon64, MdZoomIconPlus, MdZoomIconPlus64, MdZoomIconMinus, MdZoomIconMinus64 } from '@miljodirektoratet/md-react'`",
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
      <MdZoomIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdZoomIcon64 className={args.className} />
    </div>
  );
};

const TemplatePlus = (args: Args) => {
  return (
    <div style={{ width: '32px', height: '32px', color: args.color }}>
      <MdZoomIconPlus className={args.className} />
    </div>
  );
};

const TemplatePlus64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdZoomIconPlus64 className={args.className} />
    </div>
  );
};

const TemplateMinus = (args: Args) => {
  return (
    <div style={{ width: '32px', height: '32px', color: args.color }}>
      <MdZoomIconMinus className={args.className} />
    </div>
  );
};

const TemplateMinus64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdZoomIconMinus64 className={args.className} />
    </div>
  );
};

export const ZoomIcon = Template.bind({});
ZoomIcon.args = {
  className: '',
  color: '#005e5d',
};

export const ZoomIcon64 = Template64.bind({});
ZoomIcon64.args = {
  className: '',
  color: '#005e5d',
};

export const ZoomIconPlus = TemplatePlus.bind({});
ZoomIconPlus.args = {
  className: '',
  color: '#005e5d',
};

export const ZoomIconPlus64 = TemplatePlus64.bind({});
ZoomIconPlus64.args = {
  className: '',
  color: '#005e5d',
};

export const ZoomIconMinus = TemplateMinus.bind({});
ZoomIconMinus.args = {
  className: '',
  color: '#005e5d',
};

export const ZoomIconMinus64 = TemplateMinus64.bind({});
ZoomIconMinus64.args = {
  className: '',
  color: '#005e5d',
};
