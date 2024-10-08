import classnames from 'classnames';
import React from 'react';

export type MdTileVerticalProps = {
  heading?: string;
  description?: string;
  /**
   * v2.0.0: Replaces previous 'size'-prop for controlling width of component from medium to either large or small.
   */
  mode?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  href?: string;
  theme?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  preventDefault?: boolean;
  onClick?(_e: React.MouseEvent): void;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const MdTileVertical: React.FC<MdTileVerticalProps> = ({
  heading,
  description,
  mode = 'medium',
  disabled = false,
  href,
  theme = 'primary',
  icon = null,
  preventDefault = false,
  onClick,
  ...otherProps
}: MdTileVerticalProps) => {
  const classNames = classnames(
    'md-tile-vertical',
    {
      'md-tile-vertical--disabled': !!disabled,
      'md-tile-vertical--small': mode === 'small',
      'md-tile-vertical--secondary': theme && theme === 'secondary',
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
      {icon && icon !== '' && (
        <div aria-hidden="true" className="md-tile-vertical__content-icon">
          {icon}
        </div>
      )}
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
