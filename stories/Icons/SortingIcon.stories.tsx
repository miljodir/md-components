import React from 'react';

import MdSortingActiveIcon from '../../packages/react/src/icons/MdSortingActiveIcon';
import MdSortingIcon from '../../packages/react/src/icons/MdSortingIcon';
import MdSortingIcon64 from '../../packages/react/src/icons/MdSortingIcon64';
import type { Args } from '@storybook/react';

export default {
  title: 'Icons/Sorting',
  component: MdSortingIcon,
  parameters: {
    docs: {
      description: {
        component:
          // eslint-disable-next-line quotes
          "Sorting icons.  Color can be inherited from parent, or set directly on the component. In addition to the properties presented here, the component accepts all standard attributes of a HTML SVG element.<br/><br/>`import { MdSortingIcon, MdSortingIcon64, MdSortingActiveIcon } from '@miljodirektoratet/md-react'`",
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
      <MdSortingIcon className={args.className} />
    </div>
  );
};

const Template64 = (args: Args) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdSortingIcon64 className={args.className} />
    </div>
  );
};

const TemplateActive = (args: Args) => {
  return (
    <div style={{ width: '32px', height: '32px', color: args.color }}>
      <MdSortingActiveIcon className={args.className} />
    </div>
  );
};

export const SortingIcon = Template.bind({});
SortingIcon.args = {
  className: '',
  color: '#005e5d',
};

export const SortingIcon64 = Template64.bind({});
SortingIcon64.args = {
  className: '',
  color: '#005e5d',
};

export const SortingActiveIcon = TemplateActive.bind({});
SortingActiveIcon.args = {
  className: '',
  color: '#005e5d',
};
