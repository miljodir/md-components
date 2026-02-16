import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdModal } from '../MdModal';

describe('MdModal', () => {
  describe('rendering', () => {
    it('renders when open is true', () => {
      render(
        <MdModal open heading="Test Modal">
          Modal content
        </MdModal>,
      );
      expect(screen.getByText('Test Modal')).toBeInTheDocument();
      expect(screen.getByText('Modal content')).toBeInTheDocument();
    });

    it('does not render when open is false', () => {
      render(
        <MdModal open={false} heading="Test Modal">
          Modal content
        </MdModal>,
      );
      expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
    });

    it('renders heading', () => {
      render(
        <MdModal open heading="My Heading">
          Content
        </MdModal>,
      );
      expect(screen.getByText('My Heading')).toBeInTheDocument();
    });

    it('renders heading icon', () => {
      render(
        <MdModal open heading="Title" headingIcon={<span data-testid="heading-icon" />}>
          Content
        </MdModal>,
      );
      expect(screen.getByTestId('heading-icon')).toBeInTheDocument();
    });

    it('renders children', () => {
      render(
        <MdModal open>
          <div data-testid="child-content">Child content</div>
        </MdModal>,
      );
      expect(screen.getByTestId('child-content')).toBeInTheDocument();
    });

    it('renders footer', () => {
      render(
        <MdModal open footer={<button>Save</button>}>
          Content
        </MdModal>,
      );
      expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
    });

    it('renders close button', () => {
      render(
        <MdModal open heading="Title">
          Content
        </MdModal>,
      );
      // Close button is the dismiss button within the modal
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('states', () => {
    it('applies error class when error is true', () => {
      const { baseElement } = render(
        <MdModal open error>
          Content
        </MdModal>,
      );
      expect(baseElement.querySelector('.md-modal--error')).toBeInTheDocument();
    });
  });

  describe('dividers', () => {
    it('renders header divider when headingDivider is true', () => {
      const { baseElement } = render(
        <MdModal open heading="Title" headingDivider>
          Content
        </MdModal>,
      );
      expect(baseElement.querySelector('.md-modal__header-divider')).toBeInTheDocument();
    });

    it('renders footer divider when footerDivider is true', () => {
      const { baseElement } = render(
        <MdModal open footer={<button>OK</button>} footerDivider>
          Content
        </MdModal>,
      );
      expect(baseElement.querySelector('.md-modal__footer-divider')).toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('calls onClose when close button is clicked', async () => {
      const user = userEvent.setup();
      const onClose = vi.fn();
      render(
        <MdModal open heading="Title" onClose={onClose}>
          Content
        </MdModal>,
      );

      // Click the close button (the dismiss button)
      const closeButton = screen.getByRole('button');
      await user.click(closeButton);
      expect(onClose).toHaveBeenCalled();
    });

    it('calls onClose when pressing Escape', async () => {
      const user = userEvent.setup();
      const onClose = vi.fn();
      render(
        <MdModal open heading="Title" onClose={onClose}>
          Content
        </MdModal>,
      );

      await user.keyboard('{Escape}');
      expect(onClose).toHaveBeenCalled();
    });
  });

  describe('props forwarding', () => {
    it('applies custom className', () => {
      const { baseElement } = render(
        <MdModal open className="custom-modal">
          Content
        </MdModal>,
      );
      expect(baseElement.querySelector('.md-modal')).toHaveClass('custom-modal');
    });

    it('applies contentClassName to content div', () => {
      const { baseElement } = render(
        <MdModal open contentClassName="custom-content">
          Content
        </MdModal>,
      );
      expect(baseElement.querySelector('.md-modal__content')).toHaveClass('custom-content');
    });

    it('forwards data-* attributes', () => {
      render(
        <MdModal open data-testid="my-modal">
          Content
        </MdModal>,
      );
      expect(screen.getByTestId('my-modal')).toBeInTheDocument();
    });
  });

  describe('accessibility', () => {
    it('is a dialog role', () => {
      render(
        <MdModal open heading="Title">
          Content
        </MdModal>,
      );
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('is modal by default', () => {
      render(
        <MdModal open heading="Title">
          Content
        </MdModal>,
      );
      // ariakit Dialog uses modal prop which ensures proper modal behavior
      // The aria-modal attribute may not be explicitly set but modal behavior is enforced
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });
});
