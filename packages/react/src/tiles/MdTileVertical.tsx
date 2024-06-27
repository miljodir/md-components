import classnames from 'classnames';
import React from 'react';

export interface MdTileVerticalProps {
  heading?: string;
  description?: string;
  mode?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  href?: string;
  icon?: React.ReactNode;
  preventDefault?: boolean;
  onClick?(_e: React.MouseEvent): void;
}

const MdTileVertical: React.FC<MdTileVerticalProps> = ({
  heading,
  description,
  mode = 'medium',
  disabled = false,
  href,
  icon = null,
  preventDefault = false,
  onClick,
  ...otherProps
}: MdTileVerticalProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const classNames = classnames(
    'md-tile-vertical',
    {
      'md-tile-vertical--disabled': !!disabled,
      'md-tile-vertical--small': mode === 'small',
      'md-tile-vertical--large': mode === 'large',
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
    <div className="md-tile-vertical__content">
      {icon && icon !== '' && <div className="md-tile-vertical__content-icon">{icon}</div>}
      <div className="md-tile-vertical__content-text">
        <div className="md-tile-vertical__content-heading">{heading}</div>
        {description && description !== '' && (
          <div className="md-tile-vertical__content-description">{description}</div>
        )}
      </div>
    </div>
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

export default MdTileVertical;
