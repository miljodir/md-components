import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdClickOutsideWrapper } from '../MdClickOutsideWrapper';

describe('MdClickOutsideWrapper', () => {
  describe('rendering', () => {
    it('renders children', () => {
      render(
        <MdClickOutsideWrapper onClickOutside={() => {}}>
          <div data-testid="content">Content</div>
        </MdClickOutsideWrapper>,
      );
      expect(screen.getByTestId('content')).toBeInTheDocument();
    });

    it('renders as div wrapper', () => {
      const { container } = render(
        <MdClickOutsideWrapper onClickOutside={() => {}}>
          <span>Content</span>
        </MdClickOutsideWrapper>,
      );
      expect(container.querySelector('div')).toBeInTheDocument();
    });
  });

  describe('click outside detection', () => {
    it('calls onClickOutside when clicking outside', async () => {
      const user = userEvent.setup();
      const onClickOutside = vi.fn();
      render(
        <div>
          <MdClickOutsideWrapper onClickOutside={onClickOutside}>
            <span>Inside</span>
          </MdClickOutsideWrapper>
          <button data-testid="outside">Outside</button>
        </div>,
      );

      await user.click(screen.getByTestId('outside'));
      expect(onClickOutside).toHaveBeenCalled();
    });

    it('does not call onClickOutside when clicking inside', async () => {
      const user = userEvent.setup();
      const onClickOutside = vi.fn();
      render(
        <MdClickOutsideWrapper onClickOutside={onClickOutside}>
          <button data-testid="inside">Inside</button>
        </MdClickOutsideWrapper>,
      );

      await user.click(screen.getByTestId('inside'));
      expect(onClickOutside).not.toHaveBeenCalled();
    });

    it('does not call onClickOutside when clicking on nested child', async () => {
      const user = userEvent.setup();
      const onClickOutside = vi.fn();
      render(
        <MdClickOutsideWrapper onClickOutside={onClickOutside}>
          <div>
            <button data-testid="nested">Nested</button>
          </div>
        </MdClickOutsideWrapper>,
      );

      await user.click(screen.getByTestId('nested'));
      expect(onClickOutside).not.toHaveBeenCalled();
    });
  });

  describe('ref forwarding', () => {
    it('forwards ref to wrapper div', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <MdClickOutsideWrapper ref={ref} onClickOutside={() => {}}>
          <span>Content</span>
        </MdClickOutsideWrapper>,
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('handles function ref', () => {
      let refValue: HTMLDivElement | null = null;
      render(
        <MdClickOutsideWrapper
          ref={el => {
            refValue = el;
          }}
          onClickOutside={() => {}}
        >
          <span>Content</span>
        </MdClickOutsideWrapper>,
      );
      expect(refValue).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('props forwarding', () => {
    it('applies custom className', () => {
      const { container } = render(
        <MdClickOutsideWrapper className="custom-class" onClickOutside={() => {}}>
          <span>Content</span>
        </MdClickOutsideWrapper>,
      );
      expect(container.querySelector('.custom-class')).toBeInTheDocument();
    });

    it('forwards other props', () => {
      render(
        <MdClickOutsideWrapper data-testid="wrapper" onClickOutside={() => {}}>
          <span>Content</span>
        </MdClickOutsideWrapper>,
      );
      expect(screen.getByTestId('wrapper')).toBeInTheDocument();
    });
  });

  describe('cleanup', () => {
    it('removes event listener on unmount', () => {
      const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener');
      const { unmount } = render(
        <MdClickOutsideWrapper onClickOutside={() => {}}>
          <span>Content</span>
        </MdClickOutsideWrapper>,
      );

      unmount();
      expect(removeEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function), true);
      removeEventListenerSpy.mockRestore();
    });
  });
});
