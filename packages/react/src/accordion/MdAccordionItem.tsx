'use client';

import classnames from 'classnames';
import React, { useEffect, useId } from 'react';
import MdIconAdd from '../icons-material/MdIconAdd';
import MdIconRemove from '../icons-material/MdIconRemove';

export interface MdAccordionItemProps {
  label?: string;
  headerContent?: React.ReactNode | string;
  id?: string;
  expanded?: boolean;
  theme?: 'primary' | 'secondary' | 'add';
  children?: React.ReactNode;
  className?: string;
  hideCloseButton?: boolean;
  closeButtonText?: string;
  rounded?: boolean;
  disabled?: boolean;
  /**
   * v6.0.0: Added `name` prop to allow grouping of accordion items.
   * This is useful for accessibility and when you want to manage multiple accordion items together.
   */
  name?: string;
  /**
   * v6.0.0: removed `onToggle` prop as it was no longer needed.
   */
}

export const MdAccordionItem: React.FunctionComponent<MdAccordionItemProps> = ({
  label = '',
  headerContent,
  id,
  expanded = false,
  theme = 'primary',
  className = '',
  children,
  hideCloseButton = false,
  closeButtonText = 'Lukk',
  rounded = false,
  disabled = false,
  name,
}: MdAccordionItemProps) => {
  const uuid = useId();
  const accordionId = id || uuid;

  useEffect(() => {
    const accordionItem = document.getElementById(accordionId);
    if (accordionItem) {
      if (expanded) {
        accordionItem.setAttribute('open', '');
      } else {
        accordionItem.removeAttribute('open');
      }
    }
  }, [expanded, accordionId]);

  useEffect(() => {
    const disableClick = (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
    };
    const disableKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        event.stopPropagation();
      }
    };
    const accordionItem = document.getElementById(accordionId);
    if (accordionItem) {
      const summaryElement = accordionItem.querySelector('summary');
      if (summaryElement && disabled) {
        summaryElement.addEventListener('click', disableClick);
        summaryElement.addEventListener('keydown', disableKeyDown);
      }
    }
    // Cleanup event listeners on unmount or when disabled changes
    return () => {
      if (accordionItem) {
        const summaryElement = accordionItem.querySelector('summary');
        if (summaryElement) {
          summaryElement.removeEventListener('click', disableClick);
          summaryElement.removeEventListener('keydown', disableKeyDown);
        }
      }
    };
  }, [disabled, accordionId]);

  const handleCloseButton = () => {
    const accordionItem = document.getElementById(accordionId);
    accordionItem?.removeAttribute('open');
  };

  const accordionClassNames = classnames(
    'md-accordion-item',
    {
      'md-accordion-item--secondary': theme && theme === 'secondary',
      'md-accordion-item--add': theme && theme === 'add',
      'md-accordion-item--rounded': !!rounded,
      'md-accordion-item--disabled': !!disabled,
    },
    className,
  );

  return (
    <details
      className={accordionClassNames}
      id={accordionId}
      name={name}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
    >
      {/* Header */}
      <summary className="md-accordion-item__header">
        <div className="md-accordion-item__header-left">
          <div className="md-accordion-item__header-icon" aria-hidden="true">
            <MdIconAdd className="md-accordion-item__header-icon__open" />
            <MdIconRemove className="md-accordion-item__header-icon__close" />
          </div>
          {label && label !== '' && <div className="md-accordion-item__header-label">{label}</div>}
        </div>
        {headerContent && <div className="md-accordion-item__header-right">{headerContent}</div>}
      </summary>

      {/* Content */}
      <div id={`md-accordion-item_content_${accordionId}`} className="md-accordion-item__content">
        <div className="md-accordion-item__content-inner">{children}</div>

        {!hideCloseButton && !disabled && (
          <button
            type="button"
            className="md-accordion-item__close-button"
            onClick={() => {
              handleCloseButton();
            }}
          >
            <MdIconRemove aria-hidden="true" className="md-accordion-item__close-button__icon" />
            {closeButtonText}
          </button>
        )}
      </div>
    </details>
  );
};

export default MdAccordionItem;
