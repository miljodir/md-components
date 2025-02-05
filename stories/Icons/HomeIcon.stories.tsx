import React from 'react';

import MdHomeIcon from '../../packages/react/src/icons/MdHomeIcon';
import MdHomeIcon64 from '../../packages/react/src/icons/MdHomeIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Deprecated/Icons/Home',
  component: MdHomeIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Home/house icon.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdHomeIcon } from '@miljodirektoratet/md-react'`<br/>`import { MdHomeIcon64 } from '@miljodirektoratet/md-react'`",
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
      <MdHomeIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdHomeIcon64 className={args.className} />
    </div>
  );
};

export const HomeIcon = Template.bind({});
HomeIcon.args = {
  className: '',
  color: '#005e5d',
};

export const HomeIcon64 = Template64.bind({});
HomeIcon64.args = {
  className: '',
  color: '#005e5d',
};
