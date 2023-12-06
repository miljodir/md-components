import React from 'react';
import type { HTMLAttributes } from 'react';

interface MdDataGridRightAlignedContentProps extends HTMLAttributes<HTMLDivElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
}

const MdDataGridRightAlignedContent: React.FunctionComponent<MdDataGridRightAlignedContentProps> = ({
  children,
}: MdDataGridRightAlignedContentProps) => {
  return (
    <div className="md-data-grid__right">
      <div className="md-data-grid__right__content">{children}</div>
    </div>
  );
};

export default MdDataGridRightAlignedContent;
