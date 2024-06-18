import { Title, Subtitle, Description, Markdown, Primary, Controls } from '@storybook/addon-docs';
import { useArgs } from '@storybook/client-api';
import React from 'react';
import Readme from '../../packages/css/src/chips/README.md';
import MdFilterChip from '../../packages/react/src/chips/MdFilterChip';
import MdUserIcon from '../../packages/react/src/icons/MdUserIcon';
import type { MdFilterChipProps } from '../../packages/react/src/chips/MdFilterChip';

export default {
  title: 'Chips/FilterChip',
  component: MdFilterChip,
  parameters: {
    docs: {
      page: () => {
        return (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <Controls />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        component:
          // eslint-disable-next-line quotes
          "A chip component used for filters. In addition to the properties presented here, the component accepts all standard attributes of a HTML Button element.<br/><br/>`import { MdFilterChip } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    label: {
      description: 'The chips label',
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text',
    },
    id: {
      description: 'The chips unique id.',
      table: {
        defaultValue: { summary: 'random uuid4 string' },
        type: {
          summary: 'text',
        },
      },
      control: 'text',
    },
    disabled: {
      description: 'Toggle disabled state on/off',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    active: {
      description: 'Apply active state to chip',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    prefixIcon: {
      type: { name: 'ReactNode' },
      description:
        'Prefix icon to apply before chip label. Will render a 16px x 16px container with icon passed. When chip is `active`, icon will be replaced with check mark.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'DomElement | image | ReactNode',
        },
      },
      control: { type: 'boolean' },
    },
    onClick: {
      type: { name: 'function' },
      description: 'Callback for click handling.',
      table: {
        type: {
          summary: null,
        },
      },
    },
  },
};

const Template = (args: MdFilterChipProps) => {
  const [, updateArgs] = useArgs();

  const handleClick = () => {
    updateArgs({ ...args, active: !args.active });
  };

  return (
    <MdFilterChip
      {...args}
      prefixIcon={args.prefixIcon ? <MdUserIcon /> : null}
      onClick={() => {
        handleClick();
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
  prefixIcon: false,
};
