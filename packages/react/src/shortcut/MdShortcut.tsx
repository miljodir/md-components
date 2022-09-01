import React from 'react';
import ChevronIcon from '../icons/ChevronIcon';

interface MdShortcutProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
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
        <ChevronIcon color="#222" />
      </div>
    </a>
  );
};

export default MdShortcut;
