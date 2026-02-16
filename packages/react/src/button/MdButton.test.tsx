import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdButton } from './MdButton';

describe('MdButton', () => {
  describe('rendering', () => {
    it('renders with default props', () => {
      render(<MdButton>Click me</MdButton>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('md-button');
    });

    it('renders children correctly', () => {
      render(<MdButton>Button Text</MdButton>);
      expect(screen.getByRole('button')).toHaveTextContent('Button Text');
    });

    it('renders with ReactNode children', () => {
      render(
        <MdButton>
          <span data-testid="child">Complex child</span>
        </MdButton>,
      );
      expect(screen.getByTestId('child')).toBeInTheDocument();
    });
  });

  describe('props forwarding', () => {
    it('forwards id attribute', () => {
      render(<MdButton id="my-button">Click</MdButton>);
      expect(screen.getByRole('button')).toHaveAttribute('id', 'my-button');
    });

    it('forwards aria-label', () => {
      render(<MdButton aria-label="Close dialog">X</MdButton>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close dialog');
    });

    it('forwards data-* attributes', () => {
      render(<MdButton data-testid="custom-button">Click</MdButton>);
      expect(screen.getByTestId('custom-button')).toBeInTheDocument();
    });

    it('merges custom className with component classes', () => {
      render(<MdButton className="custom-class">Click</MdButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('md-button');
      expect(button).toHaveClass('custom-class');
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

    it('does not fire click when disabled', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(
        <MdButton disabled onClick={onClick}>
          Click me
        </MdButton>,
      );

      await user.click(screen.getByRole('button'));
      expect(onClick).not.toHaveBeenCalled();
    });

    it('can be triggered with keyboard (Enter)', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<MdButton onClick={onClick}>Click me</MdButton>);

      screen.getByRole('button').focus();
      await user.keyboard('{Enter}');
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('can be triggered with keyboard (Space)', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<MdButton onClick={onClick}>Click me</MdButton>);

      screen.getByRole('button').focus();
      await user.keyboard(' ');
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('disabled state', () => {
    it('can be disabled', () => {
      render(<MdButton disabled>Click me</MdButton>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('is not disabled by default', () => {
      render(<MdButton>Click me</MdButton>);
      expect(screen.getByRole('button')).not.toBeDisabled();
    });
  });

  describe('themes', () => {
    it.each([
      ['secondary', 'md-button--secondary'],
      ['tertiary', 'md-button--tertiary'],
      ['danger', 'md-button--danger'],
      ['danger-secondary', 'md-button--danger-secondary'],
      ['danger-tertiary', 'md-button--danger-tertiary'],
    ] as const)('renders %s theme with correct class', (theme, expectedClass) => {
      render(<MdButton theme={theme}>Button</MdButton>);
      expect(screen.getByRole('button')).toHaveClass(expectedClass);
    });

    it('renders primary theme without modifier class', () => {
      render(<MdButton theme="primary">Button</MdButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('md-button');
      expect(button).not.toHaveClass('md-button--secondary');
      expect(button).not.toHaveClass('md-button--tertiary');
    });
  });

  describe('modes', () => {
    it('renders small mode', () => {
      render(<MdButton mode="small">Small</MdButton>);
      expect(screen.getByRole('button')).toHaveClass('md-button--small');
    });

    it('renders large mode', () => {
      render(<MdButton mode="large">Large</MdButton>);
      expect(screen.getByRole('button')).toHaveClass('md-button--large');
    });

    it('renders medium mode without modifier class', () => {
      render(<MdButton mode="medium">Medium</MdButton>);
      const button = screen.getByRole('button');
      expect(button).not.toHaveClass('md-button--small');
      expect(button).not.toHaveClass('md-button--large');
    });

    it('supports deprecated small prop for backward compatibility', () => {
      render(<MdButton small>Small</MdButton>);
      expect(screen.getByRole('button')).toHaveClass('md-button--small');
    });

    it('small prop overrides mode prop', () => {
      render(
        <MdButton small mode="large">
          Small
        </MdButton>,
      );
      expect(screen.getByRole('button')).toHaveClass('md-button--small');
    });
  });

  describe('type attribute', () => {
    it('defaults to type="button"', () => {
      render(<MdButton>Click</MdButton>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });

    it('can be type="submit"', () => {
      render(<MdButton type="submit">Submit</MdButton>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('can be type="reset"', () => {
      render(<MdButton type="reset">Reset</MdButton>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
    });
  });

  describe('loading state', () => {
    it('renders loading spinner when loading', () => {
      render(<MdButton loading>Loading</MdButton>);
      expect(screen.getByRole('button').querySelector('.md-button__rightIcon')).toBeInTheDocument();
    });
  });

  describe('icons', () => {
    it('renders left icon', () => {
      render(<MdButton leftIcon={<span data-testid="left-icon">←</span>}>With Icon</MdButton>);
      expect(screen.getByTestId('left-icon')).toBeInTheDocument();
      expect(screen.getByRole('button').querySelector('.md-button__leftIcon')).toBeInTheDocument();
    });

    it('renders right icon', () => {
      render(<MdButton rightIcon={<span data-testid="right-icon">→</span>}>With Icon</MdButton>);
      expect(screen.getByTestId('right-icon')).toBeInTheDocument();
      expect(screen.getByRole('button').querySelector('.md-button__rightIcon')).toBeInTheDocument();
    });

    it('renders top icon with column layout', () => {
      render(<MdButton topIcon={<span data-testid="top-icon">↑</span>}>With Top Icon</MdButton>);
      expect(screen.getByTestId('top-icon')).toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveClass('md-button--column');
    });

    it('marks icons as aria-hidden', () => {
      render(<MdButton leftIcon={<span>Icon</span>}>With Icon</MdButton>);
      expect(screen.getByRole('button').querySelector('.md-button__leftIcon')).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('asChild pattern', () => {
    it('renders as custom element when asChild is true', () => {
      render(
        <MdButton asChild asChildContent={<a href="/test">Link</a>}>
          Link Button
        </MdButton>,
      );
      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveClass('md-button');
      expect(link).toHaveAttribute('href', '/test');
    });
  });
});
