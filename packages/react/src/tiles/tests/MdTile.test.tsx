import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdTile } from '../MdTile';

describe('MdTile', () => {
  describe('rendering', () => {
    it('renders as anchor when href is provided', () => {
      render(<MdTile href="/page" heading="Link Tile" />);
      expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it('renders as button when no href is provided', () => {
      render(<MdTile heading="Button Tile" />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders heading', () => {
      render(<MdTile heading="My Tile" />);
      expect(screen.getByText('My Tile')).toBeInTheDocument();
    });

    it('renders description', () => {
      render(<MdTile heading="Title" description="Description text" />);
      expect(screen.getByText('Description text')).toBeInTheDocument();
    });

    it('renders icon when provided', () => {
      const { container } = render(<MdTile heading="Test" icon={<span data-testid="icon" />} />);
      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(container.querySelector('.md-tile__content-icon')).toBeInTheDocument();
    });

    it('renders chevron arrow', () => {
      const { container } = render(<MdTile heading="Test" />);
      expect(container.querySelector('.md-tile__arrow')).toBeInTheDocument();
    });
  });

  describe('themes', () => {
    it('applies primary theme by default', () => {
      const { container } = render(<MdTile heading="Test" />);
      expect(container.querySelector('.md-tile')).not.toHaveClass('md-tile--secondary');
    });

    it('applies secondary theme', () => {
      const { container } = render(<MdTile heading="Test" theme="secondary" />);
      expect(container.querySelector('.md-tile--secondary')).toBeInTheDocument();
    });
  });

  describe('modes', () => {
    it('applies large mode by default', () => {
      const { container } = render(<MdTile heading="Test" />);
      expect(container.querySelector('.md-tile--medium')).not.toBeInTheDocument();
      expect(container.querySelector('.md-tile--small')).not.toBeInTheDocument();
    });

    it('applies medium mode', () => {
      const { container } = render(<MdTile heading="Test" mode="medium" />);
      expect(container.querySelector('.md-tile--medium')).toBeInTheDocument();
    });

    it('applies small mode', () => {
      const { container } = render(<MdTile heading="Test" mode="small" />);
      expect(container.querySelector('.md-tile--small')).toBeInTheDocument();
    });
  });

  describe('states', () => {
    it('applies disabled class when disabled', () => {
      const { container } = render(<MdTile heading="Test" disabled />);
      expect(container.querySelector('.md-tile--disabled')).toBeInTheDocument();
    });

    it('sets tabIndex to -1 when disabled (link)', () => {
      render(<MdTile href="/page" heading="Test" disabled />);
      expect(screen.getByRole('link')).toHaveAttribute('tabindex', '-1');
    });

    it('applies fullWidth class', () => {
      const { container } = render(<MdTile heading="Test" fullWidth />);
      expect(container.querySelector('.md-tile--fullWidth')).toBeInTheDocument();
    });

    it('shows loading spinner when loading', () => {
      const { container } = render(<MdTile heading="Test" loading />);
      expect(container.querySelector('.md-loading-spinner')).toBeInTheDocument();
    });

    it('hides icon when loading', () => {
      render(<MdTile heading="Test" loading icon={<span data-testid="icon" />} />);
      expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('handles click events (button)', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<MdTile heading="Click me" onClick={onClick} />);

      await user.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('renders link with href', () => {
      render(<MdTile href="/page" heading="Click me" />);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', '/page');
    });
  });

  describe('asChild pattern', () => {
    it('renders custom element with asChild', () => {
      render(
        <MdTile
          heading="Custom"
          asChild
          asChildContent={
            <a href="/custom" data-testid="custom-link">
              Custom
            </a>
          }
        />,
      );
      expect(screen.getByTestId('custom-link')).toHaveClass('md-tile');
    });
  });

  describe('props forwarding', () => {
    it('merges custom className', () => {
      render(<MdTile heading="Test" className="custom-class" />);
      const tile = screen.getByRole('button');
      expect(tile).toHaveClass('md-tile');
      expect(tile).toHaveClass('custom-class');
    });

    it('forwards id', () => {
      render(<MdTile heading="Test" id="my-tile" />);
      expect(screen.getByRole('button')).toHaveAttribute('id', 'my-tile');
    });

    it('forwards data-* attributes', () => {
      render(<MdTile heading="Test" data-testid="tile" />);
      expect(screen.getByTestId('tile')).toBeInTheDocument();
    });
  });

  describe('accessibility', () => {
    it('icon is aria-hidden', () => {
      const { container } = render(<MdTile heading="Test" icon={<span />} />);
      expect(container.querySelector('.md-tile__content-icon')).toHaveAttribute('aria-hidden', 'true');
    });
  });
});
