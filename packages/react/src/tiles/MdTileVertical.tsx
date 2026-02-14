'use client';

import classnames from 'classnames';
import React from 'react';
import MdLoadingSpinner from '../loadingSpinner/MdLoadingSpinner';

export type MdTileVerticalProps = {
  heading?: string;
  description?: string;
  mode?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  href?: string;
  theme?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  preventDefault?: boolean;
  loading?: boolean;
  asChild?: boolean;
  asChildContent?: React.ReactNode;
  onClick?(_e: React.MouseEvent): void;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MdTileVertical: React.FC<MdTileVerticalProps> = ({
  heading,
  description,
  mode = 'medium',
  disabled = false,
  href,
  theme = 'primary',
  icon = null,
  preventDefault = false,
  loading = false,
  asChild,
  asChildContent,
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
      {(icon || loading) && (
        <div aria-hidden="true" className="md-tile-vertical__content-icon">
          {loading ? <MdLoadingSpinner /> : icon}
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

  if (asChild && asChildContent) {
    return React.cloneElement(
      asChildContent as React.ReactElement,
      {
        ...otherProps,
        className: classNames,
      },
      content,
    );
  }

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
