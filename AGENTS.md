# AGENTS.md

Instructions for AI coding agents working on this React component library project.

## Setup

```bash
npm install          # Install dependencies
npm run storybook    # Start Storybook dev server (http://localhost:6006)
```

## Build & Lint

```bash
npm run lint         # ESLint check
npm test             # Run all tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

**Always run `npm run lint` and `npm test` before committing. Fix any errors before finishing.**

## Tech Stack

- React 18 with TypeScript strict mode
- [Ariakit](https://ariakit.org/) for accessible primitives (ComboBox, etc.)
- Vitest + Testing Library for unit tests
- Storybook for component documentation
- ESLint + Prettier for code quality
- CSS with `md-` prefix for all classes

## Folder Structure

```text
packages/
  react/                  # React component library (@miljodirektoratet/md-react)
    src/
      button/             # Component folder
        MdButton.tsx      # Component implementation
        tests/            # Test folder
          MdButton.test.tsx
      formElements/       # Form-related components
      icons/              # Custom SVG icons
      icons-material/     # Material Symbols icons
      hooks/              # Shared hooks
      utils/              # Utility functions
  css/                    # CSS library (@miljodirektoratet/md-css)
    button/
      button.css
      README.md           # HTML structure documentation
stories/                  # Storybook stories
  Button.stories.tsx
```

## Code Style

- **Components**: PascalCase with `Md` prefix (`MdButton.tsx`, `MdPagination.tsx`)
- **Test files**: Same name with `.test.tsx` suffix in `tests/` subfolder
- **CSS classes**: kebab-case with `md-` prefix (`md-button`, `md-pagination__page`)
- **Exports**: Named exports from component files, re-exported in `index.tsx`
- Add `'use client'` directive to components with client-side interactivity

## Component Guidelines

### Creating Components

1. Create component in `packages/react/src/<component-name>/Md<ComponentName>.tsx`
2. Add CSS in `packages/css/<component-name>/<component-name>.css`
3. Create README.md in CSS folder documenting HTML structure
4. Add story in `stories/<ComponentName>.stories.tsx`
5. Export from `packages/react/src/index.tsx`
6. Register CSS import in `packages/css/index.css`
7. **Write unit tests** (required for all new components)

### Ariakit Usage

Use Ariakit primitives for complex accessible components. Ariakit handles:
- ARIA roles and attributes
- Keyboard navigation
- Focus management
- Screen reader announcements

## Testing Best Practices

### Test Structure

```typescript
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MdComponent } from '../MdComponent';

describe('MdComponent', () => {
  describe('rendering', () => {
    it('renders with default props', () => { ... });
  });

  describe('props forwarding', () => {
    it('forwards id attribute', () => { ... });
    it('merges custom className with component classes', () => { ... });
  });

  describe('interactions', () => {
    it('handles click events', async () => { ... });
  });

  describe('disabled states', () => {
    it('disables correctly', () => { ... });
  });
});
```

### Accessible Queries (Priority Order)

Use queries that reflect how users interact with your UI:

```typescript
// ✅ BEST: Role-based queries (most accessible)
screen.getByRole('button', { name: 'Submit' })
screen.getByRole('navigation', { name: 'Pagination' })
screen.getByRole('link', { name: 'Read more' })

// ✅ GOOD: Label-based queries
screen.getByLabelText('Email address')

// ⚠️ OK: Text content (when role isn't available)
screen.getByText('Loading...')

// ⚠️ LAST RESORT: Test IDs (only when no accessible alternative)
screen.getByTestId('custom-element')
```

### Scoped Queries with `within()`

When components render duplicate elements (desktop/mobile views), scope queries:

```typescript
// Get container, then query within it
const nav = screen.getByRole('navigation', { name: 'Pagination' });
const desktopView = within(nav).getByTestId('pages-desktop');
expect(within(desktopView).getByRole('button', { name: 'Side 2' })).toBeInTheDocument();
```

### User Interactions

Always use `userEvent` over `fireEvent`:

```typescript
const user = userEvent.setup();
const onClick = vi.fn();
render(<MdButton onClick={onClick}>Click me</MdButton>);

await user.click(screen.getByRole('button'));
expect(onClick).toHaveBeenCalledTimes(1);
```

### Assertion Patterns

```typescript
// Presence
expect(element).toBeInTheDocument();
expect(screen.queryByRole('button')).not.toBeInTheDocument();

// Attributes
expect(element).toHaveAttribute('aria-disabled', 'true');
expect(element).toHaveClass('md-button', 'custom-class');

// State
expect(element).toHaveAttribute('aria-current', 'page');
expect(element.tagName).toBe('SPAN');

// Callback assertions
expect(onPageChange).toHaveBeenCalledTimes(1);
expect(onPageChange).toHaveBeenCalledWith(2);
```

### Test Categories to Cover

1. **Rendering** - Default props, conditional rendering, null cases
2. **Props forwarding** - id, className, aria-*, data-* attributes
3. **Interactions** - Click, keyboard (Enter, Space), focus
4. **Disabled states** - Visual and functional disabled behavior
5. **Edge cases** - Boundary values, invalid inputs
6. **Accessibility** - aria-current, aria-disabled, roles

## Accessibility Requirements

All components must:

- Have proper ARIA roles and labels
- Support keyboard navigation
- Work with screen readers
- Follow [WCAG 2.1 AA](https://www.w3.org/WAI/WCAG21/quickref/) guidelines

Use semantic HTML elements:

- `<nav>` for navigation
- `<button>` for interactive controls
- `aria-current="page"` for current page indicators
- `aria-disabled="true"` for disabled state (instead of `disabled` when element shouldn't be focusable but needs announcement)

## Pull Request Guidelines

1. Add label: `major`, `minor`, or `patch` (required)
2. Run `npm run lint` and `npm test` - all must pass
3. For new components: include tests, story, and CSS README
4. For breaking changes: document migration path

## Important Files

- `packages/react/src/index.tsx` - Component exports
- `packages/css/index.css` - CSS imports
- `packages/react/vitest.config.ts` - Test configuration
- `packages/react/vitest.setup.ts` - Test setup (jest-dom matchers)
- `eslint.config.mjs` - ESLint configuration
