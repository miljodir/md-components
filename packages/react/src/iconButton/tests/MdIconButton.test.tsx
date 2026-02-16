import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdIconButton } from '../MdIconButton';

describe('MdIconButton', () => {
  describe('rendering', () => {
    it('renders a button', () => {
      render(<MdIconButton label="Close">X</MdIconButton>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders children (icon)', () => {
      render(
        <MdIconButton label="Close">
          <span data-testid="icon">X</span>
        </MdIconButton>,
      );
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('renders with aria-label from label prop', () => {
      render(<MdIconButton label="Close dialog">X</MdIconButton>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close dialog');
    });

    it('has type="button" by default', () => {
      render(<MdIconButton label="Action">X</MdIconButton>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });
  });

  describe('themes', () => {
    it('applies filled theme by default', () => {
      render(<MdIconButton label="Test">X</MdIconButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('md-icon-button');
      expect(button).not.toHaveClass('md-icon-button--border');
      expect(button).not.toHaveClass('md-icon-button--plain');
    });

    it('applies border theme', () => {
      render(
        <MdIconButton label="Test" theme="border">
          X
        </MdIconButton>,
      );
      expect(screen.getByRole('button')).toHaveClass('md-icon-button--border');
    });

    it('applies plain theme', () => {
      render(
        <MdIconButton label="Test" theme="plain">
          X
        </MdIconButton>,
      );
      expect(screen.getByRole('button')).toHaveClass('md-icon-button--plain');
    });
  });

  describe('states', () => {
    it('can be disabled', () => {
      render(
        <MdIconButton label="Test" disabled>
          X
        </MdIconButton>,
      );
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('shows loading spinner when loading', () => {
      const { container } = render(
        <MdIconButton label="Test" loading>
          X
        </MdIconButton>,
      );
      expect(container.querySelector('.md-loading-spinner')).toBeInTheDocument();
    });

    it('hides icon when loading', () => {
      render(
        <MdIconButton label="Test" loading>
          <span data-testid="icon">X</span>
        </MdIconButton>,
      );
      expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('handles click events', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(
        <MdIconButton label="Click" onClick={onClick}>
          X
        </MdIconButton>,
      );

      await user.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not fire click when disabled', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(
        <MdIconButton label="Click" disabled onClick={onClick}>
          X
        </MdIconButton>,
      );

      await user.click(screen.getByRole('button'));
      expect(onClick).not.toHaveBeenCalled();
    });

    it('can be triggered with keyboard (Enter)', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(
        <MdIconButton label="Click" onClick={onClick}>
          X
        </MdIconButton>,
      );

      screen.getByRole('button').focus();
      await user.keyboard('{Enter}');
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('can be triggered with keyboard (Space)', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(
        <MdIconButton label="Click" onClick={onClick}>
          X
        </MdIconButton>,
      );

      screen.getByRole('button').focus();
      await user.keyboard(' ');
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('tooltip', () => {
    it('wraps button in tooltip when showTooltip is true', () => {
      const { container } = render(
        <MdIconButton label="Test tooltip" showTooltip>
          X
        </MdIconButton>,
      );
      expect(container.querySelector('.md-tooltip__anchor')).toBeInTheDocument();
    });

    it('does not show tooltip when disabled', () => {
      const { container } = render(
        <MdIconButton label="Test tooltip" showTooltip disabled>
          X
        </MdIconButton>,
      );
      expect(container.querySelector('.md-tooltip__anchor')).not.toBeInTheDocument();
    });
  });

  describe('props forwarding', () => {
    it('forwards id', () => {
      render(
        <MdIconButton label="Test" id="my-button">
          X
        </MdIconButton>,
      );
      expect(screen.getByRole('button')).toHaveAttribute('id', 'my-button');
    });

    it('forwards data-* attributes', () => {
      render(
        <MdIconButton label="Test" data-testid="icon-btn">
          X
        </MdIconButton>,
      );
      expect(screen.getByTestId('icon-btn')).toBeInTheDocument();
    });

    it('merges custom className', () => {
      render(
        <MdIconButton label="Test" className="custom-class">
          X
        </MdIconButton>,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveClass('md-icon-button');
      expect(button).toHaveClass('custom-class');
    });

    it('forwards type attribute', () => {
      render(
        <MdIconButton label="Submit" type="submit">
          X
        </MdIconButton>,
      );
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });
  });

  describe('accessibility', () => {
    it('has accessible name via aria-label', () => {
      render(<MdIconButton label="Delete item">X</MdIconButton>);
      expect(screen.getByRole('button', { name: 'Delete item' })).toBeInTheDocument();
    });

    it('icon is aria-hidden', () => {
      const { container } = render(<MdIconButton label="Test">X</MdIconButton>);
      expect(container.querySelector('.md-icon-button__icon')).toHaveAttribute('aria-hidden', 'true');
    });
  });
});
