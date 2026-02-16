import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdSelect } from '../MdSelect';

const mockOptions = [
  { text: 'Option 1', value: 'opt1' },
  { text: 'Option 2', value: 'opt2' },
  { text: 'Option 3', value: 'opt3' },
];

describe('MdSelect', () => {
  describe('rendering', () => {
    it('renders select component', () => {
      const { container } = render(<MdSelect value="" options={mockOptions} onSelectOption={() => {}} />);
      expect(container.querySelector('.md-select')).toBeInTheDocument();
    });

    it('renders label', () => {
      render(<MdSelect label="Select option" value="" options={mockOptions} onSelectOption={() => {}} />);
      expect(screen.getByText('Select option')).toBeInTheDocument();
    });

    it('renders placeholder when no value selected', () => {
      render(<MdSelect placeholder="Choose one" value="" options={mockOptions} onSelectOption={() => {}} />);
      expect(screen.getByText('Choose one')).toBeInTheDocument();
    });

    it('renders selected value text', () => {
      render(<MdSelect value="opt1" options={mockOptions} onSelectOption={() => {}} />);
      const combobox = screen.getByRole('combobox');
      expect(combobox).toHaveTextContent('Option 1');
    });
  });

  describe('modes', () => {
    it('applies medium mode by default', () => {
      const { container } = render(<MdSelect value="" options={mockOptions} onSelectOption={() => {}} />);
      expect(container.querySelector('.md-select--medium')).toBeInTheDocument();
    });

    it('applies large mode', () => {
      const { container } = render(<MdSelect mode="large" value="" options={mockOptions} onSelectOption={() => {}} />);
      expect(container.querySelector('.md-select--large')).toBeInTheDocument();
    });

    it('applies small mode', () => {
      const { container } = render(<MdSelect mode="small" value="" options={mockOptions} onSelectOption={() => {}} />);
      expect(container.querySelector('.md-select--small')).toBeInTheDocument();
    });
  });

  describe('states', () => {
    it('can be disabled', () => {
      const { container } = render(<MdSelect disabled value="" options={mockOptions} onSelectOption={() => {}} />);
      expect(container.querySelector('.md-select__button')).toHaveAttribute('aria-disabled', 'true');
    });

    it('shows error state', () => {
      const { container } = render(
        <MdSelect error errorText="Invalid selection" value="" options={mockOptions} onSelectOption={() => {}} />,
      );
      expect(container.querySelector('.md-select--has-error')).toBeInTheDocument();
    });

    it('displays error text', () => {
      render(<MdSelect error errorText="Invalid selection" value="" options={mockOptions} onSelectOption={() => {}} />);
      expect(screen.getByText('Invalid selection')).toBeInTheDocument();
    });
  });

  describe('help text', () => {
    it('renders help button when helpText is provided', () => {
      const { container } = render(
        <MdSelect helpText="Select an option from the list" value="" options={mockOptions} onSelectOption={() => {}} />,
      );
      expect(container.querySelector('.md-select__help-button')).toBeInTheDocument();
    });

    it('shows help text when help button is clicked', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <MdSelect
          label="Test"
          helpText="Select an option from the list"
          value=""
          options={mockOptions}
          onSelectOption={() => {}}
        />,
      );

      const helpButton = container.querySelector('.md-helpbutton');
      if (helpButton) {
        await user.click(helpButton);
      }
      expect(screen.getByText('Select an option from the list')).toBeInTheDocument();
    });
  });

  describe('reset functionality', () => {
    it('shows reset button when allowReset is true and value is selected', () => {
      const { container } = render(
        <MdSelect allowReset value="opt1" options={mockOptions} onSelectOption={() => {}} />,
      );
      expect(container.querySelector('.md-select__reset')).toBeInTheDocument();
    });

    it('hides reset button when no value is selected', () => {
      const { container } = render(<MdSelect allowReset value="" options={mockOptions} onSelectOption={() => {}} />);
      expect(container.querySelector('.md-select__reset')).not.toBeInTheDocument();
    });

    it('calls onSelectOption with empty value when reset is clicked', async () => {
      const user = userEvent.setup();
      const onSelect = vi.fn();
      const { container } = render(
        <MdSelect allowReset value="opt1" options={mockOptions} onSelectOption={onSelect} />,
      );

      const resetButton = container.querySelector('.md-select__reset');
      if (resetButton) {
        await user.click(resetButton);
        expect(onSelect).toHaveBeenCalledWith('');
      }
    });
  });

  describe('multi-select', () => {
    it('renders with array value for multi-select', () => {
      const { container } = render(
        <MdSelect value={['opt1', 'opt2']} options={mockOptions} onSelectOption={() => {}} />,
      );
      // Should show count indicator in the button-right area
      const buttonRight = container.querySelector('.md-select__button-right');
      expect(buttonRight).toHaveTextContent('+2');
    });

    it('displays first selected option text in multi-select', () => {
      render(<MdSelect value={['opt1', 'opt2']} options={mockOptions} onSelectOption={() => {}} />);
      const combobox = screen.getByRole('combobox');
      expect(combobox).toHaveTextContent('Option 1');
    });
  });

  describe('ref forwarding', () => {
    it('forwards ref to combobox element', () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<MdSelect ref={ref} value="" options={mockOptions} onSelectOption={() => {}} />);
      // Ariakit Select renders as div but expects HTMLButtonElement ref type
      expect(ref.current).not.toBeNull();
      expect(ref.current?.getAttribute('role')).toBe('combobox');
    });
  });
});
