import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { MdSkipToMainContent } from '../MdSkipToMainContent';

describe('MdSkipToMainContent', () => {
  describe('rendering', () => {
    it('renders a link', () => {
      render(<MdSkipToMainContent href="#main" />);
      expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it('renders default text', () => {
      render(<MdSkipToMainContent href="#main" />);
      expect(screen.getByText('Hopp til hovedinnhold')).toBeInTheDocument();
    });

    it('renders custom children text', () => {
      render(<MdSkipToMainContent href="#main">Skip to content</MdSkipToMainContent>);
      expect(screen.getByText('Skip to content')).toBeInTheDocument();
    });

    it('renders children as ReactNode', () => {
      render(
        <MdSkipToMainContent href="#main">
          <span data-testid="custom">Custom content</span>
        </MdSkipToMainContent>,
      );
      expect(screen.getByTestId('custom')).toBeInTheDocument();
    });
  });

  describe('href', () => {
    it('sets href attribute', () => {
      render(<MdSkipToMainContent href="#main-content" />);
      expect(screen.getByRole('link')).toHaveAttribute('href', '#main-content');
    });
  });

  describe('styling', () => {
    it('has skip-to-main-content class', () => {
      render(<MdSkipToMainContent href="#main" />);
      expect(screen.getByRole('link')).toHaveClass('md-skip-to-main-content');
    });
  });

  describe('props forwarding', () => {
    it('forwards id', () => {
      render(<MdSkipToMainContent href="#main" id="skip-link" />);
      expect(screen.getByRole('link')).toHaveAttribute('id', 'skip-link');
    });

    it('forwards aria-label', () => {
      render(<MdSkipToMainContent href="#main" aria-label="Skip navigation" />);
      expect(screen.getByRole('link')).toHaveAttribute('aria-label', 'Skip navigation');
    });

    it('forwards data-* attributes', () => {
      render(<MdSkipToMainContent href="#main" data-testid="skip" />);
      expect(screen.getByTestId('skip')).toBeInTheDocument();
    });
  });

  describe('accessibility', () => {
    it('is a link element for keyboard navigation', () => {
      render(<MdSkipToMainContent href="#main" />);
      const link = screen.getByRole('link');
      expect(link.tagName).toBe('A');
    });

    it('has descriptive text', () => {
      render(<MdSkipToMainContent href="#main" />);
      expect(screen.getByRole('link')).toHaveAccessibleName('Hopp til hovedinnhold');
    });
  });
});
