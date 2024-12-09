import React from 'react';
import { Controls, Description, Markdown, Primary, Subtitle, Title } from '@storybook/addon-docs';
import { useArgs } from '@storybook/preview-api';
import MdComboBox from '../packages/react/src/formElements/MdComboBox';
import MdZoomIcon from '../packages/react/src/icons/MdZoomIcon';
import type { MdComboBoxOption, MdComboBoxProps } from '../packages/react/src/formElements/MdComboBox';

export default {
  title: 'Form/ComboBox',
  component: MdComboBox,
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
            {/* <Markdown>{Readme.toString()}</Markdown> */}
          </>
        );
      },
      description: {
        component:
          'A form component for single combobox. In addition to the properties presented here, the component accepts all standard attributes of a HTML Input element.<br/><br/>`import { MdComboBox } from "@miljodirektoratet/md-react"`',
      },
    },
  },
};

const Template = (args: MdComboBoxProps) => {
  const [, updateArgs] = useArgs();

  const handleChange = (option: MdComboBoxOption) => {
    const newValue = args.value === option?.value ? '' : option?.value;
    // updateArgs({ ...args, value: newValue });
  };

  return (
    <div style={{ minHeight: '300px' }}>
      <MdComboBox {...args} onSelectOption={handleChange} />
    </div>
  );
};

export const ComboBox = Template.bind({});
ComboBox.args = {
  label: 'Label',
  prefixIcon: <MdZoomIcon />,
  selectionMode: 'multiple',
  mode: 'large',
  selected: [1, 4],
  options: [
    { id: 1, value: 'Adobe Photoshop' },
    { id: 2, value: 'Adobe XD' },
    { id: 3, value: 'Documents' },
    { id: 4, value: 'Adobe InDesign' },
    { id: 5, value: 'Utilities' },
    { id: 6, value: 'Adobe AfterEffects' },
  ],
};
