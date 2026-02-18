import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { MdLoadingSpinner } from '../MdLoadingSpinner';

describe('MdLoadingSpinner', () => {
  describe('rendering', () => {
    it('renders spinner', () => {
      const { container } = render(<MdLoadingSpinner />);
      expect(container.querySelector('.md-loading-spinner')).toBeInTheDocument();
    });

    it('renders visually hidden loading text for screen readers', () => {
      render(<MdLoadingSpinner />);
      // The text "Laster.." should be visually hidden but present for screen readers
      expect(screen.getByText('Laster..')).toBeInTheDocument();
    });
  });

  describe('positions', () => {
    it('applies center position by default', () => {
      const { container } = render(<MdLoadingSpinner />);
      expect(container.querySelector('.md-loading-spinner__container')).not.toHaveClass(
        'md-loading-spinner__container--left',
      );
      expect(container.querySelector('.md-loading-spinner__container')).not.toHaveClass(
        'md-loading-spinner__container--right',
      );
    });

    it('applies left position', () => {
      const { container } = render(<MdLoadingSpinner position="left" />);
      expect(container.querySelector('.md-loading-spinner__container--left')).toBeInTheDocument();
    });

    it('applies right position', () => {
      const { container } = render(<MdLoadingSpinner position="right" />);
      expect(container.querySelector('.md-loading-spinner__container--right')).toBeInTheDocument();
    });
  });

  describe('size', () => {
    it('accepts custom size', () => {
      const { container } = render(<MdLoadingSpinner size={48} />);
      const spinner = container.querySelector('.md-loading-spinner');
      expect(spinner).toHaveAttribute('width', '48');
      expect(spinner).toHaveAttribute('height', '48');
    });
  });

  describe('props forwarding', () => {
    it('merges custom className', () => {
      const { container } = render(<MdLoadingSpinner className="custom-class" />);
      expect(container.querySelector('.md-loading-spinner__container')).toHaveClass('custom-class');
    });

    it('forwards data-* attributes', () => {
      render(<MdLoadingSpinner data-testid="spinner" />);
      expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });
  });

  describe('accessibility', () => {
    it('spinner icon is aria-hidden', () => {
      const { container } = render(<MdLoadingSpinner />);
      expect(container.querySelector('.md-loading-spinner')).toHaveAttribute('aria-hidden', 'true');
    });
  });
});
