import React from 'react';
import MdChevronIcon from '../icons/MdChevronIcon';

interface MdShortcutProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children?: any;
}

const MdShortcut: React.FunctionComponent<MdShortcutProps> = ({
  to,
  children,
  ...otherProps
}: MdShortcutProps) => {
  return (
    <a className="md-shortcut" {...otherProps} href={to}>
      <div className="content">{children}</div>
      <div className="icon">
        <MdChevronIcon color="#222" />
      </div>
    </a>
  );
};

export default MdShortcut;
