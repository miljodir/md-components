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
  name?: string; // Used to group details elements in the DOM
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
  name,
}: MdAccordionItemProps) => {
  const uuid = useId();
  const accordionId = id || uuid;
  const accordionDetailsId = `md-accordion-item-details_${accordionId}`;

  useEffect(() => {
    const accordionItem = document.getElementById(accordionDetailsId);
    if (accordionItem) {
      if (expanded) {
        accordionItem.setAttribute('open', '');
      } else {
        accordionItem.removeAttribute('open');
      }
    }
  }, [expanded, accordionDetailsId]);

  const handleCloseButton = () => {
    const accordionItem = document.getElementById(accordionDetailsId);
    accordionItem?.removeAttribute('open');
  };

  const accordionClassNames = classnames(
    'md-accordion-item',
    {
      'md-accordion-item--secondary': theme && theme === 'secondary',
      'md-accordion-item--add': theme && theme === 'add',
      'md-accordion-item--rounded': !!rounded,
    },
    className,
  );

  return (
    <details className={accordionClassNames} id={accordionDetailsId} name={name}>
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

        {!hideCloseButton && (
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
