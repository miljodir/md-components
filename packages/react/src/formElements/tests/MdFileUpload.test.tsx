import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdFileUpload } from '../MdFileUpload';

describe('MdFileUpload', () => {
  describe('rendering', () => {
    it('renders file upload component', () => {
      const { container } = render(<MdFileUpload />);
      expect(container.querySelector('.md-fileupload')).toBeInTheDocument();
    });

    it('renders drop area', () => {
      const { container } = render(<MdFileUpload />);
      expect(container.querySelector('.md-fileupload__droparea')).toBeInTheDocument();
    });

    it('renders upload icon', () => {
      const { container } = render(<MdFileUpload />);
      expect(container.querySelector('.md-fileupload__droparea-icon')).toBeInTheDocument();
    });

    it('renders file selection button', () => {
      render(<MdFileUpload />);
      expect(screen.getByRole('button', { name: /velg fra denne maskinen/i })).toBeInTheDocument();
    });

    it('renders action buttons by default', () => {
      render(<MdFileUpload />);
      expect(screen.getByRole('button', { name: /last opp/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /avbryt/i })).toBeInTheDocument();
    });

    it('hides action buttons when hideButtons is true', () => {
      render(<MdFileUpload hideButtons />);
      expect(screen.queryByRole('button', { name: /last opp/i })).not.toBeInTheDocument();
    });
  });

  describe('custom text', () => {
    it('renders custom upload button text', () => {
      render(<MdFileUpload uploadButtonText="Submit Files" />);
      expect(screen.getByRole('button', { name: /submit files/i })).toBeInTheDocument();
    });

    it('renders custom cancel button text', () => {
      render(<MdFileUpload cancelButtonText="Clear" />);
      expect(screen.getByRole('button', { name: /clear/i })).toBeInTheDocument();
    });

    it('renders custom upload texts', () => {
      render(<MdFileUpload uploadTexts={['Drop file here or', 'browse files']} />);
      expect(screen.getByText(/drop file here or/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /browse files/i })).toBeInTheDocument();
    });
  });

  describe('file input', () => {
    it('has file input with correct type', () => {
      const { container } = render(<MdFileUpload />);
      const input = container.querySelector('input[type="file"]');
      expect(input).toBeInTheDocument();
    });

    it('allows multiple files by default', () => {
      const { container } = render(<MdFileUpload />);
      const input = container.querySelector('input[type="file"]');
      expect(input).toHaveAttribute('multiple');
    });

    it('restricts to single file when multiple is false', () => {
      const { container } = render(<MdFileUpload multiple={false} />);
      const input = container.querySelector('input[type="file"]');
      expect(input).not.toHaveAttribute('multiple');
    });

    it('accepts only images when imagesOnly is true', () => {
      const { container } = render(<MdFileUpload imagesOnly />);
      const input = container.querySelector('input[type="file"]');
      expect(input).toHaveAttribute('accept', 'image/*');
    });

    it('accepts all files by default', () => {
      const { container } = render(<MdFileUpload />);
      const input = container.querySelector('input[type="file"]');
      expect(input).toHaveAttribute('accept', '*');
    });
  });

  describe('file count display', () => {
    it('shows file count text', () => {
      render(<MdFileUpload />);
      expect(screen.getByText(/antall filer: 0/i)).toBeInTheDocument();
    });

    it('shows image count text when imagesOnly', () => {
      render(<MdFileUpload imagesOnly />);
      expect(screen.getByText(/antall bilder: 0/i)).toBeInTheDocument();
    });

    it('shows single file limit when multiple is false', () => {
      render(<MdFileUpload multiple={false} />);
      expect(screen.getByText(/antall filer: 0 \/ 1/i)).toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('opens file dialog when selection button is clicked', async () => {
      const user = userEvent.setup();
      const { container } = render(<MdFileUpload />);

      const input = container.querySelector('input[type="file"]') as HTMLInputElement;
      const clickSpy = vi.spyOn(input, 'click');

      await user.click(screen.getByRole('button', { name: /velg fra denne maskinen/i }));
      expect(clickSpy).toHaveBeenCalled();
    });

    it('calls onCancel when cancel button is clicked', async () => {
      const user = userEvent.setup();
      const onCancel = vi.fn();
      render(<MdFileUpload onCancel={onCancel} />);

      await user.click(screen.getByRole('button', { name: /avbryt/i }));
      expect(onCancel).toHaveBeenCalled();
    });

    it('disables upload button when no files selected', () => {
      render(<MdFileUpload />);
      expect(screen.getByRole('button', { name: /last opp/i })).toBeDisabled();
    });
  });

  describe('drag and drop', () => {
    it('adds active class on drag enter', () => {
      const { container } = render(<MdFileUpload />);
      const dropArea = container.querySelector('.md-fileupload__droparea') as HTMLElement;

      const dragEvent = new Event('dragenter', { bubbles: true });
      Object.defineProperty(dragEvent, 'preventDefault', { value: vi.fn() });
      Object.defineProperty(dragEvent, 'stopPropagation', { value: vi.fn() });
      dropArea.dispatchEvent(dragEvent);

      expect(dropArea).toHaveClass('md-fileupload__droparea--active');
    });

    it('removes active class on drag leave', () => {
      const { container } = render(<MdFileUpload />);
      const dropArea = container.querySelector('.md-fileupload__droparea') as HTMLElement;

      // First add the class
      dropArea.classList.add('md-fileupload__droparea--active');

      const dragLeaveEvent = new Event('dragleave', { bubbles: true });
      Object.defineProperty(dragLeaveEvent, 'preventDefault', { value: vi.fn() });
      Object.defineProperty(dragLeaveEvent, 'stopPropagation', { value: vi.fn() });
      dropArea.dispatchEvent(dragLeaveEvent);

      expect(dropArea).not.toHaveClass('md-fileupload__droparea--active');
    });
  });

  describe('default text for images', () => {
    it('shows image-specific drop text when imagesOnly', () => {
      render(<MdFileUpload imagesOnly />);
      expect(screen.getByText(/dropp et bilde her eller/i)).toBeInTheDocument();
    });

    it('shows file-specific drop text by default', () => {
      render(<MdFileUpload />);
      expect(screen.getByText(/dropp en fil her eller/i)).toBeInTheDocument();
    });
  });

  describe('drag events', () => {
    it('handles drag end event', () => {
      const { container } = render(<MdFileUpload />);

      const dropArea = container.querySelector('.md-fileupload__droparea') as HTMLElement;
      dropArea.classList.add('md-fileupload__droparea--active');

      fireEvent.dragEnd(dropArea);

      expect(dropArea).not.toHaveClass('md-fileupload__droparea--active');
    });

    it('handles drag over event', () => {
      const { container } = render(<MdFileUpload />);

      const dropArea = container.querySelector('.md-fileupload__droparea') as HTMLElement;

      const dragOverEvent = new Event('dragover', { bubbles: true });
      const preventDefault = vi.fn();
      const stopPropagation = vi.fn();
      Object.defineProperty(dragOverEvent, 'preventDefault', { value: preventDefault });
      Object.defineProperty(dragOverEvent, 'stopPropagation', { value: stopPropagation });
      dropArea.dispatchEvent(dragOverEvent);

      expect(preventDefault).toHaveBeenCalled();
      expect(stopPropagation).toHaveBeenCalled();
    });
  });
});
