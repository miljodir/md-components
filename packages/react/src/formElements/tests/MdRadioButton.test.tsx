import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdRadioButton } from '../MdRadioButton';

describe('MdRadioButton', () => {
  describe('rendering', () => {
    it('renders a radio input', () => {
      render(<MdRadioButton />);
      expect(screen.getByRole('radio')).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<MdRadioButton label="Option 1" />);
      expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    });

    it('renders selected dot when checked', () => {
      const { container } = render(<MdRadioButton checked onChange={() => {}} />);
      expect(container.querySelector('.md-radiobutton__selected-dot')).toBeInTheDocument();
    });

    it('does not render selected dot when unchecked', () => {
      const { container } = render(<MdRadioButton checked={false} onChange={() => {}} />);
      expect(container.querySelector('.md-radiobutton__selected-dot')).not.toBeInTheDocument();
    });
  });

  describe('states', () => {
    it('can be checked', () => {
      render(<MdRadioButton checked onChange={() => {}} />);
      expect(screen.getByRole('radio')).toBeChecked();
    });

    it('can be unchecked', () => {
      render(<MdRadioButton checked={false} onChange={() => {}} />);
      expect(screen.getByRole('radio')).not.toBeChecked();
    });

    it('can be disabled', () => {
      render(<MdRadioButton disabled />);
      expect(screen.getByRole('radio')).toBeDisabled();
    });

    it('applies disabled class', () => {
      const { container } = render(<MdRadioButton disabled />);
      expect(container.querySelector('.md-radiobutton--disabled')).toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('handles change events', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<MdRadioButton onChange={onChange} />);

      await user.click(screen.getByRole('radio'));
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('does not fire change when disabled', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<MdRadioButton disabled onChange={onChange} />);

      await user.click(screen.getByRole('radio'));
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe('accessibility', () => {
    it('has aria-checked attribute', () => {
      render(<MdRadioButton checked onChange={() => {}} />);
      expect(screen.getByRole('radio')).toHaveAttribute('aria-checked', 'true');
    });

    it('associates label with radio', () => {
      render(<MdRadioButton label="My option" id="my-radio" />);
      expect(screen.getByLabelText('My option')).toBeInTheDocument();
    });
  });

  describe('props forwarding', () => {
    it('forwards id', () => {
      render(<MdRadioButton id="my-radio" />);
      expect(screen.getByRole('radio')).toHaveAttribute('id', 'my-radio');
    });

    it('forwards name for radio group', () => {
      render(<MdRadioButton name="options" />);
      expect(screen.getByRole('radio')).toHaveAttribute('name', 'options');
    });

    it('forwards value', () => {
      render(<MdRadioButton value="option1" />);
      expect(screen.getByRole('radio')).toHaveAttribute('value', 'option1');
    });

    it('merges custom className', () => {
      const { container } = render(<MdRadioButton className="custom-class" />);
      expect(container.querySelector('.md-radiobutton')).toHaveClass('custom-class');
    });
  });

  describe('radio group behavior', () => {
    it('works in a group with same name', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();

      render(
        <>
          <MdRadioButton label="Option A" name="group" value="a" onChange={onChange} />
          <MdRadioButton label="Option B" name="group" value="b" onChange={onChange} />
        </>,
      );

      const radioA = screen.getByLabelText('Option A');
      const radioB = screen.getByLabelText('Option B');

      await user.click(radioA);
      expect(onChange).toHaveBeenCalled();

      await user.click(radioB);
      expect(radioA).not.toBeChecked();
      expect(radioB).toBeChecked();
    });
  });
});
