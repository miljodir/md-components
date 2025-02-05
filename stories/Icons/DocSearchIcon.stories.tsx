import React from 'react';

import MdDocSearchIcon from '../../packages/react/src/icons/MdDocSearchIcon';
import MdDocSearchIcon64 from '../../packages/react/src/icons/MdDocSearchIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Deprecated/Icons/DocSearch',
  component: MdDocSearchIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Document search icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdDocSearchIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdDocSearchIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdDocSearchIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdDocSearchIcon64 className={args.className} />
    </div>
  );
};

export const DocSearchIcon = Template.bind({});
DocSearchIcon.args = {
  className: '',
  color: '#005e5d',
};

export const DocSearchIcon64 = Template64.bind({});
DocSearchIcon64.args = {
  className: '',
  color: '#005e5d',
};
