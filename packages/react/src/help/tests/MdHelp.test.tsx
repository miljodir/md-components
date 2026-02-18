import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdHelpButton } from '../MdHelpButton';
import { MdHelpText } from '../MdHelpText';

describe('MdHelpText', () => {
  describe('rendering', () => {
    it('renders children', () => {
      render(<MdHelpText>Help content here</MdHelpText>);
      expect(screen.getByText('Help content here')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(<MdHelpText className="custom-help">Help</MdHelpText>);
      expect(container.querySelector('.md-helptext')).toHaveClass('custom-help');
    });

    it('has tooltip role for accessibility', () => {
      render(<MdHelpText>Help text</MdHelpText>);
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });

    it('forwards data-* attributes', () => {
      render(<MdHelpText data-testid="help-text">Help</MdHelpText>);
      expect(screen.getByTestId('help-text')).toBeInTheDocument();
    });
  });
});

describe('MdHelpButton', () => {
  describe('rendering', () => {
    it('renders a button', () => {
      render(<MdHelpButton expanded={false} />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders help icon when not expanded', () => {
      const { container } = render(<MdHelpButton expanded={false} />);
      expect(container.querySelector('.md-helpbutton__icon')).toBeInTheDocument();
    });

    it('renders filled icon when expanded', () => {
      const { container } = render(<MdHelpButton expanded={true} />);
      expect(container.querySelector('.md-helpbutton__icon')).toBeInTheDocument();
    });
  });

  describe('states', () => {
    it('applies expanded class when expanded is true', () => {
      const { container } = render(<MdHelpButton expanded={true} />);
      expect(container.querySelector('.md-helpbutton--expanded')).toBeInTheDocument();
    });

    it('does not apply expanded class when expanded is false', () => {
      const { container } = render(<MdHelpButton expanded={false} />);
      expect(container.querySelector('.md-helpbutton--expanded')).not.toBeInTheDocument();
    });

    it('applies noarrow class when hideArrow is true', () => {
      const { container } = render(<MdHelpButton expanded={false} hideArrow />);
      expect(container.querySelector('.md-helpbutton--noarrow')).toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('handles click events', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<MdHelpButton expanded={false} onClick={onClick} />);

      await user.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('accessibility', () => {
    it('has aria-label', () => {
      render(<MdHelpButton expanded={false} />);
      expect(screen.getByRole('button')).toHaveAttribute('aria-label');
    });

    it('uses custom label from labels prop', () => {
      render(<MdHelpButton expanded={false} labels={{ helpText: 'Show help' }} />);
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Show help');
    });

    it('has aria-pressed attribute', () => {
      render(<MdHelpButton expanded={true} />);
      expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
    });

    it('sets aria-pressed to false when not expanded', () => {
      render(<MdHelpButton expanded={false} />);
      expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false');
    });
  });

  describe('props forwarding', () => {
    it('applies custom className', () => {
      const { container } = render(<MdHelpButton expanded={false} className="custom-button" />);
      expect(container.querySelector('.md-helpbutton')).toHaveClass('custom-button');
    });
  });
});
