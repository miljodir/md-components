import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import MdComboBox from '../MdComboBox';

const mockOptions = [
  { value: 'opt1', text: 'Option 1' },
  { value: 'opt2', text: 'Option 2' },
  { value: 'opt3', text: 'Option 3' },
];

describe('MdComboBox', () => {
  describe('rendering', () => {
    it('renders combobox', () => {
      const { container } = render(<MdComboBox options={mockOptions} value="" onSelectOption={() => {}} />);
      expect(container.querySelector('.md-combobox')).toBeInTheDocument();
    });

    it('renders input with combobox role', () => {
      render(<MdComboBox options={mockOptions} value="" onSelectOption={() => {}} />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('renders label', () => {
      render(<MdComboBox label="Select option" options={mockOptions} value="" onSelectOption={() => {}} />);
      expect(screen.getByText('Select option')).toBeInTheDocument();
    });

    it('renders placeholder when no value selected', () => {
      render(<MdComboBox placeholder="Choose one" options={mockOptions} value="" onSelectOption={() => {}} />);
      expect(screen.getByPlaceholderText('Choose one')).toBeInTheDocument();
    });

    it('shows search icon by default', () => {
      const { container } = render(<MdComboBox options={mockOptions} value="" onSelectOption={() => {}} />);
      expect(container.querySelector('.md-combobox__input--before')).toBeInTheDocument();
    });

    it('hides prefix icon when hidePrefixIcon is true', () => {
      const { container } = render(
        <MdComboBox options={mockOptions} value="" onSelectOption={() => {}} hidePrefixIcon />,
      );
      expect(container.querySelector('.md-combobox__input--before')).not.toBeInTheDocument();
    });

    it('does not render label section without label or helpText', () => {
      const { container } = render(<MdComboBox options={mockOptions} value="" onSelectOption={() => {}} />);
      expect(container.querySelector('.md-combobox__label-wrapper')).not.toBeInTheDocument();
    });
  });

  describe('modes', () => {
    it('applies medium mode by default', () => {
      const { container } = render(<MdComboBox options={mockOptions} value="" onSelectOption={() => {}} />);
      expect(container.querySelector('.md-combobox--medium')).toBeInTheDocument();
    });

    it('applies large mode', () => {
      const { container } = render(
        <MdComboBox mode="large" options={mockOptions} value="" onSelectOption={() => {}} />,
      );
      expect(container.querySelector('.md-combobox--large')).toBeInTheDocument();
    });

    it('applies small mode', () => {
      const { container } = render(
        <MdComboBox mode="small" options={mockOptions} value="" onSelectOption={() => {}} />,
      );
      expect(container.querySelector('.md-combobox--small')).toBeInTheDocument();
    });
  });

  describe('states', () => {
    it('disables input when disabled', () => {
      render(<MdComboBox options={mockOptions} value="" onSelectOption={() => {}} disabled />);
      expect(screen.getByRole('combobox')).toBeDisabled();
    });

    it('applies disabled wrapper class', () => {
      const { container } = render(<MdComboBox options={mockOptions} value="" onSelectOption={() => {}} disabled />);
      expect(container.querySelector('.md-combobox__input-wrapper--disabled')).toBeInTheDocument();
    });

    it('shows error state', () => {
      const { container } = render(
        <MdComboBox options={mockOptions} value="" onSelectOption={() => {}} error errorText="Error" />,
      );
      expect(container.querySelector('.md-combobox--has-error')).toBeInTheDocument();
    });

    it('displays error text', () => {
      render(
        <MdComboBox options={mockOptions} value="" onSelectOption={() => {}} error errorText="Invalid selection" />,
      );
      expect(screen.getByText('Invalid selection')).toBeInTheDocument();
    });

    it('shows loading spinner when isSearching', () => {
      const { container } = render(<MdComboBox options={mockOptions} value="" onSelectOption={() => {}} isSearching />);
      expect(container.querySelector('.md-loading-spinner')).toBeInTheDocument();
    });

    it('shows has-value class when value is selected', () => {
      const { container } = render(<MdComboBox options={mockOptions} value="opt1" onSelectOption={() => {}} />);
      expect(container.querySelector('.md-combobox--has-value')).toBeInTheDocument();
    });
  });

  describe('help text', () => {
    it('renders help button when helpText provided', () => {
      const { container } = render(
        <MdComboBox label="Options" options={mockOptions} value="" onSelectOption={() => {}} helpText="Help" />,
      );
      expect(container.querySelector('.md-helpbutton')).toBeInTheDocument();
    });

    it('shows help text when help button is clicked', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <MdComboBox label="Options" options={mockOptions} value="" onSelectOption={() => {}} helpText="Select help" />,
      );

      const helpButton = container.querySelector('.md-helpbutton') as HTMLElement;
      await user.click(helpButton);
      expect(screen.getByText('Select help')).toBeInTheDocument();
    });

    it('uses custom helpTextFor label', () => {
      const { container } = render(
        <MdComboBox
          label="Options"
          options={mockOptions}
          value=""
          onSelectOption={() => {}}
          helpText="Help"
          labels={{ helpTextFor: 'Help for' }}
        />,
      );

      const helpButton = container.querySelector('.md-helpbutton') as HTMLElement;
      expect(helpButton).toHaveAttribute('aria-label', 'Help for Options');
    });
  });

  describe('reset functionality', () => {
    it('shows reset button when allowReset is true and value is selected', () => {
      const { container } = render(
        <MdComboBox options={mockOptions} value="opt1" onSelectOption={() => {}} allowReset />,
      );
      expect(container.querySelector('.md-combobox__reset')).toBeInTheDocument();
    });

    it('hides reset button when no value is selected', () => {
      const { container } = render(<MdComboBox options={mockOptions} value="" onSelectOption={() => {}} allowReset />);
      expect(container.querySelector('.md-combobox__reset')).not.toBeInTheDocument();
    });

    it('calls onSelectOption with empty when reset is clicked', async () => {
      const user = userEvent.setup();
      const onSelect = vi.fn();
      const { container } = render(
        <MdComboBox options={mockOptions} value="opt1" onSelectOption={onSelect} allowReset />,
      );

      const resetButton = container.querySelector('.md-combobox__reset') as HTMLElement;
      await user.click(resetButton);
      expect(onSelect).toHaveBeenCalledWith('');
    });
  });

  describe('multi-select', () => {
    it('renders count indicator for multiple selections', () => {
      const { container } = render(
        <MdComboBox options={mockOptions} value={['opt1', 'opt2']} onSelectOption={() => {}} />,
      );
      const afterDiv = container.querySelector('.md-combobox__input--after');
      expect(afterDiv).toHaveTextContent('+2');
    });

    it('shows has-value class with array value', () => {
      const { container } = render(<MdComboBox options={mockOptions} value={['opt1']} onSelectOption={() => {}} />);
      expect(container.querySelector('.md-combobox--has-value')).toBeInTheDocument();
    });
  });

  describe('dropdown', () => {
    it('opens dropdown on input focus and shows options', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<MdComboBox options={mockOptions} value="" onSelectOption={() => {}} />);

      const input = screen.getByRole('combobox');
      await user.click(input);

      await waitFor(() => {
        expect(baseElement.querySelector('.md-combobox__popover')).toBeInTheDocument();
      });
    });

    it('shows no results text when no options match', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(
        <MdComboBox options={mockOptions} value="" onSelectOption={() => {}} noResultsText="No matches" />,
      );

      const input = screen.getByRole('combobox');
      await user.click(input);
      await user.type(input, 'xyz');

      await waitFor(() => {
        expect(baseElement).toHaveTextContent('No matches');
      });
    });

    it('applies custom dropdownHeight', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(
        <MdComboBox options={mockOptions} value="" onSelectOption={() => {}} dropdownHeight={200} />,
      );

      const input = screen.getByRole('combobox');
      await user.click(input);

      await waitFor(() => {
        const popover = baseElement.querySelector('.md-combobox__popover') as HTMLElement;
        expect(popover).toHaveStyle('max-height: 200px');
      });
    });
  });

  describe('toggle button', () => {
    it('renders toggle button', () => {
      const { container } = render(<MdComboBox options={mockOptions} value="" onSelectOption={() => {}} />);
      expect(container.querySelector('.md-combobox__toggle')).toBeInTheDocument();
    });

    it('uses custom openClose label', () => {
      const { container } = render(
        <MdComboBox
          options={mockOptions}
          value=""
          onSelectOption={() => {}}
          labels={{ openClose: 'Toggle dropdown' }}
        />,
      );
      expect(container.querySelector('.md-combobox__toggle')).toHaveAttribute('aria-label', 'Toggle dropdown');
    });
  });

  describe('ref forwarding', () => {
    it('forwards ref to input element', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<MdComboBox ref={ref} options={mockOptions} value="" onSelectOption={() => {}} />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe('props forwarding', () => {
    it('applies custom id', () => {
      const { container } = render(
        <MdComboBox id="custom-combobox" options={mockOptions} value="" onSelectOption={() => {}} />,
      );
      expect(container.querySelector('[id^="custom-combobox"]')).toBeInTheDocument();
    });
  });
});
