import React, { useState, ClickEvent } from 'react';
import classnames from 'classnames';

interface MdAccordionItemProps {
  label?: string;
  headerContent?: React.ReactNode;
  id?: string | number;
  expanded?: boolean;
  theme?: string;
  children?: React.ReactNode;
  className?: string;
  onToggle?(id: string | number): string | number;
};

const MdAccordionItem: React.FunctionComponent<MdAccordionItemProps> = ({
  label = '',
  headerContent,
  expanded = false,
  theme,
  className = '',
  children
}: MdAccordionItemProps) => {
  const [isExpanded, setExpanded] = useState(expanded);

  const accordionClassNames = classnames('md-accordion-item', {
    'md-accordion-item--expanded': !!expanded
  });

  const headerClassNames = classnames('md-accordion-item__header', {
    'md-accordion-item__header--expanded': !!expanded
  });

  const contentClassNames = classnames('md-accordion-item__content', {
    'md-accordion-item__content--expanded': !!expanded
  });

  return (
    <div className={accordionClassNames}>
      <div className={headerClassNames}>
      </div>

      <div className={contentClassNames}>
      </div>
    </div>
  );
};

export default MdAccordionItem;
