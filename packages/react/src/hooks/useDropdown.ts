import { useCallback, useEffect } from 'react';

const focusableHtmlElements = 'button, input, [tabindex]';

export default function useDropdown(
  ref: React.RefObject<HTMLDivElement>,
  open: boolean,
  setOpen: (_open: boolean) => void,
) {
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    const focusableElements = ref.current?.querySelectorAll<HTMLElement>(focusableHtmlElements);

    if (e.key === 'Escape') {
      const button = focusableElements?.[0];
      button?.focus();
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
      const lastElement = focusableElements[focusableElements.length - 1];

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
