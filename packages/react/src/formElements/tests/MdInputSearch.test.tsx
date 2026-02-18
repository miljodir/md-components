import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdInputSearch } from '../MdInputSearch';

describe('MdInputSearch', () => {
  describe('rendering', () => {
    it('renders search input', () => {
      render(<MdInputSearch onSearch={() => {}} />);
      expect(screen.getByRole('searchbox')).toBeInTheDocument();
    });

    it('renders label', () => {
      render(<MdInputSearch label="Search" onSearch={() => {}} />);
      expect(screen.getByText('Search')).toBeInTheDocument();
    });

    it('renders with placeholder', () => {
      render(<MdInputSearch placeholder="Enter search term" onSearch={() => {}} />);
      expect(screen.getByPlaceholderText('Enter search term')).toBeInTheDocument();
    });

    it('renders support text', () => {
      render(<MdInputSearch supportText="Type to search" onSearch={() => {}} />);
      expect(screen.getByText('Type to search')).toBeInTheDocument();
    });

    it('renders search button by default', () => {
      render(<MdInputSearch onSearch={() => {}} />);
      expect(screen.getByRole('button', { name: /søk/i })).toBeInTheDocument();
    });

    it('hides search button when button=false', () => {
      render(<MdInputSearch button={false} onSearch={() => {}} />);
      expect(screen.queryByRole('button', { name: /søk/i })).not.toBeInTheDocument();
    });

    it('shows prefix icon when button=false', () => {
      const { container } = render(<MdInputSearch button={false} onSearch={() => {}} />);
      expect(container.querySelector('.md-inputsearch__prefix')).toBeInTheDocument();
    });

    it('does not render label section without label or helpText', () => {
      const { container } = render(<MdInputSearch onSearch={() => {}} />);
      expect(container.querySelector('.md-inputsearch__label-wrapper')).not.toBeInTheDocument();
    });
  });

  describe('modes', () => {
    it('applies medium mode by default', () => {
      const { container } = render(<MdInputSearch onSearch={() => {}} />);
      expect(container.querySelector('.md-inputsearch__wrapper')).toBeInTheDocument();
      expect(container.querySelector('.md-inputsearch__wrapper--small')).not.toBeInTheDocument();
      expect(container.querySelector('.md-inputsearch__wrapper--large')).not.toBeInTheDocument();
    });

    it('applies small mode', () => {
      const { container } = render(<MdInputSearch mode="small" onSearch={() => {}} />);
      expect(container.querySelector('.md-inputsearch__wrapper--small')).toBeInTheDocument();
    });

    it('applies large mode', () => {
      const { container } = render(<MdInputSearch mode="large" onSearch={() => {}} />);
      expect(container.querySelector('.md-inputsearch__wrapper--large')).toBeInTheDocument();
    });

    it('applies button modifier', () => {
      const { container } = render(<MdInputSearch button onSearch={() => {}} />);
      expect(container.querySelector('.md-inputsearch--button')).toBeInTheDocument();
    });

    it('applies has-prefix modifier when no button', () => {
      const { container } = render(<MdInputSearch button={false} onSearch={() => {}} />);
      expect(container.querySelector('.md-inputsearch--has-prefix')).toBeInTheDocument();
    });
  });

  describe('help text', () => {
    it('renders help button when helpText provided', () => {
      const { container } = render(<MdInputSearch label="Search" helpText="Search help" onSearch={() => {}} />);
      expect(container.querySelector('.md-helpbutton')).toBeInTheDocument();
    });

    it('shows help text when help button is clicked', async () => {
      const user = userEvent.setup();
      const { container } = render(<MdInputSearch label="Search" helpText="Search help" onSearch={() => {}} />);

      const helpButton = container.querySelector('.md-helpbutton') as HTMLElement;
      await user.click(helpButton);
      expect(screen.getByText('Search help')).toBeInTheDocument();
    });

    it('uses custom helpTextFor label', () => {
      const { container } = render(
        <MdInputSearch label="Search" helpText="Help" labels={{ helpTextFor: 'Help for' }} onSearch={() => {}} />,
      );

      const helpButton = container.querySelector('.md-helpbutton') as HTMLElement;
      expect(helpButton).toHaveAttribute('aria-label', 'Help for Search');
    });
  });

  describe('search functionality', () => {
    it('calls onSearch when button is clicked', async () => {
      const user = userEvent.setup();
      const onSearch = vi.fn();
      render(<MdInputSearch onSearch={onSearch} />);

      const input = screen.getByRole('searchbox');
      await user.type(input, 'test query');

      const button = screen.getByRole('button', { name: /søk/i });
      await user.click(button);
      expect(onSearch).toHaveBeenCalledWith('test query');
    });

    it('calls onSearch when form is submitted', async () => {
      const user = userEvent.setup();
      const onSearch = vi.fn();
      render(<MdInputSearch onSearch={onSearch} />);

      const input = screen.getByRole('searchbox');
      await user.type(input, 'test query{Enter}');
      expect(onSearch).toHaveBeenCalledWith('test query');
    });

    it('calls onSearch with empty string when input is empty', async () => {
      const user = userEvent.setup();
      const onSearch = vi.fn();
      render(<MdInputSearch onSearch={onSearch} />);

      const button = screen.getByRole('button', { name: /søk/i });
      await user.click(button);
      expect(onSearch).toHaveBeenCalledWith('');
    });
  });

  describe('accessibility', () => {
    it('associates label with input', () => {
      render(<MdInputSearch id="search-input" label="Search" onSearch={() => {}} />);
      const label = screen.getByText('Search');
      expect(label).toHaveAttribute('for', 'search-input');
    });

    it('includes aria-describedby for help text', () => {
      render(<MdInputSearch id="search" label="Search" helpText="Help text" onSearch={() => {}} />);
      const input = screen.getByRole('searchbox');
      expect(input).toHaveAttribute('aria-describedby', expect.stringContaining('help-text'));
    });

    it('includes aria-describedby for support text', () => {
      render(<MdInputSearch id="search" supportText="Support text" onSearch={() => {}} />);
      const input = screen.getByRole('searchbox');
      expect(input).toHaveAttribute('aria-describedby', expect.stringContaining('support'));
    });

    it('has type="search"', () => {
      render(<MdInputSearch onSearch={() => {}} />);
      const input = screen.getByRole('searchbox');
      expect(input).toHaveAttribute('type', 'search');
    });
  });

  describe('ref forwarding', () => {
    it('forwards ref to input element', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<MdInputSearch ref={ref} onSearch={() => {}} />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe('props forwarding', () => {
    it('applies custom className', () => {
      const { container } = render(<MdInputSearch className="custom-class" onSearch={() => {}} />);
      expect(container.querySelector('.md-inputsearch.custom-class')).toBeInTheDocument();
    });

    it('applies custom outerWrapperClass', () => {
      const { container } = render(<MdInputSearch outerWrapperClass="outer-custom" onSearch={() => {}} />);
      expect(container.querySelector('.md-inputsearch__outer-wrapper')).toHaveClass('outer-custom');
    });

    it('applies custom id', () => {
      render(<MdInputSearch id="custom-search" onSearch={() => {}} />);
      expect(screen.getByRole('searchbox')).toHaveAttribute('id', 'custom-search');
    });

    it('forwards other props to input', () => {
      render(<MdInputSearch disabled onSearch={() => {}} />);
      expect(screen.getByRole('searchbox')).toBeDisabled();
    });
  });
});
