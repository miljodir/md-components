/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom/vitest" />
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { MdBadge } from '../MdBadge';

describe('MdBadge', () => {
  describe('rendering', () => {
    it('renders as dot badge when count is not provided', () => {
      const { container } = render(<MdBadge size="medium" />);
      expect(container.querySelector('.md-badge--dot')).toBeInTheDocument();
    });

    it('renders as dot badge when count is null', () => {
      const { container } = render(<MdBadge size="medium" count={null} />);
      expect(container.querySelector('.md-badge--dot')).toBeInTheDocument();
    });

    it('renders count as text content', () => {
      render(<MdBadge size="medium" count={5} />);
      expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('renders count of 0 without dot class', () => {
      const { container } = render(<MdBadge size="medium" count={0} />);
      expect(screen.getByText('0')).toBeInTheDocument();
      expect(container.querySelector('.md-badge--dot')).not.toBeInTheDocument();
    });

    it('renders a span element with md-badge class', () => {
      const { container } = render(<MdBadge size="medium" />);
      expect(container.querySelector('span.md-badge')).toBeInTheDocument();
    });
  });

  describe('edge cases', () => {
    it('shows count when below maxCount', () => {
      render(<MdBadge size="medium" count={5} maxCount={10} />);
      expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('shows count when equal to maxCount', () => {
      render(<MdBadge size="medium" count={10} maxCount={10} />);
      expect(screen.getByText('10')).toBeInTheDocument();
    });

    it('shows maxCount+ when count exceeds maxCount', () => {
      render(<MdBadge size="medium" count={99} maxCount={10} />);
      expect(screen.getByText('10+')).toBeInTheDocument();
    });

    it('shows full count when maxCount is not set', () => {
      render(<MdBadge size="medium" count={999} />);
      expect(screen.getByText('999')).toBeInTheDocument();
    });
  });

  describe('size', () => {
    it.each(['small', 'medium', 'large'] as const)('applies %s size class', (size) => {
      const { container } = render(<MdBadge size={size} />);
      expect(container.querySelector(`.md-badge--${size}`)).toBeInTheDocument();
    });
  });

  describe('theme', () => {
    it.each(['primary', 'secondary', 'error', 'warning', 'success', 'info'] as const)(
      'applies %s theme class',
      (theme) => {
        const { container } = render(<MdBadge size="medium" theme={theme} />);
        expect(container.querySelector(`.md-badge--${theme}`)).toBeInTheDocument();
      },
    );

    it('applies no theme class when theme is not provided', () => {
      const { container } = render(<MdBadge size="medium" />);
      const badge = container.querySelector('.md-badge');
      expect(badge?.className).not.toMatch(
        /md-badge--(primary|secondary|error|warning|success|info)/,
      );
    });
  });

  describe('props forwarding', () => {
    it('merges custom className with component classes', () => {
      const { container } = render(<MdBadge size="medium" className="custom-class" />);
      const badge = container.querySelector('.md-badge');
      expect(badge).toHaveClass('md-badge', 'custom-class');
    });

    it('forwards id attribute', () => {
      const { container } = render(<MdBadge size="medium" id="my-badge" />);
      expect(container.querySelector('#my-badge')).toBeInTheDocument();
    });

    it('forwards aria-label attribute', () => {
      const { container } = render(<MdBadge size="medium" count={3} aria-label="3 notifications" />);
      expect(container.querySelector('.md-badge')).toHaveAttribute('aria-label', '3 notifications');
    });

    it('forwards data-* attributes', () => {
      const { container } = render(<MdBadge size="medium" data-testid="badge" />);
      expect(container.querySelector('[data-testid="badge"]')).toBeInTheDocument();
    });
  });
});
