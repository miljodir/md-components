import React from 'react';
import MdCheckbox from '../formElements/MdCheckbox';
import type { MdCheckboxProps } from '../formElements/MdCheckbox';

interface MdDataGridRowProps {
  checkboxProps: MdCheckboxProps;
  children: React.ReactNode | React.ReactNode[];
  isExpanded?: boolean;
  expandedContentRenderer?: () => React.ReactNode;
}

const MdDataGridRow: React.FunctionComponent<MdDataGridRowProps> = ({
  checkboxProps,
  children,
  isExpanded,
  expandedContentRenderer,
}: MdDataGridRowProps) => {
  return (
    <div className="md-data-grid__row">
      <div className="md-data-grid__row__flexWrapper">
        <MdCheckbox {...checkboxProps} />
        <div className="md-data-grid__row__values">{children}</div>
      </div>
      {isExpanded && (
        <div className="md-data-grid__row__expandedContent">{expandedContentRenderer && expandedContentRenderer()}</div>
      )}
    </div>
  );
};

export default MdDataGridRow;
