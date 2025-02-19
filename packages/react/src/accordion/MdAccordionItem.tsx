import classnames from 'classnames';
import React, { useId, useState } from 'react';
import MdIconRemove from '../icons-material/MdIconRemove';

export interface MdAccordionItemProps {
  label?: string;
  headerContent?: React.ReactNode | string;
  id?: string;
  expanded?: boolean;
  theme?: 'primary' | 'secondary' | 'add';
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  hideCloseButton?: boolean;
  closeButtonText?: string;
  rounded?: boolean;
  onToggle?(_e: React.MouseEvent): void;
}

const MdAccordionItem: React.FunctionComponent<MdAccordionItemProps> = ({
  label = '',
  headerContent,
  id,
  expanded = false,
  theme = 'primary',
  disabled = false,
  className = '',
  children,
  hideCloseButton = false,
  closeButtonText = 'Lukk',
  rounded = false,
  onToggle,
}: MdAccordionItemProps) => {
  const uuid = useId();
  const accordionId = id || uuid;
  const [isExpanded, setExpanded] = useState(false);

  React.useEffect(() => {
    setExpanded(expanded && !disabled);
  }, [expanded, disabled]);

  const accordionClassNames = classnames(
    'md-accordion-item',
    {
      'md-accordion-item--expanded': !!isExpanded && !disabled,
      'md-accordion-item--secondary': theme && theme === 'secondary',
      'md-accordion-item--add': theme && theme === 'add',
      'md-accordion-item--disabled': !!disabled,
      'md-accordion-item--rounded': !!rounded,
    },
    className,
  );

  const headerClassNames = classnames('md-accordion-item__header', {
    'md-accordion-item__header--expanded': !!isExpanded && !disabled,
  });

  const contentClassNames = classnames('md-accordion-item__content', {
    'md-accordion-item__content--expanded': !!isExpanded && !disabled,
  });

  const toggle = (e: React.MouseEvent) => {
    // Handle expand/collapse externally
    if (onToggle) {
      onToggle(e);
    } else {
      // Handle expand/collapse internally
      setExpanded(!isExpanded);
    }
  };

  return (
    <div className={accordionClassNames}>
      {/* Header */}
      <button
        id={accordionId}
        type="button"
        aria-expanded={isExpanded}
        aria-controls={`md-accordion-item_content_${accordionId}`}
        className={headerClassNames}
        disabled={!!disabled}
        onClick={(e: React.MouseEvent) => {
          return toggle(e);
        }}
      >
        <div className="md-accordion-item__header-left">
          <div className="md-accordion-item__header-icon" />
          {label && label !== '' && <div className="md-accordion-item__header-label">{label}</div>}
        </div>
        {headerContent && <div className="md-accordion-item__header-right">{headerContent}</div>}
      </button>

      {/* Content */}
      {!disabled && (
        <div
          id={`md-accordion-item_content_${accordionId}`}
          aria-labelledby={accordionId}
          className={contentClassNames}
        >
          <div className="md-accordion-item__content-inner">{children}</div>

          {!hideCloseButton && (
            <button
              type="button"
              className="md-accordion-item__close-button"
              onClick={(e: React.MouseEvent) => {
                return toggle(e);
              }}
              tabIndex={isExpanded ? 0 : -1}
            >
              <MdIconRemove aria-hidden="true" className="md-accordion-item__close-button__icon" />
              {closeButtonText}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MdAccordionItem;
