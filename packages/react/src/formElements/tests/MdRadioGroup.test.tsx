import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdRadioGroup } from '../MdRadioGroup';

const mockOptions = [
  { value: 'opt1', text: 'Option 1' },
  { value: 'opt2', text: 'Option 2' },
  { value: 'opt3', text: 'Option 3' },
];

describe('MdRadioGroup', () => {
  describe('rendering', () => {
    it('renders radio group', () => {
      const { container } = render(<MdRadioGroup options={mockOptions} onChange={() => {}} />);
      expect(container.querySelector('.md-radiogroup')).toBeInTheDocument();
    });

    it('renders all options', () => {
      render(<MdRadioGroup options={mockOptions} onChange={() => {}} />);
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
      expect(screen.getByText('Option 3')).toBeInTheDocument();
    });

    it('renders label', () => {
      render(<MdRadioGroup label="Select option" options={mockOptions} onChange={() => {}} />);
      expect(screen.getByText('Select option')).toBeInTheDocument();
    });

    it('renders all radio buttons', () => {
      render(<MdRadioGroup options={mockOptions} onChange={() => {}} />);
      const radios = screen.getAllByRole('radio');
      expect(radios).toHaveLength(3);
    });

    it('does not render label section without label or helpText', () => {
      const { container } = render(<MdRadioGroup options={mockOptions} onChange={() => {}} />);
      expect(container.querySelector('.md-radiogroup__label-wrapper')).not.toBeInTheDocument();
    });
  });

  describe('selected value', () => {
    it('checks selected option', () => {
      render(<MdRadioGroup options={mockOptions} value="opt2" onChange={() => {}} />);
      const radios = screen.getAllByRole('radio');
      expect(radios[0]).not.toBeChecked();
      expect(radios[1]).toBeChecked();
      expect(radios[2]).not.toBeChecked();
    });

    it('handles no selection', () => {
      render(<MdRadioGroup options={mockOptions} value="" onChange={() => {}} />);
      const radios = screen.getAllByRole('radio');
      radios.forEach(radio => {
        expect(radio).not.toBeChecked();
      });
    });

    it('handles undefined value', () => {
      render(<MdRadioGroup options={mockOptions} onChange={() => {}} />);
      const radios = screen.getAllByRole('radio');
      radios.forEach(radio => {
        expect(radio).not.toBeChecked();
      });
    });
  });

  describe('directions', () => {
    it('applies vertical direction', () => {
      const { container } = render(<MdRadioGroup options={mockOptions} direction="vertical" onChange={() => {}} />);
      expect(container.querySelector('.md-radiogroup__options--vertical')).toBeInTheDocument();
    });

    it('applies horizontal direction by default', () => {
      const { container } = render(<MdRadioGroup options={mockOptions} onChange={() => {}} />);
      expect(container.querySelector('.md-radiogroup__options--vertical')).not.toBeInTheDocument();
    });
  });

  describe('states', () => {
    it('disables all radio buttons when disabled', () => {
      const { container } = render(<MdRadioGroup options={mockOptions} disabled onChange={() => {}} />);
      expect(container.querySelector('.md-radiogroup--disabled')).toBeInTheDocument();
    });

    it('shows error state', () => {
      const { container } = render(
        <MdRadioGroup options={mockOptions} error errorText="Selection required" onChange={() => {}} />,
      );
      expect(container.querySelector('.md-radiogroup__error')).toBeInTheDocument();
    });

    it('displays error text', () => {
      render(<MdRadioGroup options={mockOptions} error errorText="Selection required" onChange={() => {}} />);
      expect(screen.getByText('Selection required')).toBeInTheDocument();
    });

    it('does not show error without errorText', () => {
      const { container } = render(<MdRadioGroup options={mockOptions} error onChange={() => {}} />);
      expect(container.querySelector('.md-radiogroup__error')).not.toBeInTheDocument();
    });
  });

  describe('help text', () => {
    it('renders help button when helpText provided', () => {
      const { container } = render(
        <MdRadioGroup label="Options" options={mockOptions} helpText="Select one option" onChange={() => {}} />,
      );
      expect(container.querySelector('.md-helpbutton')).toBeInTheDocument();
    });

    it('shows help text when help button is clicked', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <MdRadioGroup label="Options" options={mockOptions} helpText="Select one option" onChange={() => {}} />,
      );

      const helpButton = container.querySelector('.md-helpbutton') as HTMLElement;
      await user.click(helpButton);
      expect(screen.getByText('Select one option')).toBeInTheDocument();
    });

    it('uses custom helpTextFor label', () => {
      const { container } = render(
        <MdRadioGroup
          label="Options"
          options={mockOptions}
          helpText="Help"
          labels={{ helpTextFor: 'Help for' }}
          onChange={() => {}}
        />,
      );

      const helpButton = container.querySelector('.md-helpbutton') as HTMLElement;
      expect(helpButton).toHaveAttribute('aria-label', 'Help for Options');
    });
  });

  describe('events', () => {
    it('calls onChange when radio is clicked', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<MdRadioGroup options={mockOptions} onChange={onChange} />);

      const radio = screen.getAllByRole('radio')[1];
      await user.click(radio);
      expect(onChange).toHaveBeenCalled();
    });

    it('passes correct value in onChange', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<MdRadioGroup options={mockOptions} onChange={onChange} />);

      const radio = screen.getAllByRole('radio')[1];
      await user.click(radio);
      expect(onChange.mock.calls[0][0].target.value).toBe('opt2');
    });

    it('calls onFocus when radio receives focus', async () => {
      const user = userEvent.setup();
      const onFocus = vi.fn();
      render(<MdRadioGroup options={mockOptions} onFocus={onFocus} onChange={() => {}} />);

      const radio = screen.getAllByRole('radio')[0];
      await user.click(radio);
      expect(onFocus).toHaveBeenCalled();
    });

    it('calls onBlur when radio loses focus', async () => {
      const user = userEvent.setup();
      const onBlur = vi.fn();
      render(<MdRadioGroup options={mockOptions} onBlur={onBlur} onChange={() => {}} />);

      const radios = screen.getAllByRole('radio');
      await user.click(radios[0]);
      await user.click(radios[1]);
      expect(onBlur).toHaveBeenCalled();
    });
  });

  describe('accessibility', () => {
    it('renders with radiogroup role', () => {
      render(<MdRadioGroup options={mockOptions} onChange={() => {}} />);
      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    });

    it('renders as fieldset', () => {
      const { container } = render(<MdRadioGroup options={mockOptions} onChange={() => {}} />);
      expect(container.querySelector('fieldset')).toBeInTheDocument();
    });

    it('renders label as legend', () => {
      render(<MdRadioGroup label="Select option" options={mockOptions} onChange={() => {}} />);
      const fieldset = screen.getByRole('radiogroup');
      expect(fieldset).toContainElement(screen.getByText('Select option'));
    });

    it('associates help text with options', () => {
      const { container } = render(
        <MdRadioGroup id="test-group" options={mockOptions} helpText="Help text" onChange={() => {}} />,
      );
      const optionsDiv = container.querySelector('.md-radiogroup__options');
      expect(optionsDiv).toHaveAttribute('aria-describedby', expect.stringContaining('help-text'));
    });
  });

  describe('props forwarding', () => {
    it('applies custom className', () => {
      const { container } = render(<MdRadioGroup options={mockOptions} className="custom-class" onChange={() => {}} />);
      expect(container.querySelector('.md-radiogroup')).toHaveClass('custom-class');
    });

    it('applies custom id', () => {
      const { container } = render(<MdRadioGroup id="custom-id" options={mockOptions} onChange={() => {}} />);
      expect(container.querySelector('#custom-id')).toBeInTheDocument();
    });

    it('forwards other props to fieldset', () => {
      const { container } = render(
        <MdRadioGroup options={mockOptions} data-testid="radio-group" onChange={() => {}} />,
      );
      expect(container.querySelector('[data-testid="radio-group"]')).toBeInTheDocument();
    });
  });
});
