import React from 'react';

import MdEnvelopeIcon from '../../../packages/react/src/icons/MdEnvelopeIcon';
import MdEnvelopeIcon64 from '../../../packages/react/src/icons/MdEnvelopeIcon64';
import type { Args } from '@storybook/react-webpack5';

export default {
  title: 'Deprecated/Icons/Envelope',
  component: MdEnvelopeIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Envelope icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdEnvelopeIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdEnvelopeIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdEnvelopeIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdEnvelopeIcon64 className={args.className} />
    </div>
  );
};

export const EnvelopeIcon = Template.bind({});
EnvelopeIcon.args = {
  className: '',
  color: '#005e5d',
};

export const EnvelopeIcon64 = Template64.bind({});
EnvelopeIcon64.args = {
  className: '',
  color: '#005e5d',
};
