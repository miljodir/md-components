import React, { ClickEvent } from 'react';
import { useArgs } from '@storybook/client-api';

import MdFilterChip from '../../packages/react/src/chips/MdFilterChip';
import UserIcon from '../../packages/react/src/icons/UserIcon';

export default {
  title: 'Chips/FilterChip',
  component: MdFilterChip,
  parameters: {
    docs: {
      description: {
        component: 'A chip component used for filters. Requires an onClick handler',
      },
    },
  },
  argTypes: {
    label: {
      description: "The chips label",
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text'
    },
    id: {
      description: "The chips unique id.",
      table: {
        defaultValue: { summary: 'random uuid4 string' },
        type: {
          summary: 'text',
        },
      },
      control: 'text'
    },
    disabled: {
      description: "Toggle disabled state on/off",
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' }
    },
    active: {
      description: 'Apply active state to chip',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' }
    },
    prefixIcon: {
      type: { name: 'ReactNode' },
      description: "Prefix icon to apply before chip label. Will render a 16px x 16px container with icon passed. When chip is `active`, icon will be replaced with check mark.",
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: "DomElement | image | ReactNode",
        },
      },
      control: { type: 'boolean' }
    },
    onClick: {
      type: { name: 'array', required: true },
      description: 'Callback for click handling.',
      table: {
        defaultValue: { summary: 'function' },
        type: {
          summary: null,
        },
      }
    }
  }
};

const Template = args => {
  const [_, updateArgs] = useArgs();

  const handleClick = (e: ClickEvent<HTMLInputElement>) => {
    updateArgs({ ...args, active: !args.active });
  }

  return (
    <MdFilterChip
      {...args}
      prefixIcon={args.prefixIcon ? <UserIcon /> : null}
      onClick={(e) => {
        handleClick(e);
      }}
    />
  );
};

export const FilterChip = Template.bind({});
FilterChip.args = {
  label: 'Label',
  id: 'filter-chip-1',
  disabled: false,
  active: false,
  prefixIcon: false
};
