'use client';

import classnames from 'classnames';
import React from 'react';
import MdIconChevronBackward from '../icons-material/MdIconChevronBackward';
import MdIconChevronForward from '../icons-material/MdIconChevronForward';

const MAX_VISIBLE = 5;

interface Labels {
  previous?: string;
  next?: string;
}

export interface MdPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange?: (page: number) => void;
  labels?: Labels;
  compact?: boolean;
  asChild?: boolean;
  renderLink?: (page: number, children: React.ReactNode) => React.ReactElement;
  className?: string;
}

export const MdPagination: React.FunctionComponent<MdPaginationProps> = ({
  totalPages,
  currentPage: currentPageProp,
  onPageChange,
  labels = {},
  compact = false,
  asChild = false,
  renderLink,
  className,
}: MdPaginationProps) => {
  const defaultLabels: Required<Labels> = {
    previous: 'Forrige',
    next: 'Neste',
  };
  const mergedLabels: Required<Labels> = { ...defaultLabels, ...labels };

  const currentPage = Math.max(1, Math.min(currentPageProp, totalPages));

  const classNames = classnames(
    'md-pagination',
    {
      'md-pagination--compact': compact,
    },
    className,
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange?.(page);
  };

  const renderPageButton = (page: number, isActive: boolean) => {
    const pageClassName = classnames('md-pagination__page', {
      'md-pagination__page--active': isActive,
    });

    const content = page;

    if (isActive) {
      return (
        <span key={page} className={pageClassName} aria-current="page">
          {content}
        </span>
      );
    }

    if (asChild && renderLink) {
      const linkElement = renderLink(page, content);
      return React.cloneElement(linkElement, {
        key: page,
        className: classnames(pageClassName, linkElement.props?.className),
        'aria-label': `Side ${page}`,
      });
    }

    return (
      <button
        key={page}
        type="button"
        className={pageClassName}
        onClick={() => {
          return handlePageChange(page);
        }}
        aria-label={`Side ${page}`}
      >
        {content}
      </button>
    );
  };

  const renderNavButton = (direction: 'previous' | 'next', disabled: boolean, targetPage: number) => {
    const isPrevious = direction === 'previous';
    const label = isPrevious ? mergedLabels.previous : mergedLabels.next;
    const Icon = isPrevious ? MdIconChevronBackward : MdIconChevronForward;

    const content = (
      <>
        {isPrevious && (
          <span className="md-pagination__nav-icon">
            <Icon />
          </span>
        )}
        <span className="md-pagination__nav-label">{label}</span>
        {!isPrevious && (
          <span className="md-pagination__nav-icon">
            <Icon />
          </span>
        )}
      </>
    );

    if (disabled) {
      return (
        <span className="md-pagination__nav" aria-disabled="true" aria-label={label}>
          {content}
        </span>
      );
    }

    if (asChild && renderLink) {
      const linkElement = renderLink(targetPage, content);
      return React.cloneElement(linkElement, {
        className: classnames('md-pagination__nav', linkElement.props?.className),
        'aria-label': label,
      });
    }

    return (
      <button
        type="button"
        className="md-pagination__nav"
        onClick={() => {
          return handlePageChange(targetPage);
        }}
        aria-label={label}
      >
        {content}
      </button>
    );
  };

  if (totalPages <= 1) return null;

  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <div className={classNames}>
      {renderNavButton('previous', isPreviousDisabled, currentPage - 1)}

      <div className="md-pagination__pages">
        {!compact && (
          <div className="md-pagination__pages-desktop">
            {getPageNumbers(currentPage, totalPages).map((page, index) => {
              if (page === 'ellipsis') {
                return (
                  <span key={`ellipsis-${index}`} className="md-pagination__ellipsis">
                    ...
                  </span>
                );
              }

              return renderPageButton(page, page === currentPage);
            })}
          </div>
        )}

        <div className={classnames('md-pagination__pages-compact', { 'md-pagination__pages-compact--force': compact })}>
          {getCompactPageNumbers(currentPage, totalPages).map(page => {
            return renderPageButton(page, page === currentPage);
          })}
        </div>
      </div>

      {renderNavButton('next', isNextDisabled, currentPage + 1)}
    </div>
  );
};

export default MdPagination;

const getPageNumbers = (currentPage: number, totalPages: number): (number | 'ellipsis')[] => {
  const pages: (number | 'ellipsis')[] = [];

  if (totalPages <= MAX_VISIBLE + 2) {
    return Array.from({ length: totalPages }, (_, i) => {
      return i + 1;
    });
  }

  pages.push(1);

  if (currentPage <= 3) {
    for (let i = 2; i <= MAX_VISIBLE; i++) pages.push(i);
    pages.push('ellipsis', totalPages);
    return pages;
  }

  if (currentPage >= totalPages - 2) {
    pages.push('ellipsis');
    for (let i = totalPages - MAX_VISIBLE + 1; i <= totalPages; i++) pages.push(i);
    return pages;
  }

  pages.push('ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis', totalPages);
  return pages;
};

const getCompactPageNumbers = (currentPage: number, totalPages: number): number[] => {
  if (totalPages <= 3) {
    return Array.from({ length: totalPages }, (_, i) => {
      return i + 1;
    });
  }

  if (currentPage === 1) {
    return [1, 2, 3];
  }

  if (currentPage === totalPages) {
    return [totalPages - 2, totalPages - 1, totalPages];
  }

  return [currentPage - 1, currentPage, currentPage + 1];
};
