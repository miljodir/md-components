import React, { HTMLAttributes } from 'react';

interface MdDataGridRightAlignedContentProps
  extends HTMLAttributes<HTMLDivElement> {}

const MdDataGridRightAlignedContent = ({
  children,
}: MdDataGridRightAlignedContentProps) => {
  return (
    <div className="md-data-grid__right">
      <div className="md-data-grid__right__content">{children}</div>
    </div>
  );
};

export default MdDataGridRightAlignedContent;
