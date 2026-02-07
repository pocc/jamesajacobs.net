# Testing Infrastructure

## Overview

The demo site (`/demo-site/`) uses **Vitest** with **React Testing Library** for automated testing. All tests must pass before code can be pushed to the repository, enforced by a pre-push Git hook.

## Test Stack

| Package | Version | Purpose |
|---------|---------|---------|
| **Vitest** | 2.1.8 | Test runner (Vite-native, faster than Jest) |
| **jsdom** | 26.0.0 | DOM implementation for Node.js test environment |
| **@testing-library/react** | 16.1.0 | React component testing utilities |
| **@testing-library/jest-dom** | 6.6.3 | Custom matchers for DOM assertions |
| **@testing-library/user-event** | 14.5.2 | User interaction simulation |
| **@vitest/ui** | 2.2.0 | Visual test UI (optional) |

## Configuration

### `vitest.config.ts`

```typescript
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,              // No need to import describe/it/expect
    environment: 'jsdom',       // Browser-like environment
    setupFiles: './src/setupTests.ts',
    css: true,                  // Parse CSS (important for Tailwind)
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
})
```

### `src/setupTests.ts`

Global test setup that runs before all tests:

- **@testing-library/jest-dom** matchers (`toBeInTheDocument()`, `toHaveClass()`, etc.)
- **React Testing Library cleanup** after each test
- **window.matchMedia** mock for responsive design tests
- **IntersectionObserver** mock for scroll animations

## Running Tests

### Commands

```bash
cd demo-site

# Run all tests once (CI mode)
npm test

# Watch mode (re-runs on file changes)
npm run test:watch

# Visual UI (browser-based test runner)
npm run test:ui
```

### Pre-Push Hook

The `.git/hooks/pre-push` hook automatically runs before every `git push`:

1. ✅ **TypeScript type check** — `npm run build` (silent)
2. ✅ **ESLint** — `npm run lint`
3. ✅ **Build verification** — Checks that `demo/index.html` exists

If any check fails, the push is **blocked** and you'll see an error message with instructions.

## Test Organization

### Directory Structure

```
demo-site/src/
├── __tests__/               # Component tests
│   └── App.test.tsx         # App smoke tests
├── components/
│   └── __tests__/           # Component-specific tests (optional)
└── utils/
    ├── helpers.ts           # Utility functions
    └── helpers.test.ts      # Utility tests
```

### Test File Naming

- `*.test.ts` — Pure TypeScript/JavaScript tests
- `*.test.tsx` — React component tests
- `*.spec.ts` / `*.spec.tsx` — Alternative (both work)

## Writing Tests

### Example: Utility Function Tests

```typescript
import { describe, it, expect } from 'vitest'
import { formatPhoneNumber } from './helpers'

describe('formatPhoneNumber', () => {
  it('formats a 10-digit phone number correctly', () => {
    expect(formatPhoneNumber('5105901098')).toBe('(510) 590-1098')
  })

  it('handles phone numbers with special characters', () => {
    expect(formatPhoneNumber('510-590-1098')).toBe('(510) 590-1098')
  })
})
```

### Example: Component Tests

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

describe('App Component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )
    expect(container).toBeTruthy()
  })

  it('renders navigation header', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    const nav = screen.getByRole('banner')
    expect(nav).toBeInTheDocument()
  })
})
```

### Example: User Interaction Tests

```typescript
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button interactions', () => {
  it('handles click events', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    render(<Button onClick={handleClick}>Click me</Button>)
    await user.click(screen.getByRole('button'))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

## Testing Tailwind Classes

Verify that components have the correct Tailwind classes applied:

```typescript
it('applies primary variant classes', () => {
  render(<Button variant="primary">Primary</Button>)
  const button = screen.getByRole('button')
  expect(button).toHaveClass('bg-blue-500', 'text-white')
})
```

## Common Patterns

### Testing React Router Components

Use `MemoryRouter` for testing (not `BrowserRouter` or `HashRouter`):

```typescript
import { MemoryRouter } from 'react-router-dom'

render(
  <MemoryRouter initialEntries={['/about']}>
    <App />
  </MemoryRouter>
)
```

### Mocking Functions

```typescript
import { vi } from 'vitest'

const mockFn = vi.fn()
const mockFnWithReturnValue = vi.fn().mockReturnValue(42)
const mockFnAsync = vi.fn().mockResolvedValue({ data: 'test' })
```

### Testing Async Operations

```typescript
import { waitFor } from '@testing-library/react'

it('loads data asynchronously', async () => {
  render(<AsyncComponent />)

  await waitFor(() => {
    expect(screen.getByText('Loaded!')).toBeInTheDocument()
  })
})
```

## Test Coverage

To generate a coverage report:

```bash
npm run test:coverage
```

Coverage reports are generated in `coverage/` directory (gitignored).

## Current Test Status

As of February 2026:

- ✅ **9 tests passing**
  - 6 utility function tests (`helpers.test.ts`)
  - 3 App smoke tests (`App.test.tsx`)
- ✅ **Pre-push hook active** — Tests run automatically before every push
- ⏳ **Additional tests needed:**
  - Component-level tests for Header, Footer, ContactForm
  - Page-level tests for Home, About, Research pages
  - Integration tests for navigation and routing

## Troubleshooting

### Tests fail with "document is not defined"

Ensure `vitest.config.ts` has `environment: 'jsdom'` and `setupFiles` points to the correct setup file.

### Tests fail with router basename warnings

Use `MemoryRouter` instead of `BrowserRouter` or `HashRouter` in tests.

### ESLint errors in test files

Add this to the top of test files if needed:

```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
```

Or use inline disable comments:

```typescript
// eslint-disable-next-line react-hooks/set-state-in-effect
```

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [jest-dom matchers](https://github.com/testing-library/jest-dom)
- [User Event API](https://testing-library.com/docs/user-event/intro)
