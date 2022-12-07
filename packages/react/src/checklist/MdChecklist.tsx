import React from 'react';
import MdCheckbox from './../checkbox/MdCheckbox';

interface MdChecklistProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  children: React.ReactNode[] | React.ReactElement[];
  checked: boolean;
  disabled: boolean;
}

const MdChecklist: React.FunctionComponent<MdChecklistProps> = ({
  children,
  label,
  checked,
  disabled,
  ...checkboxProps
}: MdChecklistProps) => {
  const isChecked = checked;
  return (
    <div className="md-checklist">
      <MdCheckbox label={label} disabled={disabled} {...checkboxProps} />
      {isChecked && (
        <div className="md-checklist__nested">
          {children.map((child, i) =>
            React.cloneElement(child, {
              key: `checkbox${i}`,
              disabled: disabled
            })
          )}
        </div>
      )}
    </div>
  );
};

export default MdChecklist;
