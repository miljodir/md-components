import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdTileVertical } from '../MdTileVertical';

describe('MdTileVertical', () => {
  describe('rendering', () => {
    it('renders tile', () => {
      const { container } = render(<MdTileVertical heading="Tile" />);
      expect(container.querySelector('.md-tile-vertical')).toBeInTheDocument();
    });

    it('renders heading', () => {
      render(<MdTileVertical heading="Test Heading" />);
      expect(screen.getByText('Test Heading')).toBeInTheDocument();
    });

    it('renders description', () => {
      render(<MdTileVertical heading="Title" description="Test description" />);
      expect(screen.getByText('Test description')).toBeInTheDocument();
    });

    it('does not render description when empty', () => {
      const { container } = render(<MdTileVertical heading="Title" description="" />);
      expect(container.querySelector('.md-tile-vertical__content-description')).not.toBeInTheDocument();
    });

    it('renders icon', () => {
      render(<MdTileVertical heading="Title" icon={<span data-testid="icon">★</span>} />);
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('renders as button by default', () => {
      render(<MdTileVertical heading="Title" />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders as anchor when href provided', () => {
      render(<MdTileVertical heading="Title" href="/link" />);
      expect(screen.getByRole('link')).toBeInTheDocument();
    });
  });

  describe('modes', () => {
    it('applies medium mode by default', () => {
      const { container } = render(<MdTileVertical heading="Title" />);
      expect(container.querySelector('.md-tile-vertical--small')).not.toBeInTheDocument();
      expect(container.querySelector('.md-tile-vertical--large')).not.toBeInTheDocument();
    });

    it('applies small mode', () => {
      const { container } = render(<MdTileVertical heading="Title" mode="small" />);
      expect(container.querySelector('.md-tile-vertical--small')).toBeInTheDocument();
    });

    it('applies large mode', () => {
      const { container } = render(<MdTileVertical heading="Title" mode="large" />);
      expect(container.querySelector('.md-tile-vertical--large')).toBeInTheDocument();
    });
  });

  describe('themes', () => {
    it('applies primary theme by default', () => {
      const { container } = render(<MdTileVertical heading="Title" />);
      expect(container.querySelector('.md-tile-vertical--secondary')).not.toBeInTheDocument();
    });

    it('applies secondary theme', () => {
      const { container } = render(<MdTileVertical heading="Title" theme="secondary" />);
      expect(container.querySelector('.md-tile-vertical--secondary')).toBeInTheDocument();
    });
  });

  describe('states', () => {
    it('applies disabled state', () => {
      const { container } = render(<MdTileVertical heading="Title" disabled />);
      expect(container.querySelector('.md-tile-vertical--disabled')).toBeInTheDocument();
    });

    it('disables button when disabled', () => {
      render(<MdTileVertical heading="Title" disabled />);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('sets tabIndex -1 when disabled', () => {
      render(<MdTileVertical heading="Title" disabled />);
      expect(screen.getByRole('button')).toHaveAttribute('tabIndex', '-1');
    });

    it('shows loading spinner when loading', () => {
      const { container } = render(<MdTileVertical heading="Title" loading />);
      expect(container.querySelector('.md-loading-spinner')).toBeInTheDocument();
    });

    it('hides icon when loading', () => {
      render(<MdTileVertical heading="Title" icon={<span data-testid="icon">★</span>} loading />);
      expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('calls onClick when clicked', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<MdTileVertical heading="Title" onClick={onClick} />);

      await user.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalled();
    });

    it('prevents default when preventDefault is true', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<MdTileVertical heading="Title" preventDefault onClick={onClick} />);

      await user.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalled();
    });

    it('does not trigger onClick when disabled button is clicked', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<MdTileVertical heading="Title" disabled onClick={onClick} />);

      await user.click(screen.getByRole('button'));
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('link behavior', () => {
    it('sets href on anchor', () => {
      render(<MdTileVertical heading="Title" href="https://example.com" />);
      expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com');
    });

    it('applies disabled styling to link', () => {
      const { container } = render(<MdTileVertical heading="Title" href="/link" disabled />);
      expect(container.querySelector('.md-tile-vertical--disabled')).toBeInTheDocument();
    });

    it('sets tabIndex -1 on disabled link', () => {
      render(<MdTileVertical heading="Title" href="/link" disabled />);
      expect(screen.getByRole('link')).toHaveAttribute('tabIndex', '-1');
    });
  });

  describe('asChild', () => {
    it('renders custom element when asChild is true', () => {
      render(<MdTileVertical heading="Title" asChild asChildContent={<div data-testid="custom-element" />} />);
      expect(screen.getByTestId('custom-element')).toBeInTheDocument();
    });

    it('merges className with child element', () => {
      const { container } = render(
        <MdTileVertical heading="Title" asChild asChildContent={<div className="child-class" />} />,
      );
      expect(container.querySelector('.md-tile-vertical.child-class')).toBeInTheDocument();
    });
  });

  describe('accessibility', () => {
    it('has icon aria-hidden', () => {
      const { container } = render(<MdTileVertical heading="Title" icon={<span>★</span>} />);
      expect(container.querySelector('.md-tile-vertical__content-icon')).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('props forwarding', () => {
    it('applies custom className', () => {
      const { container } = render(<MdTileVertical heading="Title" className="custom-class" />);
      expect(container.querySelector('.md-tile-vertical')).toHaveClass('custom-class');
    });

    it('forwards other props to button', () => {
      render(<MdTileVertical heading="Title" data-testid="tile" />);
      expect(screen.getByTestId('tile')).toBeInTheDocument();
    });

    it('forwards props to anchor', () => {
      render(<MdTileVertical heading="Title" href="/link" target="_blank" />);
      expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    });
  });
});
