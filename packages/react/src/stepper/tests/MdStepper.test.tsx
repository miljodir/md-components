import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { MdStep } from '../MdStep';
import { MdStepper } from '../MdStepper';

describe('MdStepper', () => {
  describe('rendering', () => {
    it('renders steps', () => {
      render(
        <MdStepper activeStep={0}>
          <MdStep title="Step 1">Content 1</MdStep>
          <MdStep title="Step 2">Content 2</MdStep>
          <MdStep title="Step 3">Content 3</MdStep>
        </MdStepper>,
      );
      expect(screen.getByText('Step 1')).toBeInTheDocument();
      expect(screen.getByText('Step 2')).toBeInTheDocument();
      expect(screen.getByText('Step 3')).toBeInTheDocument();
    });

    it('renders step numbers', () => {
      render(
        <MdStepper activeStep={0}>
          <MdStep title="Step 1">Content 1</MdStep>
          <MdStep title="Step 2">Content 2</MdStep>
        </MdStepper>,
      );
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument();
    });

    it('renders active step content', () => {
      render(
        <MdStepper activeStep={0}>
          <MdStep title="Step 1">First step content</MdStep>
          <MdStep title="Step 2">Second step content</MdStep>
        </MdStepper>,
      );
      expect(screen.getByText('First step content')).toBeInTheDocument();
    });
  });

  describe('active step', () => {
    it('marks first step as active when activeStep is 0', () => {
      const { container } = render(
        <MdStepper activeStep={0}>
          <MdStep title="Step 1">Content 1</MdStep>
          <MdStep title="Step 2">Content 2</MdStep>
        </MdStepper>,
      );
      expect(container.querySelector('.md-stepper__selected')).toBeInTheDocument();
      expect(screen.getByText('Step 1').closest('h4')).toHaveClass('md-stepper__selected');
    });

    it('marks second step as active when activeStep is 1', () => {
      render(
        <MdStepper activeStep={1}>
          <MdStep title="Step 1">Content 1</MdStep>
          <MdStep title="Step 2">Content 2</MdStep>
        </MdStepper>,
      );
      expect(screen.getByText('Step 2').closest('h4')).toHaveClass('md-stepper__selected');
    });
  });

  describe('completed steps', () => {
    it('marks previous steps as completed', () => {
      render(
        <MdStepper activeStep={2}>
          <MdStep title="Step 1">Content 1</MdStep>
          <MdStep title="Step 2">Content 2</MdStep>
          <MdStep title="Step 3">Content 3</MdStep>
        </MdStepper>,
      );
      expect(screen.getByText('Step 1').closest('h4')).toHaveClass('md-stepper__completed');
      expect(screen.getByText('Step 2').closest('h4')).toHaveClass('md-stepper__completed');
      expect(screen.getByText('Step 3').closest('h4')).toHaveClass('md-stepper__selected');
    });

    it('shows check icon for completed steps', () => {
      const { container } = render(
        <MdStepper activeStep={1}>
          <MdStep title="Step 1">Content 1</MdStep>
          <MdStep title="Step 2">Content 2</MdStep>
        </MdStepper>,
      );
      expect(container.querySelector('.md-stepper__step-title-badge.completed')).toBeInTheDocument();
    });

    it('renders completed content when step is completed', () => {
      render(
        <MdStepper activeStep={1}>
          <MdStep title="Step 1" completedContent={<span>Completed!</span>}>
            Active content
          </MdStep>
          <MdStep title="Step 2">Content 2</MdStep>
        </MdStepper>,
      );
      expect(screen.getByText('Completed!')).toBeInTheDocument();
    });
  });

  describe('disabled steps', () => {
    it('marks future steps as disabled', () => {
      render(
        <MdStepper activeStep={0}>
          <MdStep title="Step 1">Content 1</MdStep>
          <MdStep title="Step 2">Content 2</MdStep>
          <MdStep title="Step 3">Content 3</MdStep>
        </MdStepper>,
      );
      expect(screen.getByText('Step 2').closest('h4')).toHaveClass('md-stepper__disabled');
      expect(screen.getByText('Step 3').closest('h4')).toHaveClass('md-stepper__disabled');
    });

    it('shows step number for disabled steps', () => {
      const { container } = render(
        <MdStepper activeStep={0}>
          <MdStep title="Step 1">Content 1</MdStep>
          <MdStep title="Step 2">Content 2</MdStep>
        </MdStepper>,
      );
      expect(container.querySelector('.md-stepper__step-title-badge.disabled')).toBeInTheDocument();
    });
  });
});

describe('MdStep', () => {
  it('renders children', () => {
    render(
      <MdStepper activeStep={0}>
        <MdStep title="Test">
          <div data-testid="step-content">Step content</div>
        </MdStep>
        <MdStep title="Test 2">Content 2</MdStep>
      </MdStepper>,
    );
    expect(screen.getByTestId('step-content')).toBeInTheDocument();
  });
});
