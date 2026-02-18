/* eslint-disable no-console, @typescript-eslint/triple-slash-reference, spaced-comment */
/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom/vitest" />
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

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
