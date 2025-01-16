import { useCallback, useEffect } from 'react';

const focusableHtmlElements = 'button, input, [tabindex]';

export default function useDropdown(
  ref: React.RefObject<HTMLDivElement | null>,
  open: boolean,
  setOpen: (_open: boolean) => void,
  elementType?: 'autocomplete' | 'select',
) {
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    const focusableElements = ref.current?.querySelectorAll<HTMLElement>(focusableHtmlElements);

    if (e.key === 'Escape') {
      const element = focusableElements?.[0];
      element?.focus();
      if (elementType === 'autocomplete') {
        element?.blur();
      }
      document.removeEventListener('keydown', onKeyDown, false);
      setOpen(false);
    }

    if (e.key === 'Tab') {
      if (e.shiftKey) {
        return;
      }
      if (!focusableElements || !document.activeElement) {
        return;
      }
      const lastElement = focusableElements[Math.max(0, focusableElements.length - 1)];

      if (document.activeElement.getAttribute('id') === lastElement.id) {
        document.removeEventListener('keydown', onKeyDown, false);
        setOpen(false);
      }
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', onKeyDown, false);
    }
  }, [open, onKeyDown]);
}
