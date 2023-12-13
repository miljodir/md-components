import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  Markdown,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import { useArgs } from '@storybook/client-api';
import React from 'react';
import Readme from '../packages/css/src/toggle/README.md';
import MdToggle from '../packages/react/src/toggle/MdToggle';
import type { MdToggleProps } from '../packages/react/src/toggle/MdToggle';

export default {
  title: 'Components/Toggle',
  component: MdToggle,
  parameters: {
    docs: {
      page: () => {
        return (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <ArgsTable story={PRIMARY_STORY} />
            <Stories />
            <Markdown>{Readme.toString()}</Markdown>
          </>
        );
      },
      description: {
        // eslint-disable-next-line quotes
        component: "Toggle switch.<br/><br/>`import { MdToggle } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    checked: {
      description: 'Is the toggle on or off?',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    id: {
      type: { name: 'string', required: true },
      description:
        '**Required**. Assign id to toggle field. This is used to identify which toggle is clicked, and which state it has.',
      table: {
        // defaultValue: { summary: 'random uuidv4 string' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    label: {
      type: { name: 'string' },
      description: 'The label for the toggle',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    disabled: {
      description: 'Is the toggle disabled?',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    error: {
      description: 'Does toggle contain an error?',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    errorText: {
      type: { name: 'string' },
      description: 'The error text to display',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    onChange: {
      type: { name: 'function' },
      description: 'The onChange handler for change events. Returns a ChangeEvent.',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
  },
};

const Template = (args: MdToggleProps) => {
  const [, updateArgs] = useArgs();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateArgs({ ...args, checked: e?.target?.checked });
  };

  return <MdToggle {...args} onChange={handleChange} />;
};

export const Toggle = Template.bind({});
Toggle.args = {
  id: 'toggle_switch',
  label: 'Label',
  checked: false,
  disabled: false,
  error: false,
  errorText: '',
};
