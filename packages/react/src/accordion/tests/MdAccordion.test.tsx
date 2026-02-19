import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { MdAccordion } from '../MdAccordion';
import { MdAccordionItem } from '../MdAccordionItem';

describe('MdAccordion', () => {
  describe('rendering', () => {
    it('renders with default props', () => {
      render(
        <MdAccordion name="test-accordion">
          <MdAccordionItem label="Item 1">Content 1</MdAccordionItem>
        </MdAccordion>,
      );
      expect(screen.getByText('Item 1')).toBeInTheDocument();
    });

    it('renders multiple accordion items', () => {
      render(
        <MdAccordion name="test-accordion">
          <MdAccordionItem label="Item 1">Content 1</MdAccordionItem>
          <MdAccordionItem label="Item 2">Content 2</MdAccordionItem>
          <MdAccordionItem label="Item 3">Content 3</MdAccordionItem>
        </MdAccordion>,
      );
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(
        <MdAccordion name="test-accordion" className="custom-class">
          <MdAccordionItem label="Item 1">Content 1</MdAccordionItem>
        </MdAccordion>,
      );
      expect(container.querySelector('.md-accordion')).toHaveClass('custom-class');
    });
  });

  describe('themes', () => {
    it('passes primary theme to children', () => {
      const { container } = render(
        <MdAccordion name="test-accordion" theme="primary">
          <MdAccordionItem label="Item 1">Content 1</MdAccordionItem>
        </MdAccordion>,
      );
      expect(container.querySelector('.md-accordion-item')).toBeInTheDocument();
    });

    it('passes secondary theme to children', () => {
      const { container } = render(
        <MdAccordion name="test-accordion" theme="secondary">
          <MdAccordionItem label="Item 1">Content 1</MdAccordionItem>
        </MdAccordion>,
      );
      expect(container.querySelector('.md-accordion-item--secondary')).toBeInTheDocument();
    });

    it('passes add theme to children', () => {
      const { container } = render(
        <MdAccordion name="test-accordion" theme="add">
          <MdAccordionItem label="Item 1">Content 1</MdAccordionItem>
        </MdAccordion>,
      );
      expect(container.querySelector('.md-accordion-item--add')).toBeInTheDocument();
    });
  });

  describe('props forwarding', () => {
    it('forwards rounded prop to children', () => {
      const { container } = render(
        <MdAccordion name="test-accordion" rounded>
          <MdAccordionItem label="Item 1">Content 1</MdAccordionItem>
        </MdAccordion>,
      );
      expect(container.querySelector('.md-accordion-item--rounded')).toBeInTheDocument();
    });

    it('forwards disabled prop to children', () => {
      const { container } = render(
        <MdAccordion name="test-accordion" disabled>
          <MdAccordionItem label="Item 1">Content 1</MdAccordionItem>
        </MdAccordion>,
      );
      expect(container.querySelector('.md-accordion-item--disabled')).toBeInTheDocument();
    });

    it('forwards data-* attributes', () => {
      render(
        <MdAccordion name="test-accordion" data-testid="accordion-test">
          <MdAccordionItem label="Item 1">Content 1</MdAccordionItem>
        </MdAccordion>,
      );
      expect(screen.getByTestId('accordion-test')).toBeInTheDocument();
    });
  });
});

describe('MdAccordionItem', () => {
  describe('rendering', () => {
    it('renders with label', () => {
      render(<MdAccordionItem label="Test Label">Content</MdAccordionItem>);
      expect(screen.getByText('Test Label')).toBeInTheDocument();
    });

    it('renders with headerContent', () => {
      render(
        <MdAccordionItem headerContent={<span data-testid="custom-header">Custom Header</span>}>
          Content
        </MdAccordionItem>,
      );
      expect(screen.getByTestId('custom-header')).toBeInTheDocument();
    });

    it('renders children content', () => {
      render(<MdAccordionItem label="Label">Test Content</MdAccordionItem>);
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('renders close button when hideCloseButton is false', () => {
      render(
        <MdAccordionItem label="Label" hideCloseButton={false}>
          Content
        </MdAccordionItem>,
      );
      expect(screen.getByText('Lukk')).toBeInTheDocument();
    });

    it('hides close button when hideCloseButton is true', () => {
      render(
        <MdAccordionItem label="Label" hideCloseButton>
          Content
        </MdAccordionItem>,
      );
      expect(screen.queryByText('Lukk')).not.toBeInTheDocument();
    });

    it('renders custom close button text', () => {
      render(
        <MdAccordionItem label="Label" closeButtonText="Close">
          Content
        </MdAccordionItem>,
      );
      expect(screen.getByText('Close')).toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('can be expanded by clicking summary', async () => {
      const user = userEvent.setup();
      render(<MdAccordionItem label="Click Me">Hidden Content</MdAccordionItem>);

      const summary = screen.getByText('Click Me');
      await user.click(summary);

      // The details element should have the open attribute
      const details = summary.closest('details');
      expect(details).toHaveAttribute('open');
    });
  });

  describe('expanded state', () => {
    it('is collapsed by default', () => {
      render(<MdAccordionItem label="Label">Content</MdAccordionItem>);
      const details = screen.getByText('Label').closest('details');
      expect(details).not.toHaveAttribute('open');
    });

    it('can be expanded initially', () => {
      render(
        <MdAccordionItem label="Label" expanded>
          Content
        </MdAccordionItem>,
      );
      const details = screen.getByText('Label').closest('details');
      expect(details).toHaveAttribute('open');
    });
  });

  describe('disabled state', () => {
    it('applies disabled class when disabled', () => {
      const { container } = render(
        <MdAccordionItem label="Label" disabled>
          Content
        </MdAccordionItem>,
      );
      expect(container.querySelector('.md-accordion-item--disabled')).toBeInTheDocument();
    });
  });

  describe('custom id', () => {
    it('uses provided id', () => {
      const { container } = render(
        <MdAccordionItem id="custom-id" label="Label">
          Content
        </MdAccordionItem>,
      );
      expect(container.querySelector('#custom-id')).toBeInTheDocument();
    });
  });
});
