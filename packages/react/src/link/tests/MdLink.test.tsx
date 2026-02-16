import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdLink } from '../MdLink';

describe('MdLink', () => {
  describe('rendering', () => {
    it('renders as anchor when href is provided', () => {
      render(<MdLink href="/page">Link text</MdLink>);
      expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it('renders as button when no href is provided', () => {
      render(<MdLink>Button link</MdLink>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders children', () => {
      render(<MdLink href="/page">Click me</MdLink>);
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('renders with icon', () => {
      const { container } = render(
        <MdLink href="/page" icon={<span data-testid="icon" />}>
          Link
        </MdLink>,
      );
      expect(container.querySelector('.md-link__icon')).toBeInTheDocument();
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });
  });

  describe('anchor behavior', () => {
    it('sets href attribute', () => {
      render(<MdLink href="https://example.com">External</MdLink>);
      expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com');
    });

    it('forwards target attribute', () => {
      render(
        <MdLink href="/page" target="_blank">
          New tab
        </MdLink>,
      );
      expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    });

    it('forwards rel attribute', () => {
      render(
        <MdLink href="/page" rel="noopener">
          Safe link
        </MdLink>,
      );
      expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener');
    });
  });

  describe('button behavior', () => {
    it('handles click events', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<MdLink onClick={onClick}>Click me</MdLink>);

      await user.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('has type="button" by default', () => {
      render(<MdLink>Button</MdLink>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });
  });

  describe('asChild pattern', () => {
    it('renders custom element with asChild', () => {
      render(
        <MdLink asChild asChildContent={<a href="/custom">Custom Link</a>}>
          Content
        </MdLink>,
      );
      expect(screen.getByRole('link')).toHaveTextContent('Content');
    });
  });

  describe('props forwarding', () => {
    it('forwards className', () => {
      render(
        <MdLink href="/page" className="custom-class">
          Link
        </MdLink>,
      );
      expect(screen.getByRole('link')).toHaveClass('md-link');
      expect(screen.getByRole('link')).toHaveClass('custom-class');
    });

    it('forwards id', () => {
      render(
        <MdLink href="/page" id="my-link">
          Link
        </MdLink>,
      );
      expect(screen.getByRole('link')).toHaveAttribute('id', 'my-link');
    });

    it('forwards aria-label', () => {
      render(
        <MdLink href="/page" aria-label="Navigate to page">
          Link
        </MdLink>,
      );
      expect(screen.getByRole('link')).toHaveAttribute('aria-label', 'Navigate to page');
    });
  });

  describe('ref forwarding', () => {
    it('forwards ref to anchor element', () => {
      const ref = React.createRef<HTMLAnchorElement>();
      render(
        <MdLink href="/page" ref={ref}>
          Link
        </MdLink>,
      );
      expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
    });

    it('forwards ref to button element', () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<MdLink ref={ref}>Button</MdLink>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });
});
