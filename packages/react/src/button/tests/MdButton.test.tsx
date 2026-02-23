import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdButton } from '../MdButton';

describe('MdButton', () => {
  describe('rendering', () => {
    it('renders with default props', () => {
      render(<MdButton>Click me</MdButton>);
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    });

    it('renders as button type by default', () => {
      render(<MdButton>Submit</MdButton>);
      const button = screen.getByRole('button', { name: 'Submit' });
      expect(button).toHaveAttribute('type', 'button');
    });

    it('renders with submit type when specified', () => {
      render(<MdButton type="submit">Submit</MdButton>);
      expect(screen.getByRole('button', { name: 'Submit' })).toHaveAttribute('type', 'submit');
    });

    it('renders with reset type when specified', () => {
      render(<MdButton type="reset">Reset</MdButton>);
      expect(screen.getByRole('button', { name: 'Reset' })).toHaveAttribute('type', 'reset');
    });

    it('renders with ReactNode children', () => {
      render(
        <MdButton>
          <span>Custom</span> Content
        </MdButton>
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByText('Custom')).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });

  describe('props forwarding', () => {
    it('forwards id attribute', () => {
      render(<MdButton id="custom-button">Click</MdButton>);
      expect(screen.getByRole('button')).toHaveAttribute('id', 'custom-button');
    });

    it('merges custom className with component classes', () => {
      render(<MdButton className="custom-class">Click</MdButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('md-button', 'custom-class');
    });

    it('forwards data attributes', () => {
      render(<MdButton data-testid="custom-button">Click</MdButton>);
      expect(screen.getByTestId('custom-button')).toBeInTheDocument();
    });

    it('forwards aria attributes', () => {
      render(<MdButton aria-label="Custom label">Click</MdButton>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Custom label');
    });
  });

  describe('theme variants', () => {
    it('applies primary theme by default', () => {
      render(<MdButton>Click</MdButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('md-button');
      expect(button).not.toHaveClass('md-button--secondary', 'md-button--tertiary', 'md-button--danger');
    });

    it('applies secondary theme', () => {
      render(<MdButton theme="secondary">Click</MdButton>);
      expect(screen.getByRole('button')).toHaveClass('md-button--secondary');
    });

    it('applies tertiary theme', () => {
      render(<MdButton theme="tertiary">Click</MdButton>);
      expect(screen.getByRole('button')).toHaveClass('md-button--tertiary');
    });

    it('applies danger theme', () => {
      render(<MdButton theme="danger">Click</MdButton>);
      expect(screen.getByRole('button')).toHaveClass('md-button--danger');
    });

    it('applies danger-secondary theme', () => {
      render(<MdButton theme="danger-secondary">Click</MdButton>);
      expect(screen.getByRole('button')).toHaveClass('md-button--danger-secondary');
    });

    it('applies danger-tertiary theme', () => {
      render(<MdButton theme="danger-tertiary">Click</MdButton>);
      expect(screen.getByRole('button')).toHaveClass('md-button--danger-tertiary');
    });
  });

  describe('size variants', () => {
    it('applies medium size by default', () => {
      render(<MdButton>Click</MdButton>);
      const button = screen.getByRole('button');
      expect(button).not.toHaveClass('md-button--small', 'md-button--large');
    });

    it('applies small size', () => {
      render(<MdButton mode="small">Click</MdButton>);
      expect(screen.getByRole('button')).toHaveClass('md-button--small');
    });

    it('applies large size', () => {
      render(<MdButton mode="large">Click</MdButton>);
      expect(screen.getByRole('button')).toHaveClass('md-button--large');
    });

    it('supports deprecated small prop for backward compatibility', () => {
      render(<MdButton small>Click</MdButton>);
      expect(screen.getByRole('button')).toHaveClass('md-button--small');
    });

    it('deprecated small prop overrides mode prop', () => {
      render(<MdButton small mode="large">Click</MdButton>);
      expect(screen.getByRole('button')).toHaveClass('md-button--small');
      expect(screen.getByRole('button')).not.toHaveClass('md-button--large');
    });
  });

  describe('icons', () => {
    it('renders left icon with aria-hidden', () => {
      render(
        <MdButton leftIcon={<span data-testid="left-icon">←</span>}>
          Click
        </MdButton>
      );
      const icon = screen.getByTestId('left-icon');
      expect(icon.parentElement).toHaveAttribute('aria-hidden', 'true');
    });

    it('renders right icon with aria-hidden', () => {
      render(
        <MdButton rightIcon={<span data-testid="right-icon">→</span>}>
          Click
        </MdButton>
      );
      const icon = screen.getByTestId('right-icon');
      expect(icon.parentElement).toHaveAttribute('aria-hidden', 'true');
    });

    it('renders top icon with aria-hidden', () => {
      render(
        <MdButton topIcon={<span data-testid="top-icon">⬆</span>}>
          Click
        </MdButton>
      );
      const icon = screen.getByTestId('top-icon');
      expect(icon.parentElement).toHaveAttribute('aria-hidden', 'true');
    });

    it('applies column layout when topIcon is present', () => {
      render(
        <MdButton topIcon={<span>⬆</span>}>
          Click
        </MdButton>
      );
      expect(screen.getByRole('button')).toHaveClass('md-button--column');
    });

    it('renders content wrapper when topIcon is present', () => {
      render(
        <MdButton topIcon={<span data-testid="top-icon">⬆</span>} data-testid="btn">
          Click
        </MdButton>
      );
      const button = screen.getByTestId('btn');
      const contentWrapper = button.querySelector('.md-button__content');
      expect(contentWrapper).toBeInTheDocument();
    });

    it('renders all three icons together', () => {
      render(
        <MdButton
          topIcon={<span data-testid="top">⬆</span>}
          leftIcon={<span data-testid="left">←</span>}
          rightIcon={<span data-testid="right">→</span>}
        >
          Click
        </MdButton>
      );
      expect(screen.getByTestId('top')).toBeInTheDocument();
      expect(screen.getByTestId('left')).toBeInTheDocument();
      expect(screen.getByTestId('right')).toBeInTheDocument();
    });
  });

  describe('loading state', () => {
    it('shows loading spinner in right icon position when loading and no topIcon', () => {
      render(<MdButton loading>Click</MdButton>);
      const button = screen.getByRole('button');
      const rightIconDiv = button.querySelector('.md-button__rightIcon');
      expect(rightIconDiv).toBeInTheDocument();
      expect(rightIconDiv?.querySelector('.md-loading-spinner')).toBeInTheDocument();
    });

    it('shows loading spinner in top icon position when loading and topIcon present', () => {
      render(
        <MdButton topIcon={<span data-testid="icon">⬆</span>} loading>
          Click
        </MdButton>
      );
      const button = screen.getByRole('button');
      const topIconDiv = button.querySelector('.md-button__topIcon');
      expect(topIconDiv?.querySelector('.md-loading-spinner')).toBeInTheDocument();
    });

    it('does not show loading spinner when loading is false', () => {
      render(<MdButton loading={false}>Click</MdButton>);
      expect(screen.getByRole('button').querySelector('.md-loading-spinner')).not.toBeInTheDocument();
    });
  });

  describe('disabled states', () => {
    it('disables button when disabled prop is true', () => {
      render(<MdButton disabled>Click</MdButton>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('does not disable button by default', () => {
      render(<MdButton>Click</MdButton>);
      expect(screen.getByRole('button')).not.toBeDisabled();
    });

    it('forwards disabled attribute', () => {
      render(<MdButton disabled aria-disabled="true">Click</MdButton>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('interactions', () => {
    it('handles click events', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<MdButton onClick={onClick}>Click me</MdButton>);

      await user.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('supports Enter key', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<MdButton onClick={onClick}>Submit</MdButton>);

      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard('{Enter}');
      expect(onClick).toHaveBeenCalled();
    });

    it('supports Space key', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<MdButton onClick={onClick}>Submit</MdButton>);

      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard(' ');
      expect(onClick).toHaveBeenCalled();
    });

    it('does not trigger click when disabled', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<MdButton onClick={onClick} disabled>Click me</MdButton>);

      await user.click(screen.getByRole('button'));
      expect(onClick).not.toHaveBeenCalled();
    });

    it('forwards other event handlers', async () => {
      const user = userEvent.setup();
      const onFocus = vi.fn();
      const onBlur = vi.fn();
      render(
        <MdButton onFocus={onFocus} onBlur={onBlur}>
          Click
        </MdButton>
      );

      const button = screen.getByRole('button');
      await user.click(button);
      expect(onFocus).toHaveBeenCalled();
    });
  });

  describe('asChild functionality', () => {
    it('clones provided element as child when asChild and asChildContent are provided', () => {
      render(
        <MdButton asChild asChildContent={<a href="/test">Link</a>}>
          Click
        </MdButton>
      );
      const link = screen.getByRole('link', { name: 'Click' });
      expect(link).toHaveAttribute('href', '/test');
      expect(link).toHaveClass('md-button');
    });

    it('merges className when using asChild', () => {
      render(
        <MdButton asChild className="custom" asChildContent={<a href="/test">Link</a>}>
          Click
        </MdButton>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveClass('md-button', 'custom');
    });

    it('forwards other props when using asChild', () => {
      render(
        <MdButton
          asChild
          data-testid="custom-link"
          asChildContent={<a href="/test">Link</a>}
        >
          Click
        </MdButton>
      );
      expect(screen.getByTestId('custom-link')).toBeInTheDocument();
    });
  });

  describe('accessibility', () => {
    it('has correct button role', () => {
      render(<MdButton>Click me</MdButton>);
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    });

    it('is focusable and keyboard navigable', async () => {
      const user = userEvent.setup();
      render(<MdButton>Click</MdButton>);
      const button = screen.getByRole('button');

      expect(button).not.toHaveFocus();
      await user.tab();
      expect(button).toHaveFocus();
    });

    it('has visible focus indicator', () => {
      render(<MdButton>Click</MdButton>);
      const button = screen.getByRole('button');
      expect(button).toBeVisible();
      // Note: Actual focus styling is tested in visual/e2e tests
    });

    it('announces disabled state to screen readers', () => {
      render(<MdButton disabled>Click</MdButton>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('hides decorative icons from screen readers', () => {
      render(
        <MdButton
          leftIcon={<span data-testid="icon">→</span>}
          rightIcon={<span data-testid="right">←</span>}
        >
          Click
        </MdButton>
      );
      expect(screen.getByTestId('icon').parentElement).toHaveAttribute('aria-hidden', 'true');
      expect(screen.getByTestId('right').parentElement).toHaveAttribute('aria-hidden', 'true');
    });

    it('respects custom aria attributes', () => {
      render(
        <MdButton aria-label="Delete item" aria-describedby="delete-desc">
          Delete
        </MdButton>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Delete item');
      expect(button).toHaveAttribute('aria-describedby', 'delete-desc');
    });
  });
});