import React from 'react';

import MdChecklist from '../packages/react/src/checklist/MdChecklist';
import MdCheckbox from '../packages/react/src/checkbox/MdCheckbox';

export default {
  title: 'Components/Checklist',
  component: MdChecklist,
};

export const Primary = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [secondIsChecked, setSecondIsChecked] = React.useState(false);
  return (
    <MdChecklist
      label="Example Checkbox"
      value="test"
      onChange={() => setIsChecked(!isChecked)}
      checked={isChecked}
    >
      <MdCheckbox value="nested1" label="Nested checkbox 1" />
      <MdCheckbox value="nested2" label="Nested checkbox 2" checked />
      <MdCheckbox value="nested3" label="Nested checkbox 3" />
      <MdChecklist
        label="Another level"
        value="test"
        onChange={() => setSecondIsChecked(!secondIsChecked)}
        checked={secondIsChecked}
      >
        <MdCheckbox value="nested2" label="Nested checkbox 4" />
        <MdCheckbox value="nested3" label="Nested checkbox 5" />
      </MdChecklist>
    </MdChecklist>
  );
};
