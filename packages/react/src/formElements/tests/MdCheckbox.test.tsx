import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdCheckbox } from '../MdCheckbox';

describe('MdCheckbox', () => {
  describe('rendering', () => {
    it('renders a checkbox input', () => {
      render(<MdCheckbox />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<MdCheckbox label="Accept terms" />);
      expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
    });

    it('renders label as ReactNode', () => {
      render(<MdCheckbox label={<span data-testid="custom-label">Custom</span>} />);
      expect(screen.getByTestId('custom-label')).toBeInTheDocument();
    });
  });

  describe('states', () => {
    it('can be checked', () => {
      render(<MdCheckbox checked onChange={() => {}} />);
      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('can be unchecked', () => {
      render(<MdCheckbox checked={false} onChange={() => {}} />);
      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    it('can be disabled', () => {
      render(<MdCheckbox disabled />);
      expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    it('applies disabled class', () => {
      const { container } = render(<MdCheckbox disabled />);
      expect(container.querySelector('.md-checkbox--disabled')).toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('handles change events', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<MdCheckbox onChange={onChange} />);

      await user.click(screen.getByRole('checkbox'));
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('does not fire change when disabled', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<MdCheckbox disabled onChange={onChange} />);

      await user.click(screen.getByRole('checkbox'));
      expect(onChange).not.toHaveBeenCalled();
    });

    it('can toggle with keyboard', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<MdCheckbox onChange={onChange} />);

      screen.getByRole('checkbox').focus();
      await user.keyboard(' ');
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('accessibility', () => {
    it('has aria-checked attribute', () => {
      render(<MdCheckbox checked onChange={() => {}} />);
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true');
    });

    it('associates label with checkbox', () => {
      render(<MdCheckbox label="My checkbox" id="my-checkbox" />);
      expect(screen.getByLabelText('My checkbox')).toBeInTheDocument();
    });
  });

  describe('props forwarding', () => {
    it('forwards id', () => {
      render(<MdCheckbox id="my-checkbox" />);
      expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'my-checkbox');
    });

    it('forwards name', () => {
      render(<MdCheckbox name="terms" />);
      expect(screen.getByRole('checkbox')).toHaveAttribute('name', 'terms');
    });

    it('merges custom className', () => {
      const { container } = render(<MdCheckbox className="custom-class" />);
      expect(container.querySelector('.md-checkbox')).toHaveClass('custom-class');
    });
  });
});
