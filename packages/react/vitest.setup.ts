/* eslint-disable no-console, @typescript-eslint/triple-slash-reference, spaced-comment */
/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom/vitest" />
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

// ResizeObserver is not available in jsdom
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// CSS.supports may be missing/non-function in jsdom + Node 24.
// Provide a stable fallback to prevent runtime errors in components/tests.
if (!(globalThis as typeof globalThis & { CSS?: { supports?: (...args: string[]) => boolean } }).CSS) {
  Object.defineProperty(globalThis, 'CSS', {
    value: {},
    writable: true,
    configurable: true,
  });
}

if (
  typeof (globalThis as typeof globalThis & { CSS?: { supports?: (...args: string[]) => boolean } }).CSS?.supports !==
  'function'
) {
  Object.defineProperty(globalThis.CSS, 'supports', {
    value: () => false,
    writable: true,
    configurable: true,
  });
}

// Suppress specific console warnings that come from Ariakit internal async updates
// These are false positives caused by Ariakit's internal state management
const originalError = console.error;
console.error = (...args: unknown[]) => {
  const fullMessage = args
    .map(arg => {
      return String(arg);
    })
    .join(' ');
  if (fullMessage.includes('inside a test was not wrapped in act') && fullMessage.includes('@ariakit')) {
    return;
  }
  originalError.apply(console, args);
};
