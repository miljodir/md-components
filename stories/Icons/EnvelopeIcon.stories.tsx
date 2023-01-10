import React from 'react';

import MdEnvelopeIcon from '../../packages/react/src/icons/MdEnvelopeIcon'
import MdEnvelopeIcon64 from '../../packages/react/src/icons/MdEnvelopeIcon64';

export default {
  title: 'Icons/Envelope',
  component: MdEnvelopeIcon,
  parameters: {
    docs: {
      description: {
        component: "Envelope icon. Color is inherited from parent.<br/><br/>`import { MdEnvelopeIcon } from '@md-components/md-react'`<br/>`import { MdEnvelopeIcon64 } from '@md-components/md-react'`",
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
      <MdEnvelopeIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdEnvelopeIcon64 className={args.className} />
    </div>
  );
}

export const EnvelopeIcon = Template.bind({})
EnvelopeIcon.args = {
  className: '',
  color: '#005e5d'
};

export const EnvelopeIcon64 = Template64.bind({})
EnvelopeIcon64.args = {
  className: '',
  color: '#005e5d'
};
