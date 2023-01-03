import React from 'react';
import classnames from 'classnames';

interface MdTileVerticalProps {
  heading?: string;
  description?: string;
  size?: string;
  href?: string;
  icon?: React.ReactNode;
  preventDefault?: boolean;
  onClick?(e: React.MouseEvent): void;
};

const MdTileVertical: React.FC<MdTileVerticalProps> = ({
  heading,
  description,
  size,
  href = "#",
  icon = null,
  preventDefault = false,
  onClick
}: MdTileVerticalProps) => {
  const classNames = classnames('md-tile-vertical', {
    'md-tile-vertical--small': size === 'small',
    'md-tile-vertical--large': size === 'large'
  });

  const handleClick = (e: React.MouseEvent) => {
    if (preventDefault) {
      e.preventDefault();
    }
    if (onClick) {
      onClick(e);

    }
  }

  return (
    <a
      className={classNames}
      href={href}
      onClick={handleClick}
    >
      <div className="md-tile-vertical__content">
        {icon && icon !== '' &&
          <div className="md-tile-vertical__content-icon">{icon}</div>
        }
        <div className="md-tile-vertical__content-text">
          <div className="md-tile-vertical__content-heading">{heading}</div>
          {description && description !== '' &&
            <div className="md-tile-vertical__content-description">{description}</div>
          }
        </div>
      </div>
    </a>
  );
}

export default MdTileVertical;
