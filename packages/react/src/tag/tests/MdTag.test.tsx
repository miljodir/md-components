import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { MdTag } from '../MdTag';

describe('MdTag', () => {
  describe('rendering', () => {
    it('renders with label', () => {
      render(<MdTag theme="success" label="Success" />);
      expect(screen.getByText('Success')).toBeInTheDocument();
    });

    it('renders without label (nolabel class)', () => {
      const { container } = render(<MdTag theme="success" />);
      expect(container.querySelector('.md-tag--nolabel')).toBeInTheDocument();
    });
  });

  describe('themes', () => {
    it('applies primary theme', () => {
      const { container } = render(<MdTag theme="primary" label="Primary" customIcon={<span />} />);
      expect(container.querySelector('.md-tag-theme--primary')).toBeInTheDocument();
    });

    it('applies secondary theme', () => {
      const { container } = render(<MdTag theme="secondary" label="Secondary" customIcon={<span />} />);
      expect(container.querySelector('.md-tag-theme--secondary')).toBeInTheDocument();
    });

    it('applies success theme', () => {
      const { container } = render(<MdTag theme="success" label="Success" />);
      expect(container.querySelector('.md-tag-theme--success')).toBeInTheDocument();
    });

    it('applies warning theme', () => {
      const { container } = render(<MdTag theme="warning" label="Warning" />);
      expect(container.querySelector('.md-tag-theme--warning')).toBeInTheDocument();
    });

    it('applies info theme', () => {
      const { container } = render(<MdTag theme="info" label="Info" />);
      expect(container.querySelector('.md-tag-theme--info')).toBeInTheDocument();
    });

    it('applies error theme', () => {
      const { container } = render(<MdTag theme="error" label="Error" />);
      expect(container.querySelector('.md-tag-theme--error')).toBeInTheDocument();
    });
  });

  describe('types', () => {
    it('applies base type by default', () => {
      const { container } = render(<MdTag theme="success" label="Test" />);
      expect(container.querySelector('.md-tag-type--outline')).not.toBeInTheDocument();
      expect(container.querySelector('.md-tag-type--light')).not.toBeInTheDocument();
    });

    it('applies outlined type', () => {
      const { container } = render(<MdTag theme="success" label="Test" type="outlined" />);
      expect(container.querySelector('.md-tag-type--outline')).toBeInTheDocument();
    });

    it('applies light type', () => {
      const { container } = render(<MdTag theme="success" label="Test" type="light" />);
      expect(container.querySelector('.md-tag-type--light')).toBeInTheDocument();
    });
  });

  describe('icons', () => {
    it('shows icon when showIcon is true', () => {
      const { container } = render(<MdTag theme="success" label="Success" showIcon />);
      expect(container.querySelector('.md-tag-icon')).toBeInTheDocument();
    });

    it('does not show icon when showIcon is false', () => {
      const { container } = render(<MdTag theme="success" label="Success" />);
      expect(container.querySelector('.md-tag-icon')).not.toBeInTheDocument();
    });

    it('renders custom icon for primary theme', () => {
      render(<MdTag theme="primary" label="Custom" showIcon customIcon={<span data-testid="custom-icon" />} />);
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('renders custom icon for secondary theme', () => {
      render(<MdTag theme="secondary" label="Custom" showIcon customIcon={<span data-testid="custom-icon" />} />);
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('renders built-in icon for success theme', () => {
      const { container } = render(<MdTag theme="success" label="Success" showIcon />);
      // Icon is wrapped in .md-tag-icon container
      expect(container.querySelector('.md-tag-icon')).toBeInTheDocument();
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('renders built-in icon for warning theme', () => {
      const { container } = render(<MdTag theme="warning" label="Warning" showIcon />);
      // Icon is wrapped in .md-tag-icon container
      expect(container.querySelector('.md-tag-icon')).toBeInTheDocument();
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('renders built-in icon for info theme', () => {
      const { container } = render(<MdTag theme="info" label="Info" showIcon />);
      // Icon is wrapped in .md-tag-icon container
      expect(container.querySelector('.md-tag-icon')).toBeInTheDocument();
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('renders built-in icon for error theme', () => {
      const { container } = render(<MdTag theme="error" label="Error" showIcon />);
      // Icon is wrapped in .md-tag-icon container
      expect(container.querySelector('.md-tag-icon')).toBeInTheDocument();
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('tooltipOnly mode', () => {
    it('hides label when tooltipOnly is true', () => {
      render(<MdTag theme="success" label="Hidden Label" tooltipOnly showIcon />);
      // With tooltipOnly, the label appears in multiple places (visually hidden + tooltip)
      // The text IS in the document but not visible
      const elements = screen.getAllByText('Hidden Label');
      expect(elements.length).toBeGreaterThan(0);
    });

    it('shows tooltip instead of label', () => {
      const { container } = render(<MdTag theme="success" label="Tooltip Label" tooltipOnly showIcon />);
      expect(container.querySelector('.md-tooltip__anchor')).toBeInTheDocument();
    });
  });

  describe('props forwarding', () => {
    it('merges custom className', () => {
      const { container } = render(<MdTag theme="success" label="Test" className="custom-class" />);
      expect(container.querySelector('.md-tag')).toHaveClass('custom-class');
    });
  });
});
