import React from 'react';
import { useArgs } from '@storybook/client-api';

import MdFileUpload from '../packages/react/src/formElements/MdFileUpload';

export default {
  title: 'Form/FileUpload',
  component: MdFileUpload,
  parameters: {
    docs: {
      description: {
        component: 'A form component for multi-select.',
      },
    },
  },
  argTypes: {}
};

const Template = args => {
  /* const [_, updateArgs] = useArgs();

  const handleChange = (option: OptionType) => {
    let newSelected = args.selected;
    if (args.selected && args.selected.includes(option.value)) {
      newSelected = args.selected.filter((item: any) => {
        return item !== option.value
      })
    } else {
      newSelected.push(option.value);
    }
    updateArgs({ ...args, selected: newSelected });
  } */

  return (
    <MdFileUpload />
  );
};

export const FileUpload = Template.bind({});
