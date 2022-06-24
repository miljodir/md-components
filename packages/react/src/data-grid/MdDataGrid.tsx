import React from 'react';
import MdCheckbox from '../checkbox/MdCheckbox';

interface MdDataGridRowProps {
  selected: boolean;
  values: React.ReactNode[];
}

interface MdDataGridProps {
  rows: MdDataGridRowProps[];
  children: React.ReactNode[] | React.ReactNode;
}

const MdDataGrid = ({ children, rows }: MdDataGridProps) => {
  const [allChecked, setAllChecked] = React.useState(false);
  const toggleAllChecked = () => setAllChecked(!allChecked);

  return (
    <div className="md-data-grid">
      {children}
      <div className="md-data-grid__rows">
        {rows.map((row) => (
          <div className="md-data-grid__row">
            <MdCheckbox
              value="allChecked"
              checked={allChecked}
              onChange={toggleAllChecked}
              label={null}
            />
            <div className="md-data-grid__row__wrapper">
              {row.values.map((rowValue) => (
                <div className="md-data-grid__row__value">{rowValue}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MdDataGrid;
