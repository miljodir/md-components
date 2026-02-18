import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdInput } from '../MdInput';

describe('MdInput', () => {
  describe('rendering', () => {
    it('renders an input element', () => {
      render(<MdInput />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<MdInput label="Username" />);
      expect(screen.getByLabelText('Username')).toBeInTheDocument();
    });

    it('renders with placeholder', () => {
      render(<MdInput placeholder="Enter text" />);
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('renders with suffix', () => {
      const { container } = render(<MdInput suffix="kr" />);
      expect(container.querySelector('.md-input--has-suffix')).toBeInTheDocument();
    });

    it('renders with prefix icon', () => {
      const { container } = render(<MdInput prefixIcon={<span data-testid="prefix" />} />);
      expect(container.querySelector('.md-input--has-prefix')).toBeInTheDocument();
    });
  });

  describe('states', () => {
    it('can be disabled', () => {
      render(<MdInput label="Test" disabled />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('applies disabled class', () => {
      const { container } = render(<MdInput disabled />);
      expect(container.querySelector('.md-input--disabled')).toBeInTheDocument();
    });

    it('can be readonly', () => {
      render(<MdInput label="Test" readOnly />);
      expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
    });

    it('applies readonly class', () => {
      const { container } = render(<MdInput readOnly />);
      expect(container.querySelector('.md-input--readonly')).toBeInTheDocument();
    });

    it('shows error state', () => {
      const { container } = render(<MdInput error />);
      expect(container.querySelector('.md-input--error')).toBeInTheDocument();
    });

    it('shows error text when error is true', () => {
      render(<MdInput error errorText="This field is required" />);
      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });

    it('shows support text', () => {
      render(<MdInput supportText="Helper message" />);
      expect(screen.getByText('Helper message')).toBeInTheDocument();
    });
  });

  describe('modes', () => {
    it('applies small mode class', () => {
      const { container } = render(<MdInput mode="small" />);
      expect(container.querySelector('.md-input--small')).toBeInTheDocument();
    });

    it('applies large mode class', () => {
      const { container } = render(<MdInput mode="large" />);
      expect(container.querySelector('.md-input--large')).toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('handles typing', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<MdInput onChange={onChange} />);

      await user.type(screen.getByRole('textbox'), 'hello');
      expect(onChange).toHaveBeenCalled();
    });

    it('handles focus', async () => {
      const user = userEvent.setup();
      const onFocus = vi.fn();
      render(<MdInput onFocus={onFocus} />);

      await user.click(screen.getByRole('textbox'));
      expect(onFocus).toHaveBeenCalled();
    });

    it('handles blur', async () => {
      const user = userEvent.setup();
      const onBlur = vi.fn();
      render(<MdInput onBlur={onBlur} />);

      await user.click(screen.getByRole('textbox'));
      await user.tab();
      expect(onBlur).toHaveBeenCalled();
    });
  });

  describe('help text', () => {
    it('renders help button when helpText is provided', () => {
      render(<MdInput label="Test" helpText="Help information" />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('shows help text when help button is clicked', async () => {
      const user = userEvent.setup();
      render(<MdInput label="Test" helpText="Help information" />);

      await user.click(screen.getByRole('button'));
      expect(screen.getByText('Help information')).toBeInTheDocument();
    });
  });

  describe('props forwarding', () => {
    it('forwards id', () => {
      render(<MdInput id="my-input" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('id', 'my-input');
    });

    it('forwards name', () => {
      render(<MdInput name="username" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('name', 'username');
    });

    it('forwards type', () => {
      render(<MdInput type="email" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
    });

    it('merges custom className', () => {
      const { container } = render(<MdInput className="custom-class" />);
      expect(container.querySelector('.md-input')).toHaveClass('custom-class');
    });
  });

  describe('accessibility', () => {
    it('associates label with input', () => {
      render(<MdInput label="Email" id="email" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('id', 'email');
      expect(screen.getByLabelText('Email')).toBe(input);
    });

    it('sets aria-describedby for error text', () => {
      render(<MdInput id="test" error errorText="Error message" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-describedby');
    });
  });

  describe('ref forwarding', () => {
    it('forwards ref to input element', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<MdInput ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });
});
