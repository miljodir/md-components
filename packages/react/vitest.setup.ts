import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Suppress specific console warnings that come from Ariakit internal async updates
// These are false positives and don't affect test reliability
const originalError = console.error;
console.error = (...args: unknown[]) => {
  const message = args[0];
  if (typeof message === 'string' && message.includes('inside a test was not wrapped in act')) {
    return;
  }
  originalError.apply(console, args);
};
