import React, { useState, ClickEvent } from 'react';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import PlusIcon from '../icons/PlusIcon';
import MinusIcon from '../icons/MinusIcon';

interface MdAccordionItemProps {
  label?: string;
  headerContent?: React.ReactNode;
  id?: string | number;
  expanded?: boolean;
  theme?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  onToggle?(e: React.ClickEvent<HTMLInputElement>): void;
};

const MdAccordionItem: React.FunctionComponent<MdAccordionItemProps> = ({
  label = '',
  headerContent,
  id,
  expanded = true,
  theme,
  disabled = false,
  className = '',
  children
}: MdAccordionItemProps) => {
  const accordionId = React.useMemo(() => id || uuidv4(), []);
  const [isExpanded, setExpanded] = useState(expanded && !disabled);

  const accordionClassNames = classnames('md-accordion-item', {
    'md-accordion-item--expanded': !!isExpanded && !disabled,
    'md-accordion-item--secondary': theme && theme === 'secondary',
    'md-accordion-item--disabled': !!disabled
  });

  const headerClassNames = classnames('md-accordion-item__header', {
    'md-accordion-item__header--expanded': !!isExpanded
  });

  const contentClassNames = classnames('md-accordion-item__content', {
    'md-accordion-item__content--expanded': !!isExpanded
  });

  const toggle = () => {

  }

  return (
    <div
      className={accordionClassNames}
    >
      {/* Header */}
      <button
        id={accordionId}
        className={headerClassNames}
        disabled={!!disabled}
        onClick={() => setExpanded(!isExpanded)}
      >
        <div className="md-accordion-item__header-left">
          <div className="md-accordion-item__header-icon"></div>
          {label && label !== '' &&
            <div className="md-accordion-item__header-label">{label}</div>
          }
        </div>
        <div className="md-accordion-item__header-right"></div>
      </button>

      {/* Content */}
      {!disabled &&
        <div className={contentClassNames}>
          CONTENTOENTOENTO
        </div>
      }
    </div>
  );
};

export default MdAccordionItem;
