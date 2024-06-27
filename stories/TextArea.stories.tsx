import { Title, Subtitle, Description, Markdown, Controls, Primary } from '@storybook/addon-docs';
import { useArgs } from '@storybook/client-api';
import React from 'react';
import Readme from '../packages/css/src/formElements/textarea/README.md';
import MdTextArea from '../packages/react/src/formElements/MdTextArea';
import type { MdTextAreaProps } from '../packages/react/src/formElements/MdTextArea';
import type { ChangeEvent } from 'react';

export default {
  title: 'Form/TextArea',
  component: MdTextArea,
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
          "Text area used in forms. In addition to the properties presented here, the component accepts all standard attributes of a HTML Textarea element.<br/><br/>`import { MdTextArea } from '@miljodirektoratet/md-react'`",
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string' },
      description: 'The label for the input field.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    value: {
      type: { name: 'string' },
      description: 'Inputs value',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    rows: {
      type: { name: 'number' },
      description: 'The number of rows in the text area',
      table: {
        defaultValue: { summary: '10' },
        type: {
          summary: 'number',
        },
      },
      control: { type: 'number' },
    },
    placeholder: {
      type: { name: 'string' },
      description: 'Inputs placeholder value when not no value is given',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    disabled: {
      description: 'Is the input field disabled or not',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    readOnly: {
      description: 'Is the input field readonly or not',
      table: {
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    error: {
      description: 'Has validation for input field failed?',
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
      description: 'Optional text to display if error. Will only display if error is `true`',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    helpText: {
      type: { name: 'string' },
      description: 'Optional helper text, will also add a help icon which toggles help text box.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    outerWrapperClass: {
      type: { name: 'string' },
      description: 'Class names to apply to the inputs outer most wrapper.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    id: {
      type: { name: 'string' },
      description: 'Assign id to input field',
      table: {
        defaultValue: { summary: 'random uuidv4 string' },
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
  },
};

const Template = (args: MdTextAreaProps) => {
  const [, updateArgs] = useArgs();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateArgs({ ...args, value: e?.target?.value });
  };

  return <MdTextArea {...args} onChange={handleChange} />;
};

export const TextArea = Template.bind({});
TextArea.args = {
  value: '',
  label: 'Label',
  disabled: false,
  readOnly: false,
  error: false,
  errorText: '',
  helpText: '',
  outerWrapperClass: '',
  placeholder: 'Placeholder...',
  id: '',
  rows: 10,
};
