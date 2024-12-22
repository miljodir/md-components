import { Title, Subtitle, Description, Markdown, Primary, Controls } from '@storybook/addon-docs';
import { useArgs } from '@storybook/preview-api';
import React from 'react';
import Readme from '../packages/css/src/formElements/checkbox/README.md';
import MdCheckbox from '../packages/react/src/formElements/MdCheckbox';
import type { MdCheckboxProps } from '../packages/react/src/formElements/MdCheckbox';

export default {
  title: 'Form/Checkbox',
  component: MdCheckbox,
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
          "A checkbox component. In addition to the properties presented here, the component accepts all standard attributes of a HTML Input element.<br/><br/>`import { MdCheckbox } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    label: {
      description: 'The checkbox label',
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text',
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
    id: {
      description: 'Id for the checkbox. If not set, uses a random uuid',
      table: {
        defaultValue: { summary: 'useId()' },
        type: {
          summary: 'text',
        },
      },
      control: 'text',
    },
    disabled: {
      description: 'Is checkbox disabled or not',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
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

const Template = (args: MdCheckboxProps) => {
  const [, updateArgs] = useArgs();

  const handleCheck = (isChecked: boolean) => {
    updateArgs({ ...args, checked: isChecked });
  };

  return (
    <MdCheckbox
      {...args}
      checked={args.checked}
      onChange={() => {
        handleCheck(!args.checked);
      }}
    />
  );
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: 'Example checkbox',
  checked: true,
  value: 'checkbox_value',
  disabled: false,
};
