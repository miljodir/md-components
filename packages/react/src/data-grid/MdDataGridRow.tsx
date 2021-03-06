import React from 'react';
import MdCheckbox, { MdCheckboxProps } from '../checkbox/MdCheckbox';

interface MdDataGridRowProps {
  checkboxProps: MdCheckboxProps;
  children: React.ReactNode | React.ReactNode[];
  isExpanded?: boolean;
  expandedContentRenderer?: () => React.ReactNode;
}

const MdDataGridRow = ({
  checkboxProps,
  children,
  isExpanded,
  expandedContentRenderer,
}: MdDataGridRowProps) => {
  return (
    <div className="md-data-grid__row">
      <div className="md-data-grid__row__flexWrapper">
        <MdCheckbox label={null} {...checkboxProps} />
        <div className="md-data-grid__row__values">{children}</div>
      </div>
      {isExpanded && (
        <div className="md-data-grid__row__expandedContent">
          {expandedContentRenderer && expandedContentRenderer()}
        </div>
      )}
    </div>
  );
};

export default MdDataGridRow;
