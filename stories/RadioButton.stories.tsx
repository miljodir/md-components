import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs';
import { useArgs } from '@storybook/preview-api';
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
          "A radio button component. In addition to the properties presented here, the component accepts all standard attributes of a HTML Input element.<br/><br/>`import { MdRadioButton } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string' },
      description: 'The label for the radio button.',
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
      type: { name: 'string' },
      description: 'Id for the radio button. If not set, uses a random uuid',
      table: {
        defaultValue: { summary: 'useId()' },
        type: {
          summary: 'string',
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
    updateArgs({ ...args, value: target.value });
  };

  return (
    <MdRadioButton
      {...args}
      value={args.value}
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
