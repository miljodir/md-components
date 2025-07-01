'use client';

import { Dialog, DialogHeading, DialogDismiss } from '@ariakit/react';
import classnames from 'classnames';
import React, { useRef } from 'react';
import MdIconClose from '../icons-material/MdIconClose';

export interface MdModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  heading?: string;
  headingIcon?: React.ReactNode | string;
  open?: boolean;
  error?: boolean;
  className?: string;
  contentClassName?: string;
  closeOnOutsideClick?: boolean;
  headingDivider?: boolean;
  footerDivider?: boolean;
  footer?: React.ReactNode;
  onClose?: () => void;
}

export const MdModal: React.FunctionComponent<MdModalProps> = ({
  children,
  heading = '',
  open = false,
  error = false,
  onClose = () => {},
  headingIcon,
  closeOnOutsideClick = true,
  headingDivider = false,
  footerDivider = false,
  footer,
  className = '',
  contentClassName = '',
  ...rest
}: MdModalProps) => {
  const dismissRef = useRef<HTMLButtonElement>(null);
  const classNames = classnames('md-modal', {
    'md-modal--error': !!error,
    [className]: className,
  });
  const headingClassNames = classnames('md-modal__header', {
    'md-modal__header--divider': headingDivider,
  });
  const contentClassNames = classnames('md-modal__content', {
    [contentClassName]: contentClassName,
  });

  return (
    <Dialog
      open={open}
      onClose={() => {
        onClose();
      }}
      hideOnEscape={true}
      hideOnInteractOutside={closeOnOutsideClick}
      backdrop={<div className="md-modal__overlay" />}
      className={classNames}
      modal
      unmountOnHide
      {...rest}
    >
      <div className="md-modal__header-wrapper">
        <div className={headingClassNames}>
          <DialogHeading className="md-modal__header-content" render={<div />}>
            {headingIcon}
            {heading}
          </DialogHeading>
          <DialogDismiss ref={dismissRef} className="md-modal__close-button">
            <MdIconClose />
          </DialogDismiss>
        </div>
        {headingDivider && <div className="md-modal__header-divider" />}
      </div>
      <div className={contentClassNames}>{children}</div>

      {footer && (
        <div className="md-modal__footer-wrapper">
          {footerDivider && <div className="md-modal__footer-divider" />}
          <div className="md-modal__footer">{footer}</div>
        </div>
      )}
    </Dialog>
  );
};

export default MdModal;
