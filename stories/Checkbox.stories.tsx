import React from 'react';

import MdCheckbox from '../packages/react/src/checkbox/MdCheckbox';

export default {
  title: 'Components/Checkbox',
  component: MdCheckbox,
};

export const Primary = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <MdCheckbox
      label="Example Checkbox"
      value="test"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    />
  );
};
