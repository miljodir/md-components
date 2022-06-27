import React from 'react';
import MdCheckbox, { MdCheckboxProps } from '../checkbox/MdCheckbox';
import { Collapse } from 'react-collapse';

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
      <Collapse isOpened={isExpanded}>
        {expandedContentRenderer && expandedContentRenderer()}
      </Collapse>
    </div>
  );
};

export default MdDataGridRow;
