import React from 'react';
import { useArgs } from '@storybook/client-api';

import MdInputChip from '../../packages/react/src/chips/MdInputChip';
import MdUserIcon from '../../packages/react/src/icons/MdUserIcon';

export default {
  title: 'Chips/InputChip',
  component: MdInputChip,
  parameters: {
    docs: {
      description: {
        component: 'A chip component. Requires an onClick handler. In this example clicks toggle active state.',
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
    hideCloseIcon: {
      description: 'Set this to `true` to hide the close icon (X) in the chip',
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
      description: "Prefix icon to apply before chip label. Will render a 16px x 16px container with icon passed.",
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: "DomElement | image | ReactNode",
        },
      },
      control: { type: 'boolean' }
    },
    solid: {
      description: 'Set this to `true` to keep background color on all states',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' }
    },
    onClick: {
      type: { name: 'function', required: true },
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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    updateArgs({ ...args, active: !args.active });
  }

  return (
    <MdInputChip
      {...args}
      prefixIcon={args.prefixIcon ? <MdUserIcon /> : null}
      onClick={(e) => { handleClick(e); }}
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
  solid: false
};
