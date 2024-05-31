import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs';
import { useArgs } from '@storybook/client-api';
import React from 'react';
import Readme from '../packages/css/src/formElements/radiobutton/README.md';
import MdRadioButton from '../packages/react/src/formElements/MdRadioButton';
import type { MdRadioButtonProps } from '../packages/react/src/formElements/MdRadioButton';

export default {
  title: 'Form/Radio/RadioButton',
  component: MdRadioButton,
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
          "A radio button component.<br/><br/>`import { MdRadioButton } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string' },
      description: 'The label for the radio group.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    checked: {
      description: 'Is the checkbox checked or not',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    disabled: {
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    id: {
      type: { name: 'number | string' },
      description: 'The unique id for radiogroup.',
      table: {
        defaultValue: { summary: 'uuidv4' },
        type: {
          summary: 'number | string',
        },
      },
      control: { type: 'text' },
    },
    onChange: {
      description: 'Callback for controlling checked state',
      table: {
        defaultValue: { summary: 'function' },
        type: {
          summary: null,
        },
      },
      action: 'change',
    },
  },
};

const Template = (args: MdRadioButtonProps) => {
  const [, updateArgs] = useArgs();

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    updateArgs({ ...args, selectedOption: target.value });
  };

  return (
    <MdRadioButton
      {...args}
      selectedOption={args.selectedOption}
      onChange={(e: React.ChangeEvent) => {
        handleChange(e);
      }}
    />
  );
};

export const RadioButton = Template.bind({});
RadioButton.args = {
  label: 'Example radio button',
  id: 'radiobutton_id',
  checked: true,
  value: 'radio_value',
  disabled: false,
};
