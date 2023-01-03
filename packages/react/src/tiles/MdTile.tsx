import React from 'react';
import MdChevronIcon from '../icons/MdChevronIcon';

interface MdTileProps {
  heading?: string;
  description?: string;
  href?: string;
  icon?: React.ReactNode;
  preventDefault?: boolean;
  onClick?(e: React.MouseEvent): void;
};

const MdTile: React.FC<MdTileProps> = ({
  heading,
  description,
  href = "#",
  icon = null,
  preventDefault = false,
  onClick
}: MdTileProps) => {
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
      className="md-tile"
      href={href}
      onClick={handleClick}
    >
      <div className="md-tile__content">
        {icon && icon !== '' &&
          <div className="md-tile__content-icon">{icon}</div>
        }
        <div className="md-tile__content-text">
          <div className="md-tile__content-heading">{heading}</div>
          {description && description !== '' &&
            <div className="md-tile__content-description">{description}</div>
          }
        </div>
      </div>

      <div className="md-tile__arrow">
        <MdChevronIcon height={25} />
      </div>
    </a>
  );
}

export default MdTile;
