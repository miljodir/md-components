import React from 'react';
import { useArgs } from '@storybook/client-api';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
// @ts-ignore
import Readme from '../packages/css/src/formElements/checkbox/README.md';

import MdCheckbox from '../packages/react/src/formElements/MdCheckbox';

export default {
  title: 'Form/Checkbox',
  component: MdCheckbox,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description markdown="A checkbox component.<br/><br/>`import { MdCheckbox } from '@miljodirektoratet/md-react'`" />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
          <Description markdown={Readme} />
        </>
      ),
    },
  },
  argTypes: {
    label: {
      description: "The checkbox label",
      table: {
        type: {
          summary: 'text',
        },
      },
      control: 'text'
    },
    checked: {
      description: 'Is the checkbox checked or not',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' }
    },
    id: {
      description: "The checkbox id",
      table: {
        defaultValue: { summary: 'random uuid4 string' },
        type: {
          summary: 'text',
        },
      },
      control: 'text'
    },
    disabled: {
      description: "Is checkbox disabled or not",
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' }
    },
    onChange: {
      description: 'Callback for controlling checked state',
      table: {
        defaultValue: { summary: 'function' },
        type: {
          summary: null,
        },
      },
      action: 'change'
    }
  },
};

const Template = args => {
  const [_, updateArgs] = useArgs();

  const handleCheck = (isChecked) => {
    updateArgs({ ...args, checked: isChecked });
  }

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

export const Checkbox = Template.bind({})
Checkbox.args = {
  label: "Example checkbox",
  checked: true,
  id: "checkbox_id",
  value: "checkbox_value",
  disabled: false
};
