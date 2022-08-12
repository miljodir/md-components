import React from 'react';
import MdCheckbox, { MdCheckboxProps } from '../checkbox/MdCheckbox';

interface MdChecklistProps extends MdCheckboxProps {
  children: React.ReactNode[] | React.ReactElement[];
  defaultChecked?: boolean;
}

const MdChecklist = ({
  children,
  defaultChecked,
  ...checkboxProps
}: MdChecklistProps) => {
  const defaultValue = defaultChecked !== undefined ? defaultChecked : false;
  const [isChecked, setIsChecked] = React.useState(defaultValue);
  return (
    <div className="md-checklist">
      <MdCheckbox
        {...checkboxProps}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      {isChecked && (
        <div className="md-checklist__nested">
          {children.map((child, i) =>
            React.cloneElement(child, {
              checkedByDefault: isChecked,
              key: `checkbox${i}`,
            })
          )}
        </div>
      )}
    </div>
  );
};

export default MdChecklist;
