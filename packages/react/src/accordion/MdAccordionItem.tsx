import React, { useState, ClickEvent } from 'react';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import MinusIcon from '../icons/MinusIcon';

interface MdAccordionItemProps {
  label?: string;
  headerContent?: React.ReactNode | string;
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
  expanded = false,
  theme,
  disabled = false,
  className = '',
  children,
  onToggle
}: MdAccordionItemProps) => {
  const accordionId = React.useMemo(() => id || uuidv4(), []);
  const [isExpanded, setExpanded] = useState(null);

  React.useEffect(() => {
    setExpanded(expanded && !disabled);
  }, [expanded, disabled]);

  const accordionClassNames = classnames('md-accordion-item', {
    'md-accordion-item--expanded': !!isExpanded && !disabled,
    'md-accordion-item--secondary': theme && theme === 'secondary',
    'md-accordion-item--disabled': !!disabled
  }, className);

  const headerClassNames = classnames('md-accordion-item__header', {
    'md-accordion-item__header--expanded': !!isExpanded && !disabled
  });

  const contentClassNames = classnames('md-accordion-item__content', {
    'md-accordion-item__content--expanded': !!isExpanded && !disabled
  });

  const toggle = (e: React.ClickEvent) => {
    // handle expand/collapse externally
    if (onToggle) {
      onToggle(e);
    } else {
      // Handle expand/collapse internally
      setExpanded(!isExpanded)
    }
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
        onClick={(e: React.ClickEvent) => toggle(e)}
      >
        <div className="md-accordion-item__header-left">
          <div className="md-accordion-item__header-icon"></div>
          {label && label !== '' &&
            <div className="md-accordion-item__header-label">{label}</div>
          }
        </div>
        {headerContent &&
          <div className="md-accordion-item__header-right">
            {headerContent}
          </div>
        }
      </button>

      {/* Content */}
      {!disabled &&
        <div className={contentClassNames}>
          <div className="md-accordion-item__content-inner">
            {children}
          </div>

          <button
            className="md-accordion-item__close-button"
            onClick={(e: React.ClickEvent) => toggle(e)}
            tabIndex={isExpanded ? '0' : '-1'}
          >
            <MinusIcon className="md-accordion-item__close-button__icon" />
            <div>Lukk</div>
          </button>
        </div>
      }
    </div>
  );
};

export default MdAccordionItem;
