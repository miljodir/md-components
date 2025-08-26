import React from 'react';

import MdRedirectIcon from '../../../packages/react/src/icons/MdRedirectIcon';
import MdRedirectIcon64 from '../../../packages/react/src/icons/MdRedirectIcon64';
import type { Args } from '@storybook/react-webpack5';

export default {
  title: 'Deprecated/Icons/Redirect',
  component: MdRedirectIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Redirect icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdRedirectIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdRedirectIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdRedirectIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdRedirectIcon64 className={args.className} />
    </div>
  );
};

export const RedirectIcon = Template.bind({});
RedirectIcon.args = {
  className: '',
  color: '#005e5d',
};

export const RedirectIcon64 = Template64.bind({});
RedirectIcon64.args = {
  className: '',
  color: '#005e5d',
};
