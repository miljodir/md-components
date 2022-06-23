import React from 'react';
import MdCheckbox from '../checkbox/MdCheckbox';

interface MdDataGridProps {
  columnHeaders: React.ReactNode[];
  rows: React.ReactNode[];
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
        />
        {columnHeaders.map((columnHeader) => (
          <div className="md-data-grid__columnHeaders__item">
            {columnHeader}
          </div>
        ))}
      </div>
      <div className="md-data-grid__rows">
        {rows.map((row) => (
          <div className="md-data-grid__rows__item">{row}</div>
        ))}
      </div>
    </div>
  );
};

export default MdDataGrid;
