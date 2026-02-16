import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { MdTooltip } from '../MdTooltip';

describe('MdTooltip', () => {
  describe('rendering', () => {
    it('renders children', () => {
      render(
        <MdTooltip tooltipContent="Tooltip text">
          <button>Hover me</button>
        </MdTooltip>,
      );
      expect(screen.getByRole('button', { name: /Hover me/i })).toBeInTheDocument();
    });

    it('renders tooltip content (visible to screen readers)', () => {
      render(
        <MdTooltip tooltipContent="Helpful information">
          <button>Button</button>
        </MdTooltip>,
      );
      // Tooltip content appears in multiple places (visually hidden + portal)
      const elements = screen.getAllByText('Helpful information');
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  describe('modes', () => {
    it('applies medium mode by default', () => {
      const { baseElement } = render(
        <MdTooltip tooltipContent="Test">
          <button>Button</button>
        </MdTooltip>,
      );
      // Tooltip is rendered in a portal, so use baseElement
      const tooltip = baseElement.querySelector('.md-tooltip');
      expect(tooltip).toHaveClass('md-tooltip--medium');
    });

    it('applies small mode', () => {
      const { baseElement } = render(
        <MdTooltip tooltipContent="Test" mode="small">
          <button>Button</button>
        </MdTooltip>,
      );
      const tooltip = baseElement.querySelector('.md-tooltip');
      expect(tooltip).toHaveClass('md-tooltip--small');
    });

    it('applies large mode', () => {
      const { baseElement } = render(
        <MdTooltip tooltipContent="Test" mode="large">
          <button>Button</button>
        </MdTooltip>,
      );
      const tooltip = baseElement.querySelector('.md-tooltip');
      expect(tooltip).toHaveClass('md-tooltip--large');
    });
  });

  describe('props forwarding', () => {
    it('applies anchorClassName', () => {
      const { container } = render(
        <MdTooltip tooltipContent="Test" anchorClassName="custom-anchor">
          <button>Button</button>
        </MdTooltip>,
      );
      expect(container.querySelector('.md-tooltip__anchor')).toHaveClass('custom-anchor');
    });

    it('applies tooltipClassName', () => {
      const { baseElement } = render(
        <MdTooltip tooltipContent="Test" tooltipClassName="custom-tooltip">
          <button>Button</button>
        </MdTooltip>,
      );
      // Tooltip is rendered in a portal, so use baseElement
      const tooltip = baseElement.querySelector('.md-tooltip');
      expect(tooltip).toHaveClass('custom-tooltip');
    });

    it('forwards data-* attributes to anchor', () => {
      render(
        <MdTooltip tooltipContent="Test" data-testid="tooltip-anchor">
          <button>Button</button>
        </MdTooltip>,
      );
      expect(screen.getByTestId('tooltip-anchor')).toBeInTheDocument();
    });
  });

  describe('accessibility', () => {
    it('provides visually hidden content for screen readers', () => {
      render(
        <MdTooltip tooltipContent="Screen reader text">
          <button>Button</button>
        </MdTooltip>,
      );
      // The tooltip content appears in multiple places for accessibility
      const elements = screen.getAllByText('Screen reader text');
      expect(elements.length).toBeGreaterThan(0);
    });
  });
});
