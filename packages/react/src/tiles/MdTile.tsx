import classnames from 'classnames';
import React from 'react';
import MdChevronIcon from '../icons/MdChevronIcon';

export type MdTileProps = {
  heading?: string;
  description?: string;
  href?: string;
  theme?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  preventDefault?: boolean;
  onClick?(_e: React.MouseEvent): void;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const MdTile: React.FC<MdTileProps> = ({
  heading,
  description,
  href,
  theme,
  disabled = false,
  icon = null,
  fullWidth = false,
  preventDefault = false,
  onClick,
  ...otherProps
}: MdTileProps) => {
  const classNames = classnames(
    'md-tile',
    {
      'md-tile--disabled': !!disabled,
      'md-tile--secondary': theme && theme === 'secondary',
      'md-tile--full-width': fullWidth,
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
        {icon && icon !== '' && (
          <div aria-hidden="true" className="md-tile__content-icon">
            {icon}
          </div>
        )}
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
