import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdToggle } from '../MdToggle';

describe('MdToggle', () => {
  describe('rendering', () => {
    it('renders a checkbox input', () => {
      render(<MdToggle onChange={() => {}} />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<MdToggle label="Enable notifications" onChange={() => {}} />);
      expect(screen.getByText('Enable notifications')).toBeInTheDocument();
    });

    it('renders with custom id', () => {
      render(<MdToggle id="my-toggle" onChange={() => {}} />);
      expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'my-toggle');
    });
  });

  describe('states', () => {
    it('can be checked', () => {
      render(<MdToggle checked onChange={() => {}} />);
      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('can be unchecked', () => {
      render(<MdToggle checked={false} onChange={() => {}} />);
      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    it('can be disabled', () => {
      render(<MdToggle disabled onChange={() => {}} />);
      expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    it('applies disabled class to label', () => {
      const { container } = render(<MdToggle disabled onChange={() => {}} />);
      expect(container.querySelector('.md-toggle__label--disabled')).toBeInTheDocument();
    });

    it('shows error state', () => {
      const { container } = render(<MdToggle error onChange={() => {}} />);
      expect(container.querySelector('.md-toggle__label--error')).toBeInTheDocument();
    });

    it('shows error text when error is true', () => {
      render(<MdToggle error errorText="This field has an error" onChange={() => {}} />);
      expect(screen.getByText('This field has an error')).toBeInTheDocument();
    });

    it('does not show error text when error is false', () => {
      render(<MdToggle errorText="This field has an error" onChange={() => {}} />);
      expect(screen.queryByText('This field has an error')).not.toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('handles change events', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<MdToggle onChange={onChange} />);

      await user.click(screen.getByRole('checkbox'));
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('does not fire change when disabled', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<MdToggle disabled onChange={onChange} />);

      await user.click(screen.getByRole('checkbox'));
      expect(onChange).not.toHaveBeenCalled();
    });

    it('can toggle with keyboard', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<MdToggle onChange={onChange} />);

      screen.getByRole('checkbox').focus();
      await user.keyboard(' ');
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('props forwarding', () => {
    it('forwards name', () => {
      render(<MdToggle name="notifications" onChange={() => {}} />);
      expect(screen.getByRole('checkbox')).toHaveAttribute('name', 'notifications');
    });

    it('applies wrapperClass to wrapper', () => {
      const { container } = render(<MdToggle wrapperClass="custom-wrapper" onChange={() => {}} />);
      expect(container.querySelector('.md-toggle__wrapper')).toHaveClass('custom-wrapper');
    });
  });

  describe('accessibility', () => {
    it('associates label with checkbox', () => {
      render(<MdToggle label="Toggle option" id="toggle-test" onChange={() => {}} />);
      const label = screen.getByText('Toggle option').closest('label');
      expect(label).toHaveAttribute('for', 'toggle-test');
    });

    it('has tabIndex of 0 for keyboard accessibility', () => {
      render(<MdToggle onChange={() => {}} />);
      expect(screen.getByRole('checkbox')).toHaveAttribute('tabindex', '0');
    });
  });
});
