import React from "react";
import classnames from 'classnames';
import MdInfoIcon from "../icons/MdInfoIcon";

interface MdInfoBoxProps {
  label: string;
  hideIcon?: boolean;
  fullWidth?: boolean;
};

const MdInfoBox: React.FC<MdInfoBoxProps> = ({
  label,
  hideIcon = false,
  fullWidth = false
}: MdInfoBoxProps) => {
  const classNames = classnames('md-info-box', {
    'md-info-box--fullWidth': !!fullWidth
  });

  return (
    <div className={classNames}>
      {!hideIcon &&
        <MdInfoIcon width="20" height="20" />
      }
      {label}
    </div>
  );
}

export default MdInfoBox;
