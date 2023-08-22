import React, { useState } from 'react';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import MdMinusIcon from '../icons/MdMinusIcon';

export interface MdAccordionItemProps {
  label?: string;
  headerContent?: React.ReactNode | string;
  id?: string | number | null | undefined;
  expanded?: boolean;
  theme?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  hideCloseButton?: boolean;
  rounded?: boolean;
  onToggle?(e: React.MouseEvent): void;
};

const MdAccordionItem: React.FunctionComponent<MdAccordionItemProps> = ({
  label = '',
  headerContent,
  id = null,
  expanded = false,
  theme,
  disabled = false,
  className = '',
  children,
  hideCloseButton = false,
  rounded = false,
  onToggle
}: MdAccordionItemProps) => {
  const accordionId = id || uuidv4();
  const [isExpanded, setExpanded] = useState(false);

  React.useEffect(() => {
    setExpanded(expanded && !disabled);
  }, [expanded, disabled]);

  const accordionClassNames = classnames('md-accordion-item', {
    'md-accordion-item--expanded': !!isExpanded && !disabled,
    'md-accordion-item--secondary': theme && theme === 'secondary',
    'md-accordion-item--add': theme && theme === 'add',
    'md-accordion-item--disabled': !!disabled,
    'md-accordion-item--rounded': !!rounded
  }, className);

  const headerClassNames = classnames('md-accordion-item__header', {
    'md-accordion-item__header--expanded': !!isExpanded && !disabled
  });

  const contentClassNames = classnames('md-accordion-item__content', {
    'md-accordion-item__content--expanded': !!isExpanded && !disabled
  });

  const toggle = (e: React.MouseEvent) => {
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
        type="button"
        className={headerClassNames}
        disabled={!!disabled}
        onClick={(e: React.MouseEvent) => toggle(e)}
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

          {!hideCloseButton &&
            <button
              type="button"
              className="md-accordion-item__close-button"
              onClick={(e: React.MouseEvent) => toggle(e)}
              tabIndex={isExpanded ? 0 : -1}
            >
              <MdMinusIcon className="md-accordion-item__close-button__icon" />
              <div>Lukk</div>
            </button>
          }
        </div>
      }
    </div>
  );
};

export default MdAccordionItem;
