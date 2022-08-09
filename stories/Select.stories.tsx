import React from 'react';

import MdSelect from '../packages/react/src/select/MdSelect';

export default {
  title: 'Components/Select',
  component: MdSelect,
};

export const Primary = () => {
  const [value, setValue] = React.useState('test2');
  return (
    <MdSelect
      name="test"
      label="Example select"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      options={[
        { value: 'test1', text: 'Test 1' },
        { value: 'test2', text: 'Test 2' },
      ]}
    />
  );
};
