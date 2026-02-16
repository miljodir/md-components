import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdCheckboxGroup } from '../MdCheckboxGroup';

const mockOptions = [
  { value: 'opt1', text: 'Option 1' },
  { value: 'opt2', text: 'Option 2' },
  { value: 'opt3', text: 'Option 3' },
];

describe('MdCheckboxGroup', () => {
  describe('rendering', () => {
    it('renders checkbox group', () => {
      const { container } = render(<MdCheckboxGroup options={mockOptions} />);
      expect(container.querySelector('.md-checkboxgroup')).toBeInTheDocument();
    });

    it('renders all options', () => {
      render(<MdCheckboxGroup options={mockOptions} />);
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
      expect(screen.getByText('Option 3')).toBeInTheDocument();
    });

    it('renders label', () => {
      render(<MdCheckboxGroup label="Select options" options={mockOptions} />);
      expect(screen.getByText('Select options')).toBeInTheDocument();
    });

    it('renders all checkboxes', () => {
      render(<MdCheckboxGroup options={mockOptions} />);
      const checkboxes = screen.getAllByRole('checkbox');
      expect(checkboxes).toHaveLength(3);
    });

    it('does not render label section without label or helpText', () => {
      const { container } = render(<MdCheckboxGroup options={mockOptions} />);
      expect(container.querySelector('.md-checkboxgroup__label-wrapper')).not.toBeInTheDocument();
    });
  });

  describe('selected options', () => {
    it('checks selected options', () => {
      render(<MdCheckboxGroup options={mockOptions} selectedOptions={[{ value: 'opt1' }, { value: 'opt2' }]} />);
      const checkboxes = screen.getAllByRole('checkbox');
      expect(checkboxes[0]).toBeChecked();
      expect(checkboxes[1]).toBeChecked();
      expect(checkboxes[2]).not.toBeChecked();
    });

    it('handles empty selectedOptions', () => {
      render(<MdCheckboxGroup options={mockOptions} selectedOptions={[]} />);
      const checkboxes = screen.getAllByRole('checkbox');
      checkboxes.forEach(checkbox => {
        expect(checkbox).not.toBeChecked();
      });
    });
  });

  describe('directions', () => {
    it('applies vertical direction', () => {
      const { container } = render(<MdCheckboxGroup options={mockOptions} direction="vertical" />);
      expect(container.querySelector('.md-checkboxgroup__options--vertical')).toBeInTheDocument();
    });

    it('applies grid direction', () => {
      const { container } = render(<MdCheckboxGroup options={mockOptions} direction="grid" />);
      expect(container.querySelector('.md-checkboxgroup__options--grid')).toBeInTheDocument();
    });

    it('applies custom columns for grid', () => {
      const { container } = render(<MdCheckboxGroup options={mockOptions} direction="grid" columns={3} />);
      const optionsDiv = container.querySelector('.md-checkboxgroup__options');
      expect(optionsDiv).toHaveStyle('grid-template-columns: repeat(3, minmax(max-content, 1fr))');
    });
  });

  describe('states', () => {
    it('disables all checkboxes when disabled', () => {
      const { container } = render(<MdCheckboxGroup options={mockOptions} disabled />);
      expect(container.querySelector('.md-checkboxgroup--disabled')).toBeInTheDocument();
    });

    it('disables individual options', () => {
      const optionsWithDisabled = [
        { value: 'opt1', text: 'Option 1' },
        { value: 'opt2', text: 'Option 2', disabled: true },
      ];
      render(<MdCheckboxGroup options={optionsWithDisabled} />);
      const checkboxes = screen.getAllByRole('checkbox');
      expect(checkboxes[0]).not.toBeDisabled();
      expect(checkboxes[1]).toBeDisabled();
    });

    it('shows error state', () => {
      const { container } = render(<MdCheckboxGroup options={mockOptions} error errorText="Selection required" />);
      expect(container.querySelector('.md-checkboxgroup__error')).toBeInTheDocument();
    });

    it('displays error text', () => {
      render(<MdCheckboxGroup options={mockOptions} error errorText="Selection required" />);
      expect(screen.getByText('Selection required')).toBeInTheDocument();
    });

    it('does not show error without errorText', () => {
      const { container } = render(<MdCheckboxGroup options={mockOptions} error />);
      expect(container.querySelector('.md-checkboxgroup__error')).not.toBeInTheDocument();
    });
  });

  describe('help text', () => {
    it('renders help button when helpText provided', () => {
      const { container } = render(
        <MdCheckboxGroup label="Options" options={mockOptions} helpText="Select at least one" />,
      );
      expect(container.querySelector('.md-helpbutton')).toBeInTheDocument();
    });

    it('shows help text when help button is clicked', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <MdCheckboxGroup label="Options" options={mockOptions} helpText="Select at least one" />,
      );

      const helpButton = container.querySelector('.md-helpbutton') as HTMLElement;
      await user.click(helpButton);
      expect(screen.getByText('Select at least one')).toBeInTheDocument();
    });

    it('uses custom helpTextFor label', () => {
      const { container } = render(
        <MdCheckboxGroup label="Options" options={mockOptions} helpText="Help" labels={{ helpTextFor: 'Help for' }} />,
      );

      const helpButton = container.querySelector('.md-helpbutton') as HTMLElement;
      expect(helpButton).toHaveAttribute('aria-label', 'Help for Options');
    });
  });

  describe('events', () => {
    it('calls onChange when checkbox is clicked', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<MdCheckboxGroup options={mockOptions} onChange={onChange} />);

      const checkbox = screen.getAllByRole('checkbox')[0];
      await user.click(checkbox);
      expect(onChange).toHaveBeenCalled();
    });

    it('calls onFocus when checkbox receives focus', async () => {
      const user = userEvent.setup();
      const onFocus = vi.fn();
      render(<MdCheckboxGroup options={mockOptions} onFocus={onFocus} />);

      const checkbox = screen.getAllByRole('checkbox')[0];
      await user.click(checkbox);
      expect(onFocus).toHaveBeenCalled();
    });

    it('calls onBlur when checkbox loses focus', async () => {
      const user = userEvent.setup();
      const onBlur = vi.fn();
      render(<MdCheckboxGroup options={mockOptions} onBlur={onBlur} />);

      const checkboxes = screen.getAllByRole('checkbox');
      await user.click(checkboxes[0]);
      await user.click(checkboxes[1]);
      expect(onBlur).toHaveBeenCalled();
    });

    it('handles missing onChange gracefully', async () => {
      const user = userEvent.setup();
      render(<MdCheckboxGroup options={mockOptions} />);

      const checkbox = screen.getAllByRole('checkbox')[0];
      await user.click(checkbox);
      // Should not throw
    });
  });

  describe('accessibility', () => {
    it('renders as fieldset', () => {
      render(<MdCheckboxGroup options={mockOptions} />);
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('renders label as legend', () => {
      render(<MdCheckboxGroup label="Select options" options={mockOptions} />);
      expect(screen.getByRole('group')).toContainElement(screen.getByText('Select options'));
    });

    it('associates help text with options', () => {
      const { container } = render(<MdCheckboxGroup id="test-group" options={mockOptions} helpText="Help text" />);
      const optionsDiv = container.querySelector('.md-checkboxgroup__options');
      expect(optionsDiv).toHaveAttribute('aria-describedby', expect.stringContaining('help-text'));
    });
  });

  describe('props forwarding', () => {
    it('applies custom className', () => {
      const { container } = render(<MdCheckboxGroup options={mockOptions} className="custom-class" />);
      expect(container.querySelector('.md-checkboxgroup')).toHaveClass('custom-class');
    });

    it('applies custom id', () => {
      const { container } = render(<MdCheckboxGroup id="custom-id" options={mockOptions} />);
      expect(container.querySelector('#custom-id')).toBeInTheDocument();
    });

    it('forwards other props to fieldset', () => {
      const { container } = render(<MdCheckboxGroup options={mockOptions} data-testid="checkbox-group" />);
      expect(container.querySelector('[data-testid="checkbox-group"]')).toBeInTheDocument();
    });
  });
});
