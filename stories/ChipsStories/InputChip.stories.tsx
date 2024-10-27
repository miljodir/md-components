import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs';
import { useArgs } from '@storybook/client-api';
import React from 'react';
import Readme from '../../packages/css/src/chips/README.md';
import MdInputChip from '../../packages/react/src/chips/MdInputChip';
import MdUserIcon from '../../packages/react/src/icons/MdUserIcon';
import type { MdInputChipProps } from '../../packages/react/src/chips/MdInputChip';

export default {
  title: 'Chips/InputChip',
  component: MdInputChip,
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
          "A chip component. In addition to the properties presented here, the component accepts all standard attributes of a HTML Button element. In this example clicks toggle active state.<br/><br/>`import { MdInputChip } from '@miljodirektoratet/md-react'`",
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
      description: 'Id for the chip. If not set, uses a random uuid',
      table: {
        defaultValue: { summary: 'useId()' },
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
    hideCloseIcon: {
      description: 'Set this to `true` to hide the close icon (X) in the chip',
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
      description: 'Prefix icon to apply before chip label. Will render a 16px x 16px container with icon passed.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'DomElement | image | ReactNode',
        },
      },
      control: { type: 'boolean' },
    },
    solid: {
      description: 'Set this to `true` to keep background color on all states',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    onClick: {
      type: { name: 'function' },
      description: 'Callback for click handling.',
      table: {
        defaultValue: { summary: 'function' },
        type: {
          summary: null,
        },
      },
    },
  },
};

const Template = (args: MdInputChipProps) => {
  const [, updateArgs] = useArgs();

  const handleClick = () => {
    updateArgs({ ...args, active: !args.active });
  };

  return (
    <MdInputChip
      {...args}
      prefixIcon={args.prefixIcon ? <MdUserIcon /> : null}
      onClick={() => {
        handleClick();
      }}
    />
  );
};

export const InputChip = Template.bind({});
InputChip.args = {
  label: 'Label',
  id: 'input-chip-1',
  disabled: false,
  active: false,
  hideCloseIcon: false,
  prefixIcon: false,
  solid: false,
};
