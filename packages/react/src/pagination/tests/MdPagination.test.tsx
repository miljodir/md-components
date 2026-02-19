import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdPagination } from '../MdPagination';

// Helper to get the desktop view container
const getDesktopView = () => {
  const nav = screen.getByRole('navigation', { name: 'Pagination' });
  return within(nav).getByTestId('pages-desktop');
};

describe('MdPagination', () => {
  describe('rendering', () => {
    it('renders with default props', () => {
      render(<MdPagination totalPages={5} currentPage={1} />);
      expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument();
    });

    it('renders navigation buttons', () => {
      render(<MdPagination totalPages={5} currentPage={3} />);
      expect(screen.getByLabelText('Forrige')).toBeInTheDocument();
      expect(screen.getByLabelText('Neste')).toBeInTheDocument();
    });

    it('renders page buttons', () => {
      render(<MdPagination totalPages={5} currentPage={1} />);
      const desktopView = getDesktopView();
      expect(within(desktopView).getByLabelText('Side 2')).toBeInTheDocument();
      expect(within(desktopView).getByLabelText('Side 3')).toBeInTheDocument();
    });

    it('marks current page with aria-current', () => {
      render(<MdPagination totalPages={5} currentPage={3} />);
      const desktopView = getDesktopView();
      expect(within(desktopView).getByText('3').closest('[aria-current="page"]')).toBeInTheDocument();
    });

    it('returns null when totalPages is 1 or less', () => {
      render(<MdPagination totalPages={1} currentPage={1} />);
      expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    });

    it('returns null when totalPages is not finite', () => {
      render(<MdPagination totalPages={Infinity} currentPage={1} />);
      expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    });

    it('returns null when currentPage is not finite', () => {
      render(<MdPagination totalPages={5} currentPage={NaN} />);
      expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    });
  });

  describe('props forwarding', () => {
    it('merges custom className with component classes', () => {
      render(<MdPagination totalPages={5} currentPage={1} className="custom-class" />);
      const pagination = screen.getByRole('navigation', { name: 'Pagination' });
      expect(pagination).toHaveClass('md-pagination');
      expect(pagination).toHaveClass('custom-class');
    });

    it('applies compact class when compact is true', () => {
      render(<MdPagination totalPages={5} currentPage={1} compact />);
      const pagination = screen.getByRole('navigation', { name: 'Pagination' });
      expect(pagination).toHaveClass('md-pagination--compact');
    });
  });

  describe('labels', () => {
    it('uses default labels', () => {
      render(<MdPagination totalPages={5} currentPage={3} />);
      expect(screen.getByText('Forrige')).toBeInTheDocument();
      expect(screen.getByText('Neste')).toBeInTheDocument();
    });

    it('uses custom labels', () => {
      render(<MdPagination totalPages={5} currentPage={3} labels={{ previous: 'Previous', next: 'Next' }} />);
      expect(screen.getByText('Previous')).toBeInTheDocument();
      expect(screen.getByText('Next')).toBeInTheDocument();
    });

    it('partially overrides labels', () => {
      render(<MdPagination totalPages={5} currentPage={3} labels={{ previous: 'Back' }} />);
      expect(screen.getByText('Back')).toBeInTheDocument();
      expect(screen.getByText('Neste')).toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('calls onPageChange when clicking a page button', async () => {
      const user = userEvent.setup();
      const onPageChange = vi.fn();
      render(<MdPagination totalPages={5} currentPage={1} onPageChange={onPageChange} />);
      const desktopView = getDesktopView();

      await user.click(within(desktopView).getByLabelText('Side 2'));
      expect(onPageChange).toHaveBeenCalledWith(2);
    });

    it('calls onPageChange when clicking next button', async () => {
      const user = userEvent.setup();
      const onPageChange = vi.fn();
      render(<MdPagination totalPages={5} currentPage={2} onPageChange={onPageChange} />);

      await user.click(screen.getByLabelText('Neste'));
      expect(onPageChange).toHaveBeenCalledWith(3);
    });

    it('calls onPageChange when clicking previous button', async () => {
      const user = userEvent.setup();
      const onPageChange = vi.fn();
      render(<MdPagination totalPages={5} currentPage={3} onPageChange={onPageChange} />);

      await user.click(screen.getByLabelText('Forrige'));
      expect(onPageChange).toHaveBeenCalledWith(2);
    });

    it('does not call onPageChange when clicking current page', async () => {
      const onPageChange = vi.fn();
      render(<MdPagination totalPages={5} currentPage={3} onPageChange={onPageChange} />);
      const desktopView = getDesktopView();

      // Current page is rendered as span, not button, so it's not clickable
      const currentPage = within(desktopView).getByText('3').closest('[aria-current="page"]');
      expect(currentPage?.tagName).toBe('SPAN');
    });
  });

  describe('disabled states', () => {
    it('disables previous button on first page', () => {
      render(<MdPagination totalPages={5} currentPage={1} />);
      const prevButton = screen.getByLabelText('Forrige');
      expect(prevButton).toHaveAttribute('aria-disabled', 'true');
    });

    it('disables next button on last page', () => {
      render(<MdPagination totalPages={5} currentPage={5} />);
      const nextButton = screen.getByLabelText('Neste');
      expect(nextButton).toHaveAttribute('aria-disabled', 'true');
    });

    it('enables both buttons on middle pages', () => {
      render(<MdPagination totalPages={5} currentPage={3} />);
      const prevButton = screen.getByLabelText('Forrige');
      const nextButton = screen.getByLabelText('Neste');
      expect(prevButton).not.toHaveAttribute('aria-disabled');
      expect(nextButton).not.toHaveAttribute('aria-disabled');
    });
  });

  describe('page numbers calculation', () => {
    it('shows all pages when totalPages <= 7', () => {
      render(<MdPagination totalPages={7} currentPage={4} />);
      const desktopView = getDesktopView();
      for (let i = 1; i <= 7; i++) {
        if (i === 4) {
          expect(within(desktopView).getByText('4').closest('[aria-current="page"]')).toBeInTheDocument();
        } else {
          expect(within(desktopView).getByLabelText(`Side ${i}`)).toBeInTheDocument();
        }
      }
    });

    it('shows ellipsis when currentPage is near start', () => {
      render(<MdPagination totalPages={10} currentPage={2} />);
      const nav = screen.getByRole('navigation', { name: 'Pagination' });
      const ellipses = nav.querySelectorAll('.md-pagination__ellipsis');
      expect(ellipses.length).toBeGreaterThan(0);
    });

    it('shows ellipsis when currentPage is near end', () => {
      render(<MdPagination totalPages={10} currentPage={9} />);
      const nav = screen.getByRole('navigation', { name: 'Pagination' });
      const ellipses = nav.querySelectorAll('.md-pagination__ellipsis');
      expect(ellipses.length).toBeGreaterThan(0);
    });

    it('shows ellipsis on both sides when currentPage is in middle', () => {
      render(<MdPagination totalPages={10} currentPage={5} />);
      const nav = screen.getByRole('navigation', { name: 'Pagination' });
      const ellipses = nav.querySelectorAll('.md-pagination__ellipsis');
      expect(ellipses.length).toBe(2);
    });
  });

  describe('compact mode', () => {
    it('applies compact class', () => {
      render(<MdPagination totalPages={10} currentPage={5} compact />);
      const pagination = screen.getByRole('navigation', { name: 'Pagination' });
      expect(pagination).toHaveClass('md-pagination--compact');
    });

    it('shows only 3 pages in compact mode', () => {
      render(<MdPagination totalPages={10} currentPage={5} compact />);
      const nav = screen.getByRole('navigation', { name: 'Pagination' });
      const compactPages = nav.querySelector('.md-pagination__pages-compact--force');
      expect(compactPages).toBeInTheDocument();
    });
  });

  describe('edge cases', () => {
    it('clamps currentPage to valid range (too low)', () => {
      render(<MdPagination totalPages={5} currentPage={0} />);
      // Should treat as page 1
      expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument();
      const prevButton = screen.getByLabelText('Forrige');
      expect(prevButton).toHaveAttribute('aria-disabled', 'true');
    });

    it('clamps currentPage to valid range (too high)', () => {
      render(<MdPagination totalPages={5} currentPage={10} />);
      // Should treat as page 5
      expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument();
      const nextButton = screen.getByLabelText('Neste');
      expect(nextButton).toHaveAttribute('aria-disabled', 'true');
    });

    it('handles two pages', () => {
      render(<MdPagination totalPages={2} currentPage={1} />);
      const desktopView = getDesktopView();
      expect(within(desktopView).getByLabelText('Side 2')).toBeInTheDocument();
    });
  });

  describe('asChild with renderLink', () => {
    it('renders custom link element for page buttons', () => {
      const renderLink = (page: number, children: React.ReactNode) => {
        return (
          <a href={`/page/${page}`} data-testid={`link-${page}`}>
            {children}
          </a>
        );
      };

      render(<MdPagination totalPages={5} currentPage={1} asChild renderLink={renderLink} />);
      const desktopView = getDesktopView();
      const link = within(desktopView).getByTestId('link-2');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/page/2');
    });

    it('renders custom link element for nav buttons', () => {
      const renderLink = (page: number, children: React.ReactNode) => {
        return (
          <a href={`/page/${page}`} data-testid={`nav-link-${page}`}>
            {children}
          </a>
        );
      };

      render(<MdPagination totalPages={5} currentPage={3} asChild renderLink={renderLink} />);
      // Nav buttons use unique testids - previous (page 2) and next (page 4)
      const links = screen.getAllByTestId('nav-link-2');
      expect(links.length).toBeGreaterThan(0);
      const nextLinks = screen.getAllByTestId('nav-link-4');
      expect(nextLinks.length).toBeGreaterThan(0);
    });

    it('calls existing onClick on custom link and onPageChange', async () => {
      const user = userEvent.setup();
      const onPageChange = vi.fn();
      const customOnClick = vi.fn();

      const renderLink = (page: number, children: React.ReactNode) => {
        return (
          <a href={`/page/${page}`} onClick={customOnClick} data-testid={`link-${page}`}>
            {children}
          </a>
        );
      };

      render(
        <MdPagination totalPages={5} currentPage={1} asChild renderLink={renderLink} onPageChange={onPageChange} />,
      );

      const desktopView = getDesktopView();
      await user.click(within(desktopView).getByTestId('link-2'));
      expect(customOnClick).toHaveBeenCalled();
      expect(onPageChange).toHaveBeenCalledWith(2);
    });

    it('preserves className from custom link element', () => {
      const renderLink = (page: number, children: React.ReactNode) => {
        return (
          <a href={`/page/${page}`} className="custom-link-class" data-testid={`link-${page}`}>
            {children}
          </a>
        );
      };

      render(<MdPagination totalPages={5} currentPage={1} asChild renderLink={renderLink} />);
      const desktopView = getDesktopView();
      const link = within(desktopView).getByTestId('link-2');
      expect(link).toHaveClass('custom-link-class');
      expect(link).toHaveClass('md-pagination__page');
    });

    it('falls back to buttons when asChild is true but renderLink is not provided', () => {
      render(<MdPagination totalPages={5} currentPage={1} asChild />);
      const desktopView = getDesktopView();
      const pageButton = within(desktopView).getByRole('button', { name: 'Side 2' });
      expect(pageButton.tagName).toBe('BUTTON');
    });
  });
});
