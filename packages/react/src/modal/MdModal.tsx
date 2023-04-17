import React from 'react';
import classnames from 'classnames';

import MdClickOutsideWrapper from '../utils/MdClickOutsideWrapper';
import MdXIcon from '../icons/MdXIcon';

interface MdModalProps {
  children: any;
  heading?: string;
  headingIcon?: React.ReactNode | string;
  id?: any;
  open?: boolean;
  error?: boolean;
  className?: string;
  closeOnOutsideClick?: boolean;
  onClose?(e: React.MouseEvent): void;
}

const MdModal: React.FunctionComponent<MdModalProps> = ({
  children,
  heading = '',
  headingIcon,
  id,
  open = false,
  error = false,
  className = '',
  closeOnOutsideClick = true,
  onClose,
}: MdModalProps) => {
  const classNames = classnames(
    'md-modal',
    {
      'md-modal--open': !!open,
      'md-modal--error': !!error,
    },
    className
  );

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
      <div className={classNames}>
        <div className="md-modal__content">
          <MdClickOutsideWrapper
            onClickOutside={(e) => {
              if (closeOnOutsideClick) closeModal(e);
            }}
            className="md-modal__inner-wrapper"
          >
            <div className="md-modal__header">
              <div className="md-modal__header-content">
                {headingIcon}
                {heading}
              </div>
              <button
                className="md-modal__close-button"
                onClick={(e) => {
                  closeModal(e);
                }}
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
