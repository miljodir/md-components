import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import MdComboBoxGrouped from '../MdComboBoxGrouped';

const mockGroupedOptions = [
  {
    label: 'Group A',
    values: [
      { value: 'a1', text: 'Option A1' },
      { value: 'a2', text: 'Option A2' },
    ],
  },
  {
    label: 'Group B',
    values: [
      { value: 'b1', text: 'Option B1' },
      { value: 'b2', text: 'Option B2' },
    ],
  },
];

describe('MdComboBoxGrouped', () => {
  describe('rendering', () => {
    it('renders combobox', () => {
      const { container } = render(
        <MdComboBoxGrouped options={mockGroupedOptions} value="" onSelectOption={() => {}} />,
      );
      expect(container.querySelector('.md-combobox')).toBeInTheDocument();
    });

    it('renders input with combobox role', () => {
      render(<MdComboBoxGrouped options={mockGroupedOptions} value="" onSelectOption={() => {}} />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('renders label', () => {
      render(
        <MdComboBoxGrouped label="Select option" options={mockGroupedOptions} value="" onSelectOption={() => {}} />,
      );
      expect(screen.getByText('Select option')).toBeInTheDocument();
    });

    it('renders placeholder when no value selected', () => {
      render(
        <MdComboBoxGrouped placeholder="Choose one" options={mockGroupedOptions} value="" onSelectOption={() => {}} />,
      );
      expect(screen.getByPlaceholderText('Choose one')).toBeInTheDocument();
    });

    it('shows search icon by default', () => {
      const { container } = render(
        <MdComboBoxGrouped options={mockGroupedOptions} value="" onSelectOption={() => {}} />,
      );
      expect(container.querySelector('.md-combobox__input--before')).toBeInTheDocument();
    });

    it('hides prefix icon when hidePrefixIcon is true', () => {
      const { container } = render(
        <MdComboBoxGrouped options={mockGroupedOptions} value="" onSelectOption={() => {}} hidePrefixIcon />,
      );
      expect(container.querySelector('.md-combobox__input--before')).not.toBeInTheDocument();
    });

    it('does not render label section without label or helpText', () => {
      const { container } = render(
        <MdComboBoxGrouped options={mockGroupedOptions} value="" onSelectOption={() => {}} />,
      );
      expect(container.querySelector('.md-combobox__label-wrapper')).not.toBeInTheDocument();
    });
  });

  describe('modes', () => {
    it('applies medium mode by default', () => {
      const { container } = render(
        <MdComboBoxGrouped options={mockGroupedOptions} value="" onSelectOption={() => {}} />,
      );
      expect(container.querySelector('.md-combobox--medium')).toBeInTheDocument();
    });

    it('applies large mode', () => {
      const { container } = render(
        <MdComboBoxGrouped mode="large" options={mockGroupedOptions} value="" onSelectOption={() => {}} />,
      );
      expect(container.querySelector('.md-combobox--large')).toBeInTheDocument();
    });

    it('applies small mode', () => {
      const { container } = render(
        <MdComboBoxGrouped mode="small" options={mockGroupedOptions} value="" onSelectOption={() => {}} />,
      );
      expect(container.querySelector('.md-combobox--small')).toBeInTheDocument();
    });
  });

  describe('states', () => {
    it('disables input when disabled', () => {
      render(<MdComboBoxGrouped options={mockGroupedOptions} value="" onSelectOption={() => {}} disabled />);
      expect(screen.getByRole('combobox')).toBeDisabled();
    });

    it('applies disabled wrapper class', () => {
      const { container } = render(
        <MdComboBoxGrouped options={mockGroupedOptions} value="" onSelectOption={() => {}} disabled />,
      );
      expect(container.querySelector('.md-combobox__input-wrapper--disabled')).toBeInTheDocument();
    });

    it('shows error state', () => {
      const { container } = render(
        <MdComboBoxGrouped options={mockGroupedOptions} value="" onSelectOption={() => {}} error errorText="Error" />,
      );
      expect(container.querySelector('.md-combobox--has-error')).toBeInTheDocument();
    });

    it('displays error text', () => {
      render(
        <MdComboBoxGrouped
          options={mockGroupedOptions}
          value=""
          onSelectOption={() => {}}
          error
          errorText="Invalid selection"
        />,
      );
      expect(screen.getByText('Invalid selection')).toBeInTheDocument();
    });

    it('shows loading spinner when isSearching', () => {
      const { container } = render(
        <MdComboBoxGrouped options={mockGroupedOptions} value="" onSelectOption={() => {}} isSearching />,
      );
      expect(container.querySelector('.md-loading-spinner')).toBeInTheDocument();
    });

    it('shows has-value class when value is selected', () => {
      const { container } = render(
        <MdComboBoxGrouped options={mockGroupedOptions} value="a1" onSelectOption={() => {}} />,
      );
      expect(container.querySelector('.md-combobox--has-value')).toBeInTheDocument();
    });
  });

  describe('help text', () => {
    it('renders help button when helpText provided', () => {
      const { container } = render(
        <MdComboBoxGrouped
          label="Options"
          options={mockGroupedOptions}
          value=""
          onSelectOption={() => {}}
          helpText="Help"
        />,
      );
      expect(container.querySelector('.md-helpbutton')).toBeInTheDocument();
    });

    it('shows help text when help button is clicked', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <MdComboBoxGrouped
          label="Options"
          options={mockGroupedOptions}
          value=""
          onSelectOption={() => {}}
          helpText="Select help"
        />,
      );

      const helpButton = container.querySelector('.md-helpbutton') as HTMLElement;
      await user.click(helpButton);
      expect(screen.getByText('Select help')).toBeInTheDocument();
    });

    it('uses custom helpTextFor label', () => {
      const { container } = render(
        <MdComboBoxGrouped
          label="Options"
          options={mockGroupedOptions}
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
        <MdComboBoxGrouped options={mockGroupedOptions} value="a1" onSelectOption={() => {}} allowReset />,
      );
      expect(container.querySelector('.md-combobox__reset')).toBeInTheDocument();
    });

    it('hides reset button when no value is selected', () => {
      const { container } = render(
        <MdComboBoxGrouped options={mockGroupedOptions} value="" onSelectOption={() => {}} allowReset />,
      );
      expect(container.querySelector('.md-combobox__reset')).not.toBeInTheDocument();
    });

    it('calls onSelectOption with empty when reset is clicked', async () => {
      const user = userEvent.setup();
      const onSelect = vi.fn();
      const { container } = render(
        <MdComboBoxGrouped options={mockGroupedOptions} value="a1" onSelectOption={onSelect} allowReset />,
      );

      const resetButton = container.querySelector('.md-combobox__reset') as HTMLElement;
      await user.click(resetButton);
      expect(onSelect).toHaveBeenCalledWith('');
    });
  });

  describe('multi-select', () => {
    it('renders count indicator for multiple selections', () => {
      const { container } = render(
        <MdComboBoxGrouped options={mockGroupedOptions} value={['a1', 'b1']} onSelectOption={() => {}} />,
      );
      const afterDiv = container.querySelector('.md-combobox__input--after');
      expect(afterDiv).toHaveTextContent('+2');
    });

    it('shows has-value class with array value', () => {
      const { container } = render(
        <MdComboBoxGrouped options={mockGroupedOptions} value={['a1']} onSelectOption={() => {}} />,
      );
      expect(container.querySelector('.md-combobox--has-value')).toBeInTheDocument();
    });
  });

  describe('dropdown', () => {
    it('opens dropdown on input focus and shows groups', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(
        <MdComboBoxGrouped options={mockGroupedOptions} value="" onSelectOption={() => {}} />,
      );

      const input = screen.getByRole('combobox');
      await user.click(input);

      await waitFor(() => {
        expect(baseElement.querySelector('.md-combobox__popover')).toBeInTheDocument();
      });
    });

    it('shows group labels', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(
        <MdComboBoxGrouped options={mockGroupedOptions} value="" onSelectOption={() => {}} />,
      );

      const input = screen.getByRole('combobox');
      await user.click(input);

      await waitFor(() => {
        expect(baseElement).toHaveTextContent('Group A');
        expect(baseElement).toHaveTextContent('Group B');
      });
    });

    it('shows no results text when no options match', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(
        <MdComboBoxGrouped
          options={mockGroupedOptions}
          value=""
          onSelectOption={() => {}}
          noResultsText="No matches"
        />,
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
        <MdComboBoxGrouped options={mockGroupedOptions} value="" onSelectOption={() => {}} dropdownHeight={200} />,
      );

      const input = screen.getByRole('combobox');
      await user.click(input);

      await waitFor(() => {
        const popover = baseElement.querySelector('.md-combobox__popover') as HTMLElement;
        expect(popover).toHaveStyle('max-height: 200px');
      });
    });

    it('shows separator lines by default', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(
        <MdComboBoxGrouped options={mockGroupedOptions} value="" onSelectOption={() => {}} />,
      );

      const input = screen.getByRole('combobox');
      await user.click(input);

      await waitFor(() => {
        expect(baseElement.querySelector('.md-combobox__group-separator')).toBeInTheDocument();
      });
    });

    it('hides separator lines when hideSeparatorLine is true', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(
        <MdComboBoxGrouped options={mockGroupedOptions} value="" onSelectOption={() => {}} hideSeparatorLine />,
      );

      const input = screen.getByRole('combobox');
      await user.click(input);

      await waitFor(() => {
        expect(baseElement.querySelector('.md-combobox__group-separator')).not.toBeInTheDocument();
        expect(baseElement.querySelector('.md-combobox__group--no-separator')).toBeInTheDocument();
      });
    });
  });

  describe('group icons', () => {
    it('renders group icons when provided', async () => {
      const user = userEvent.setup();
      const optionsWithIcon = [
        {
          label: 'Group A',
          icon: <span data-testid="group-icon">★</span>,
          values: [{ value: 'a1', text: 'Option A1' }],
        },
      ];
      const { baseElement } = render(
        <MdComboBoxGrouped options={optionsWithIcon} value="" onSelectOption={() => {}} />,
      );

      const input = screen.getByRole('combobox');
      await user.click(input);

      await waitFor(() => {
        expect(baseElement.querySelector('[data-testid="group-icon"]')).toBeInTheDocument();
      });
    });
  });

  describe('toggle button', () => {
    it('renders toggle button', () => {
      const { container } = render(
        <MdComboBoxGrouped options={mockGroupedOptions} value="" onSelectOption={() => {}} />,
      );
      expect(container.querySelector('.md-combobox__toggle')).toBeInTheDocument();
    });

    it('uses custom openClose label', () => {
      const { container } = render(
        <MdComboBoxGrouped
          options={mockGroupedOptions}
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
      render(<MdComboBoxGrouped ref={ref} options={mockGroupedOptions} value="" onSelectOption={() => {}} />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe('props forwarding', () => {
    it('applies custom id', () => {
      const { container } = render(
        <MdComboBoxGrouped id="custom-combobox" options={mockGroupedOptions} value="" onSelectOption={() => {}} />,
      );
      expect(container.querySelector('[id^="custom-combobox"]')).toBeInTheDocument();
    });
  });
});
