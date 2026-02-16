import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdTextArea } from '../MdTextArea';

describe('MdTextArea', () => {
  describe('rendering', () => {
    it('renders a textarea element', () => {
      render(<MdTextArea />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<MdTextArea label="Description" />);
      expect(screen.getByLabelText('Description')).toBeInTheDocument();
    });

    it('renders with default rows', () => {
      render(<MdTextArea />);
      expect(screen.getByRole('textbox')).toHaveAttribute('rows', '10');
    });

    it('renders with custom rows', () => {
      render(<MdTextArea rows={5} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('rows', '5');
    });
  });

  describe('states', () => {
    it('can be disabled', () => {
      render(<MdTextArea disabled />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('applies disabled class', () => {
      const { container } = render(<MdTextArea disabled />);
      expect(container.querySelector('.md-textarea--disabled')).toBeInTheDocument();
    });

    it('can be readonly', () => {
      render(<MdTextArea readOnly />);
      expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
    });

    it('applies readonly class', () => {
      const { container } = render(<MdTextArea readOnly />);
      expect(container.querySelector('.md-textarea--readonly')).toBeInTheDocument();
    });

    it('shows error state', () => {
      const { container } = render(<MdTextArea error />);
      expect(container.querySelector('.md-textarea--error')).toBeInTheDocument();
    });

    it('shows error text when error is true', () => {
      render(<MdTextArea error errorText="This field is required" />);
      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('handles typing', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<MdTextArea onChange={onChange} />);

      await user.type(screen.getByRole('textbox'), 'hello');
      expect(onChange).toHaveBeenCalled();
    });

    it('handles focus', async () => {
      const user = userEvent.setup();
      const onFocus = vi.fn();
      render(<MdTextArea onFocus={onFocus} />);

      await user.click(screen.getByRole('textbox'));
      expect(onFocus).toHaveBeenCalled();
    });

    it('handles blur', async () => {
      const user = userEvent.setup();
      const onBlur = vi.fn();
      render(<MdTextArea onBlur={onBlur} />);

      await user.click(screen.getByRole('textbox'));
      await user.tab();
      expect(onBlur).toHaveBeenCalled();
    });
  });

  describe('help text', () => {
    it('renders help button when helpText is provided', () => {
      render(<MdTextArea label="Test" helpText="Help information" />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('shows help text when help button is clicked', async () => {
      const user = userEvent.setup();
      render(<MdTextArea label="Test" helpText="Help information" />);

      await user.click(screen.getByRole('button'));
      expect(screen.getByText('Help information')).toBeInTheDocument();
    });
  });

  describe('props forwarding', () => {
    it('forwards id', () => {
      render(<MdTextArea id="my-textarea" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('id', 'my-textarea');
    });

    it('forwards name', () => {
      render(<MdTextArea name="description" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('name', 'description');
    });

    it('forwards placeholder', () => {
      render(<MdTextArea placeholder="Enter text..." />);
      expect(screen.getByPlaceholderText('Enter text...')).toBeInTheDocument();
    });

    it('merges custom className', () => {
      const { container } = render(<MdTextArea className="custom-class" />);
      expect(container.querySelector('.md-textarea')).toHaveClass('custom-class');
    });
  });

  describe('accessibility', () => {
    it('associates label with textarea', () => {
      render(<MdTextArea label="Comments" id="comments" />);
      expect(screen.getByLabelText('Comments')).toBeInTheDocument();
    });

    it('sets aria-describedby for error text', () => {
      render(<MdTextArea id="test" error errorText="Error message" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-describedby');
    });
  });

  describe('ref forwarding', () => {
    it('forwards ref to textarea element', () => {
      const ref = React.createRef<HTMLTextAreaElement>();
      render(<MdTextArea ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
    });
  });
});
