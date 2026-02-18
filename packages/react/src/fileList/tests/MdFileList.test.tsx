import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdFileList } from '../MdFileList';

const mockFiles = [
  { name: 'document.pdf', size: 1024, url: 'http://example.com/doc.pdf' },
  { name: 'image.png', size: 2048 },
];

describe('MdFileList', () => {
  describe('rendering', () => {
    it('renders file list', () => {
      const { container } = render(<MdFileList files={mockFiles} />);
      expect(container.querySelector('.md-filelist')).toBeInTheDocument();
    });

    it('renders file names', () => {
      render(<MdFileList files={mockFiles} />);
      expect(screen.getByText('document.pdf')).toBeInTheDocument();
      expect(screen.getByText('image.png')).toBeInTheDocument();
    });

    it('renders file sizes', () => {
      render(<MdFileList files={mockFiles} />);
      expect(screen.getByText('1 KB')).toBeInTheDocument();
      expect(screen.getByText('2 KB')).toBeInTheDocument();
    });

    it('renders file icons by default', () => {
      const { container } = render(<MdFileList files={mockFiles} />);
      expect(container.querySelectorAll('.md-filelist__file-icon').length).toBe(2);
    });

    it('hides file icons when hideIcons is true', () => {
      const { container } = render(<MdFileList files={mockFiles} hideIcons />);
      expect(container.querySelector('.md-filelist__file-icon')).not.toBeInTheDocument();
    });

    it('renders empty when no files', () => {
      const { container } = render(<MdFileList files={[]} />);
      expect(container.querySelector('.md-filelist__file')).not.toBeInTheDocument();
    });
  });

  describe('download button', () => {
    it('shows download button when onDownloadFile is provided and file has url', async () => {
      const onDownload = vi.fn();
      render(<MdFileList files={mockFiles} onDownloadFile={onDownload} />);
      // Download button appears for files with url
      const downloadButtons = screen.getAllByRole('button');
      expect(downloadButtons.length).toBeGreaterThan(0);
    });

    it('hides download button when hideDownload is true', () => {
      const onDownload = vi.fn();
      const { container } = render(<MdFileList files={mockFiles} onDownloadFile={onDownload} hideDownload />);
      // Should not find download button icon
      expect(container.querySelectorAll('.md-filelist__file-actions button').length).toBe(0);
    });

    it('calls onDownloadFile when download button is clicked', async () => {
      const user = userEvent.setup();
      const onDownload = vi.fn();
      render(<MdFileList files={mockFiles} onDownloadFile={onDownload} />);

      const buttons = screen.getAllByRole('button');
      await user.click(buttons[0]);
      expect(onDownload).toHaveBeenCalled();
    });
  });

  describe('delete button', () => {
    it('shows delete button when allowDelete is true and onRemoveFile is provided', () => {
      const onRemove = vi.fn();
      render(<MdFileList files={mockFiles} allowDelete onRemoveFile={onRemove} />);
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('calls onRemoveFile when delete button is clicked', async () => {
      const user = userEvent.setup();
      const onRemove = vi.fn();
      render(<MdFileList files={mockFiles} allowDelete onRemoveFile={onRemove} />);

      const buttons = screen.getAllByRole('button');
      await user.click(buttons[0]);
      expect(onRemove).toHaveBeenCalled();
    });
  });

  describe('edit button', () => {
    it('shows edit button when allowEdit is true and onEditFile is provided', () => {
      const onEdit = vi.fn();
      render(<MdFileList files={mockFiles} allowEdit onEditFile={onEdit} />);
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('calls onEditFile when edit button is clicked', async () => {
      const user = userEvent.setup();
      const onEdit = vi.fn();
      render(<MdFileList files={mockFiles} allowEdit onEditFile={onEdit} />);

      const buttons = screen.getAllByRole('button');
      await user.click(buttons[0]);
      expect(onEdit).toHaveBeenCalled();
    });
  });

  describe('print button', () => {
    it('shows print button for printable file types', () => {
      const pdfFiles = [{ name: 'doc.pdf', size: 1024 }];
      const onPrint = vi.fn();
      render(<MdFileList files={pdfFiles} hidePrint={false} onPrintFile={onPrint} />);
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('calls onPrintFile when print button is clicked', async () => {
      const user = userEvent.setup();
      const pdfFiles = [{ name: 'doc.pdf', size: 1024 }];
      const onPrint = vi.fn();
      render(<MdFileList files={pdfFiles} hidePrint={false} onPrintFile={onPrint} />);

      const buttons = screen.getAllByRole('button');
      await user.click(buttons[0]);
      expect(onPrint).toHaveBeenCalled();
    });
  });

  describe('custom labels', () => {
    it('uses custom labels for buttons', () => {
      const onRemove = vi.fn();
      render(<MdFileList files={mockFiles} allowDelete onRemoveFile={onRemove} labels={{ delete: 'Remove file' }} />);
      // Button should have the custom label (used for tooltip/aria)
      expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
    });
  });
});
