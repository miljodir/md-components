import React from 'react';

import MdDocIcon from '../../../packages/react/src/icons/MdDocIcon';
import MdDocIcon64 from '../../../packages/react/src/icons/MdDocIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Deprecated/Icons/Doc',
  component: MdDocIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Document icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdDocIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdDocIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdDocIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdDocIcon64 className={args.className} />
    </div>
  );
};

export const DocIcon = Template.bind({});
DocIcon.args = {
  className: '',
  color: '#005e5d',
};

export const DocIcon64 = Template64.bind({});
DocIcon64.args = {
  className: '',
  color: '#005e5d',
};
