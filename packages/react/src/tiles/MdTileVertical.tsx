import classnames from 'classnames';
import React from 'react';

export interface MdTileVerticalProps {
  heading?: string;
  description?: string;
  size?: string;
  disabled?: boolean;
  href?: string;
  icon?: React.ReactNode;
  preventDefault?: boolean;
  onClick?(_e: React.MouseEvent): void;
}

const MdTileVertical: React.FC<MdTileVerticalProps> = ({
  heading,
  description,
  size,
  disabled = false,
  href,
  icon = null,
  preventDefault = false,
  onClick,
}: MdTileVerticalProps) => {
  const classNames = classnames('md-tile-vertical', {
    'md-tile-vertical--disabled': !!disabled,
    'md-tile-vertical--small': size === 'small',
    'md-tile-vertical--large': size === 'large',
  });

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
    <a className={classNames} href={href || '#'} tabIndex={disabled ? -1 : 0}>
      {content}
    </a>
  ) : (
    <button disabled={disabled} type="button" className={classNames} onClick={handleClick} tabIndex={disabled ? -1 : 0}>
      {content}
    </button>
  );
};

export default MdTileVertical;
