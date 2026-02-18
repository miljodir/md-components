import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { MdTab } from '../MdTab';

describe('MdTab', () => {
  describe('rendering', () => {
    it('renders children', () => {
      render(<MdTab title="Test Tab">Tab content</MdTab>);
      expect(screen.getByText('Tab content')).toBeInTheDocument();
    });

    it('renders complex children', () => {
      render(
        <MdTab title="Test Tab">
          <div data-testid="complex-content">
            <span>Nested content</span>
          </div>
        </MdTab>,
      );
      expect(screen.getByTestId('complex-content')).toBeInTheDocument();
      expect(screen.getByText('Nested content')).toBeInTheDocument();
    });

    it('accepts title prop', () => {
      const { container } = render(<MdTab title="My Title">Content</MdTab>);
      // MdTab renders children directly, title is used by parent MdTabs
      expect(container).toBeInTheDocument();
    });

    it('accepts disabled prop', () => {
      const { container } = render(
        <MdTab title="Disabled Tab" disabled>
          Content
        </MdTab>,
      );
      // MdTab renders children directly, disabled is used by parent MdTabs
      expect(container).toBeInTheDocument();
    });
  });
});
