import React from 'react';
import MdCheckbox from '../checkbox/MdCheckbox';

interface MdDataGridRowProps {
  selected: boolean;
  values: React.ReactNode[];
}

interface MdDataGridProps {
  columnHeaders: React.ReactNode[];
  rows: MdDataGridRowProps[];
}

const MdDataGrid = ({ columnHeaders, rows }: MdDataGridProps) => {
  const [allChecked, setAllChecked] = React.useState(false);
  const toggleAllChecked = () => setAllChecked(!allChecked);

  return (
    <div className="md-data-grid">
      <div className="md-data-grid__columnHeaders">
        <MdCheckbox
          value="allChecked"
          checked={allChecked}
          onChange={toggleAllChecked}
          label={null}
        />
        <div className="md-data-grid__columnHeaders__wrapper">
          {columnHeaders.map((columnHeader) => (
            <div className="md-data-grid__columnHeaders__item">
              {columnHeader}
            </div>
          ))}
        </div>
      </div>
      <div className="md-data-grid__rows">
        {rows.map((row) => (
          <div className="md-data-grid__row">
            <MdCheckbox
              value="allChecked"
              checked={allChecked}
              onChange={toggleAllChecked}
              label={null}
            />
            {row.values.map((rowValue) => (
              <div className="md-data-grid__row__value">{rowValue}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MdDataGrid;
