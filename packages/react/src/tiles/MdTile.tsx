import classnames from 'classnames';
import React from 'react';
import MdChevronIcon from '../icons/MdChevronIcon';

export interface MdTileProps {
  heading?: string;
  description?: string;
  href?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  preventDefault?: boolean;
  onClick?(_e: React.MouseEvent): void;
}

const MdTile: React.FC<MdTileProps> = ({
  heading,
  description,
  href,
  disabled = false,
  icon = null,
  preventDefault = false,
  onClick,
  ...otherProps
}: MdTileProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const classNames = classnames(
    'md-tile',
    {
      'md-tile--disabled': !!disabled,
    },
    otherProps.className,
  );

  const handleClick = (e: React.MouseEvent) => {
    if (preventDefault || disabled) {
      e.preventDefault();
    }
    if (onClick) {
      onClick(e);
    }
  };

  const content = (
    <>
      <div className="md-tile__content">
        {icon && icon !== '' && <div className="md-tile__content-icon">{icon}</div>}
        <div className="md-tile__content-text">
          <div className="md-tile__content-heading">{heading}</div>
          {description && description !== '' && <div className="md-tile__content-description">{description}</div>}
        </div>
      </div>
      <div className="md-tile__arrow">
        <MdChevronIcon height={25} />
      </div>
    </>
  );

  return href ? (
    <a {...otherProps} className={classNames} href={href || '#'} tabIndex={disabled ? -1 : 0}>
      {content}
    </a>
  ) : (
    <button
      type="button"
      {...otherProps}
      disabled={disabled}
      className={classNames}
      onClick={handleClick}
      tabIndex={disabled ? -1 : 0}
    >
      {content}
    </button>
  );
};

export default MdTile;
