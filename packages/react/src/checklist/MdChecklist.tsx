import React from 'react';
import MdCheckbox from './../checkbox/MdCheckbox';

interface MdChecklistProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  children: React.ReactNode[] | React.ReactElement[];
}

const MdChecklist = ({
  children,
  label,
  ...checkboxProps
}: MdChecklistProps) => {
  const isChecked = checkboxProps.checked;
  return (
    <div className="md-checklist">
      <MdCheckbox label={label} {...checkboxProps} />
      {isChecked && (
        <div className="md-checklist__nested">
          {children.map((child, i) =>
            React.cloneElement(child, {
              key: `checkbox${i}`,
            })
          )}
        </div>
      )}
    </div>
  );
};

export default MdChecklist;
