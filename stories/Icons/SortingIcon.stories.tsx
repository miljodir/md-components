import React from 'react';

import MdSortingIcon from '../../packages/react/src/icons/MdSortingIcon'
import MdSortingIcon64 from '../../packages/react/src/icons/MdSortingIcon64';
import MdSortingActiveIcon from '../../packages/react/src/icons/MdSortingActiveIcon';

export default {
  title: 'Icons/Sorting',
  component: MdSortingIcon,
  parameters: {
    docs: {
      description: {
        component: "Sorting icons. Color is inherited from parent.<br/><br/>`import { MdSortingIcon, MdSortingIcon64, MdSortingActiveIcon } from '@md-components/md-react'`",
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
      <MdSortingIcon className={args.className} />
    </div>
  );
}

const Template64 = (args: any) => {
  return (
    <div style={{ width: '64px', height: '64px', color: args.color }}>
      <MdSortingIcon64 className={args.className} />
    </div>
  );
}

const TemplateActive = (args: any) => {
  return (
    <div style={{ width: '32px', height: '32px', color: args.color }}>
      <MdSortingActiveIcon className={args.className} />
    </div>
  );
}

export const SortingIcon = Template.bind({})
SortingIcon.args = {
  className: '',
  color: '#005e5d'
};

export const SortingIcon64 = Template64.bind({})
SortingIcon64.args = {
  className: '',
  color: '#005e5d'
};

export const SortingActiveIcon = TemplateActive.bind({})
SortingActiveIcon.args = {
  className: '',
  color: '#005e5d'
};
