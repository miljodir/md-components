/* eslint-disable @typescript-eslint/no-explicit-any */
import classnames from 'classnames';
import React, { useEffect, useRef } from 'react';

import MdXIcon from '../icons/MdXIcon';
import MdClickOutsideWrapper from '../utils/MdClickOutsideWrapper';

const focusableHtmlElements =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]';

export interface MdModalProps {
  children: any;
  heading?: string;
  headingIcon?: React.ReactNode | string;
  id?: any;
  open?: boolean;
  error?: boolean;
  className?: string;
  closeOnOutsideClick?: boolean;
  onClose?(_e?: React.MouseEvent): void;
}

const MdModal: React.FunctionComponent<MdModalProps> = ({
  children,
  heading = '',
  headingIcon,
  open = false,
  error = false,
  className = '',
  closeOnOutsideClick = true,
  onClose,
}: MdModalProps) => {
  const classNames = classnames('md-modal', {
    'md-modal--open': !!open,
    'md-modal--error': !!error,
  });
  const modalRef = useRef<HTMLDivElement>(null);

  const innerWrapperClassNames = classnames('md-modal__inner-wrapper', className);

  /**
   * Focus trap for keyboard users. Makes it impossible to tab out of modal,
   * when last focusable element in modal is reached it starts over on the first.
   * Also focuses on the first focusable element when modal is opened.
   */
  useEffect(() => {
    if (!open) return;

    const keyListener = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(focusableHtmlElements);
        if (focusableElements) {
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (!event.shiftKey && document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }

          if (event.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        }
      }
      if (event.key === 'Escape' || event.key === 'Esc') {
        if (onClose) {
          onClose();
        }
      }
    };

    document.addEventListener('keydown', keyListener);

    const firstElement = modalRef.current?.querySelector<HTMLElement>(focusableHtmlElements);

    if (firstElement) {
      firstElement.focus();
    }

    return () => {
      return document.removeEventListener('keydown', keyListener);
    };
  }, [open]);

  const closeModal = (e: React.MouseEvent) => {
    if (onClose) {
      onClose(e);
    }
  };

  if (!open) {
    return null;
  }

  return (
    <>
      <div className="md-modal__overlay" />
      <div className={classNames} role="dialog" aria-modal={true} aria-label={heading}>
        <div className="md-modal__content">
          <MdClickOutsideWrapper
            onClickOutside={e => {
              if (closeOnOutsideClick) {
                closeModal(e);
              }
            }}
            className={innerWrapperClassNames}
            ref={modalRef}
          >
            <div className="md-modal__header">
              <div className="md-modal__header-content">
                {headingIcon}
                {heading}
              </div>
              <button
                type="button"
                className="md-modal__close-button"
                onClick={e => {
                  closeModal(e);
                }}
                aria-label="Lukk"
              >
                <MdXIcon className="md-modal__close-button-icon" />
              </button>
            </div>
            <div className="md-modal__content-inner">{children}</div>
          </MdClickOutsideWrapper>
        </div>
      </div>
    </>
  );
};

export default MdModal;
