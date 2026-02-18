import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdAlertMessage } from '../MdAlertMessage';

describe('MdAlertMessage', () => {
  describe('rendering', () => {
    it('renders with label', () => {
      render(<MdAlertMessage label="Alert message" />);
      expect(screen.getByText('Alert message')).toBeInTheDocument();
    });

    it('renders with description', () => {
      render(<MdAlertMessage label="Title" description="Description text" />);
      expect(screen.getByText('Description text')).toBeInTheDocument();
    });

    it('renders label as ReactNode', () => {
      render(<MdAlertMessage label={<span data-testid="custom-label">Custom</span>} />);
      expect(screen.getByTestId('custom-label')).toBeInTheDocument();
    });

    it('renders description as ReactNode', () => {
      render(<MdAlertMessage label="Title" description={<span data-testid="custom-desc">Custom</span>} />);
      expect(screen.getByTestId('custom-desc')).toBeInTheDocument();
    });

    it('renders icon by default', () => {
      const { container } = render(<MdAlertMessage label="Info" />);
      expect(container.querySelector('.md-alert-message__icon')).toBeInTheDocument();
    });

    it('hides icon when hideIcon is true', () => {
      const { container } = render(<MdAlertMessage label="Info" hideIcon />);
      expect(container.querySelector('.md-alert-message__icon')).not.toBeInTheDocument();
    });
  });

  describe('themes', () => {
    it('applies info theme by default', () => {
      const { container } = render(<MdAlertMessage label="Info" />);
      expect(container.querySelector('.md-alert-message')).not.toHaveClass('md-alert-message--success');
      expect(container.querySelector('.md-alert-message')).not.toHaveClass('md-alert-message--warning');
      expect(container.querySelector('.md-alert-message')).not.toHaveClass('md-alert-message--error');
    });

    it('applies success theme', () => {
      const { container } = render(<MdAlertMessage label="Success" theme="success" />);
      expect(container.querySelector('.md-alert-message--success')).toBeInTheDocument();
    });

    it('applies warning theme', () => {
      const { container } = render(<MdAlertMessage label="Warning" theme="warning" />);
      expect(container.querySelector('.md-alert-message--warning')).toBeInTheDocument();
    });

    it('applies error theme', () => {
      const { container } = render(<MdAlertMessage label="Error" theme="error" />);
      expect(container.querySelector('.md-alert-message--error')).toBeInTheDocument();
    });

    it('applies info-box theme', () => {
      const { container } = render(<MdAlertMessage label="Info Box" theme="info-box" />);
      expect(container.querySelector('.md-alert-message--info-box')).toBeInTheDocument();
    });
  });

  describe('icons', () => {
    it('renders info icon for info theme', () => {
      const { container } = render(<MdAlertMessage label="Info" theme="info" />);
      expect(container.querySelector('.md-alert-message__icon')).toBeInTheDocument();
    });

    it('renders success icon for success theme', () => {
      const { container } = render(<MdAlertMessage label="Success" theme="success" />);
      expect(container.querySelector('.md-alert-message__icon')).toBeInTheDocument();
    });

    it('renders warning icon for warning theme', () => {
      const { container } = render(<MdAlertMessage label="Warning" theme="warning" />);
      expect(container.querySelector('.md-alert-message__icon')).toBeInTheDocument();
    });

    it('renders error icon for error theme', () => {
      const { container } = render(<MdAlertMessage label="Error" theme="error" />);
      expect(container.querySelector('.md-alert-message__icon')).toBeInTheDocument();
    });

    it('renders custom icon', () => {
      render(<MdAlertMessage label="Custom" customIcon={<span data-testid="custom-icon" />} />);
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });
  });

  describe('closable', () => {
    it('shows close button when closable is true', () => {
      // Component requires both closable AND onClose to render the button
      render(<MdAlertMessage label="Closable" closable onClose={() => {}} />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('does not show close button by default', () => {
      render(<MdAlertMessage label="Not closable" />);
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', async () => {
      const user = userEvent.setup();
      const onClose = vi.fn();
      render(<MdAlertMessage label="Closable" closable onClose={onClose} />);

      await user.click(screen.getByRole('button'));
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('fullWidth', () => {
    it('applies fullWidth class', () => {
      const { container } = render(<MdAlertMessage label="Full" fullWidth />);
      expect(container.querySelector('.md-alert-message--fullWidth')).toBeInTheDocument();
    });
  });

  describe('alignContent', () => {
    it('applies center alignment', () => {
      const { container } = render(<MdAlertMessage label="Centered" alignContent="center" />);
      expect(container.querySelector('.md-alert-message__content--center')).toBeInTheDocument();
    });

    it('applies end alignment', () => {
      const { container } = render(<MdAlertMessage label="End" alignContent="end" />);
      expect(container.querySelector('.md-alert-message__content--end')).toBeInTheDocument();
    });
  });

  describe('props forwarding', () => {
    it('merges custom className', () => {
      const { container } = render(<MdAlertMessage label="Test" className="custom-class" />);
      expect(container.querySelector('.md-alert-message')).toHaveClass('custom-class');
    });

    it('forwards data-* attributes', () => {
      render(<MdAlertMessage label="Test" data-testid="alert" />);
      expect(screen.getByTestId('alert')).toBeInTheDocument();
    });
  });

  describe('accessibility', () => {
    it('icons have aria-label', () => {
      const { container } = render(<MdAlertMessage label="Info" theme="info" />);
      expect(container.querySelector('.md-alert-message__icon')).toHaveAttribute('aria-label');
    });
  });
});
