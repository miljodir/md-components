import React from 'react';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import MdClickOutsideWrapper from '../utils/MdClickOutsideWrapper';
import XIcon from '../icons/XIcon';

interface MdModalProps {
  children: any;
  heading?: string;
  id?: any;
  open?: boolean;
  error?: boolean;
  className?: string;
  onClose?(e: React.MouseEvent): void;
};

const MdModal: React.FunctionComponent<MdModalProps> = ({
  children,
  heading = '',
  id,
  open = false,
  error = false,
  className = '',
  onClose
}: MdModalProps) => {

  const classNames = classnames('md-modal', {
    'md-modal--open': !!open,
    'md-modal--error': !!error,
  }, className);

  const closeModal = (e: React.MouseEvent) => {
    if (onClose) {
      onClose(e);
    }
  }

  if (!open) {
    return null;
  }

  return (
    <>
      <div className="md-modal__overlay"></div>
      <div className={classNames}>
        <div
          className="md-modal__content"
        >
          <MdClickOutsideWrapper
            onClickOutside={(e) => { closeModal(e) }}
            className="md-modal__inner-wrapper"
          >
            <div className="md-modal__header">
              <div>{heading}</div>
              <button
                className="md-modal__close-button"
                onClick={(e) => { closeModal(e) }}
              >
                <XIcon className="md-modal__close-button-icon" />
              </button>
            </div>
            <div className="md-modal__content-inner">
              { children }
            </div>
          </MdClickOutsideWrapper>
        </div>
      </div>
    </>
  );
};

export default MdModal;
