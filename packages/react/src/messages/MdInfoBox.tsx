import React from "react";
import MdInfoIcon from "../icons/MdInfoIcon";

interface MdInfoBoxProps {
  label: string;
  hideIcon?: boolean;
};

const MdInfoBox: React.FC<MdInfoBoxProps> = ({
  label,
  hideIcon = false
}: MdInfoBoxProps) => {
  return (
    <div className="md-info-box">
      {!hideIcon &&
        <MdInfoIcon width="20" height="20" />
      }
      {label}
    </div>
  );
}

export default MdInfoBox;
