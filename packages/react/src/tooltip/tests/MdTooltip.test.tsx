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

    it('does not mount hidden tooltips for large collections', () => {
      const { baseElement } = render(
        <>
          {Array.from({ length: 100 }, (_, index) => {
            return (
              <MdTooltip key={index} tooltipContent={`Tooltip ${index}`}>
                <button>Button {index}</button>
              </MdTooltip>
            );
          })}
        </>,
      );

      expect(baseElement.querySelectorAll('.md-tooltip')).toHaveLength(0);
    });

    it('supports keeping hidden tooltip content mounted', () => {
      render(
        <MdTooltip tooltipContent="Always mounted" unmountOnHide={false}>
          <button>Button</button>
        </MdTooltip>,
      );

      expect(screen.getByRole('tooltip', { hidden: true })).toHaveTextContent('Always mounted');
    });
  });

  describe('modes', () => {
    it('applies medium mode by default', () => {
      const { baseElement } = render(
        <MdTooltip tooltipContent="Test" unmountOnHide={false}>
          <button>Button</button>
        </MdTooltip>,
      );
      // Tooltip is rendered in a portal, so use baseElement
      const tooltip = baseElement.querySelector('.md-tooltip');
      expect(tooltip).toHaveClass('md-tooltip--medium');
    });

    it('applies small mode', () => {
      const { baseElement } = render(
        <MdTooltip tooltipContent="Test" mode="small" unmountOnHide={false}>
          <button>Button</button>
        </MdTooltip>,
      );
      const tooltip = baseElement.querySelector('.md-tooltip');
      expect(tooltip).toHaveClass('md-tooltip--small');
    });

    it('applies large mode', () => {
      const { baseElement } = render(
        <MdTooltip tooltipContent="Test" mode="large" unmountOnHide={false}>
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
        <MdTooltip tooltipContent="Test" tooltipClassName="custom-tooltip" unmountOnHide={false}>
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
    it('provides tooltip content for screen readers', () => {
      render(
        <MdTooltip tooltipContent="Screen reader text" unmountOnHide={false}>
          <button>Button</button>
        </MdTooltip>,
      );
      // The tooltip content appears in the portal
      const elements = screen.getAllByText('Screen reader text');
      expect(elements.length).toBeGreaterThan(0);
    });
  });
});
