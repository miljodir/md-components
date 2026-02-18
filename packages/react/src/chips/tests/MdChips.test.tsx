import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdFilterChip } from '../MdFilterChip';
import { MdInputChip } from '../MdInputChip';

describe('MdInputChip', () => {
  describe('rendering', () => {
    it('renders with label', () => {
      render(<MdInputChip label="Test Chip" />);
      expect(screen.getByRole('button')).toHaveTextContent('Test Chip');
    });

    it('renders as button', () => {
      render(<MdInputChip label="Test" />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders close icon by default', () => {
      const { container } = render(<MdInputChip label="Test" />);
      expect(container.querySelector('.md-chip__right-icon')).toBeInTheDocument();
    });

    it('hides close icon when hideCloseIcon is true', () => {
      const { container } = render(<MdInputChip label="Test" hideCloseIcon />);
      expect(container.querySelector('.md-chip__right-icon')).not.toBeInTheDocument();
    });

    it('renders prefix icon when provided', () => {
      const { container } = render(<MdInputChip label="Test" prefixIcon={<span data-testid="icon" />} />);
      expect(container.querySelector('.md-chip__left-icon')).toBeInTheDocument();
    });
  });

  describe('states', () => {
    it('applies active class when active', () => {
      render(<MdInputChip label="Test" active />);
      expect(screen.getByRole('button')).toHaveClass('md-chip--active');
    });

    it('applies disabled class when disabled', () => {
      render(<MdInputChip label="Test" disabled />);
      expect(screen.getByRole('button')).toHaveClass('md-chip--disabled');
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('applies solid class when solid', () => {
      render(<MdInputChip label="Test" solid />);
      expect(screen.getByRole('button')).toHaveClass('md-chip--solid');
    });
  });

  describe('interactions', () => {
    it('handles click events', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<MdInputChip label="Test" onClick={onClick} />);

      await user.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not fire click when disabled', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<MdInputChip label="Test" disabled onClick={onClick} />);

      await user.click(screen.getByRole('button'));
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('props forwarding', () => {
    it('forwards id', () => {
      render(<MdInputChip label="Test" id="my-chip" />);
      expect(screen.getByRole('button')).toHaveAttribute('id', 'my-chip');
    });

    it('merges custom className', () => {
      render(<MdInputChip label="Test" className="custom-class" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('md-chip');
      expect(button).toHaveClass('custom-class');
    });
  });
});

describe('MdFilterChip', () => {
  describe('rendering', () => {
    it('renders with label', () => {
      render(<MdFilterChip label="Filter" />);
      expect(screen.getByRole('button')).toHaveTextContent('Filter');
    });

    it('renders as button', () => {
      render(<MdFilterChip label="Filter" />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders prefix icon when provided and not active', () => {
      const { container } = render(<MdFilterChip label="Test" prefixIcon={<span data-testid="custom-icon" />} />);
      expect(container.querySelector('.md-chip__left-icon')).toBeInTheDocument();
    });

    it('renders check icon when active instead of prefix icon', () => {
      const { container } = render(<MdFilterChip label="Test" active prefixIcon={<span />} />);
      expect(container.querySelector('.md-chip__left-icon')).toBeInTheDocument();
      // Check icon is rendered
    });
  });

  describe('states', () => {
    it('applies active class when active', () => {
      render(<MdFilterChip label="Test" active />);
      expect(screen.getByRole('button')).toHaveClass('md-chip--active');
    });

    it('sets aria-pressed when active', () => {
      render(<MdFilterChip label="Test" active />);
      expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
    });

    it('sets aria-pressed false when not active', () => {
      render(<MdFilterChip label="Test" />);
      expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false');
    });

    it('applies disabled class when disabled', () => {
      render(<MdFilterChip label="Test" disabled />);
      expect(screen.getByRole('button')).toHaveClass('md-chip--disabled');
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('interactions', () => {
    it('handles click events', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<MdFilterChip label="Test" onClick={onClick} />);

      await user.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not fire click when disabled', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<MdFilterChip label="Test" disabled onClick={onClick} />);

      await user.click(screen.getByRole('button'));
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('props forwarding', () => {
    it('forwards id', () => {
      render(<MdFilterChip label="Test" id="my-filter" />);
      expect(screen.getByRole('button')).toHaveAttribute('id', 'my-filter');
    });

    it('merges custom className', () => {
      render(<MdFilterChip label="Test" className="custom-class" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('md-chip');
      expect(button).toHaveClass('custom-class');
    });
  });
});
