# Testing Guide - Comprehensive Patterns

Complete reference for testing React components in the James A. Jacobs demo site.

---

## Testing Philosophy

We follow these principles:

1. **Test user behavior**, not implementation details
2. **Accessibility first** - test keyboard navigation and ARIA attributes
3. **Tailwind verification** - ensure utility classes are applied correctly
4. **Mock external dependencies** - use MSW for API calls (when needed)
5. **Fast feedback** - tests should run quickly (<2s total)

---

## Complete Setup Guide

### 1. Install Dependencies

```bash
cd demo-site

# Add to package.json manually, then run:
npm install

# Testing core
npm install --save-dev vitest @vitest/ui jsdom

# React Testing Library
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event

# Optional: API mocking
npm install --save-dev msw
```

### 2. Configuration Files

**vitest.config.ts:**
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,              // No need to import describe/it/expect
    environment: 'jsdom',       // Browser-like environment
    setupFiles: './src/setupTests.ts',
    css: true,                  // Parse CSS (important for Tailwind)
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

**package.json scripts:**
```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest run --coverage"
  }
}
```

### 3. Test Setup File

**src/setupTests.ts:**
```typescript
import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// Cleanup after each test
afterEach(() => {
  cleanup()
})

// Mock window.matchMedia (for responsive tests)
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })

  // Mock IntersectionObserver (for scroll animations)
  global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    disconnect() {}
    observe() {}
    takeRecords() {
      return []
    }
    unobserve() {}
  } as any // eslint-disable-line @typescript-eslint/no-explicit-any
}
```

---

## Complete Component Test Example

### Button Component with Full Coverage

**src/components/Button.tsx:**
```typescript
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading = false, children, disabled, className = '', ...props }, ref) => {
    const baseClasses = 'rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

    const variantClasses = {
      primary: 'bg-emerald-700 text-white hover:bg-emerald-800 focus:ring-emerald-500',
      secondary: 'bg-amber-600 text-white hover:bg-amber-700 focus:ring-amber-500',
      outline: 'border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 focus:ring-emerald-500',
      ghost: 'text-emerald-700 hover:bg-emerald-50 focus:ring-emerald-500',
    }

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    }

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 inline" aria-hidden="true" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
```

**src/components/Button.test.tsx:**
```typescript
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button Component', () => {
  // Basic Rendering
  describe('rendering', () => {
    it('renders with children', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(<Button className="custom-class">Button</Button>)
      expect(screen.getByRole('button')).toHaveClass('custom-class')
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }
      render(<Button ref={ref}>Button</Button>)
      expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    })
  })

  // Variant Testing
  describe('variants', () => {
    it('renders primary variant (default)', () => {
      render(<Button>Primary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-emerald-700', 'text-white')
    })

    it('renders secondary variant', () => {
      render(<Button variant="secondary">Secondary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-amber-600', 'text-white')
    })

    it('renders outline variant', () => {
      render(<Button variant="outline">Outline</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('border-2', 'border-emerald-700')
    })

    it('renders ghost variant', () => {
      render(<Button variant="ghost">Ghost</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('text-emerald-700', 'hover:bg-emerald-50')
    })
  })

  // Size Testing
  describe('sizes', () => {
    it('renders medium size (default)', () => {
      render(<Button>Medium</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-4', 'py-2', 'text-base')
    })

    it('renders small size', () => {
      render(<Button size="sm">Small</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-3', 'py-1.5', 'text-sm')
    })

    it('renders large size', () => {
      render(<Button size="lg">Large</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-6', 'py-3', 'text-lg')
    })
  })

  // Loading State
  describe('loading state', () => {
    it('shows loading spinner when loading', () => {
      render(<Button loading>Loading</Button>)
      const svg = screen.getByRole('button').querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveClass('animate-spin')
    })

    it('disables button when loading', () => {
      render(<Button loading>Loading</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('sets aria-busy when loading', () => {
      render(<Button loading>Loading</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
    })

    it('hides spinner from screen readers', () => {
      render(<Button loading>Loading</Button>)
      const svg = screen.getByRole('button').querySelector('svg')
      expect(svg).toHaveAttribute('aria-hidden', 'true')
    })
  })

  // Disabled State
  describe('disabled state', () => {
    it('disables button when disabled prop is true', () => {
      render(<Button disabled>Disabled</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('does not trigger onClick when disabled', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(<Button disabled onClick={handleClick}>Disabled</Button>)

      await user.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  // User Interactions
  describe('interactions', () => {
    it('calls onClick when clicked', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(<Button onClick={handleClick}>Click</Button>)

      await user.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('can be focused with keyboard', async () => {
      const user = userEvent.setup()
      render(<Button>Focus</Button>)

      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()
    })

    it('triggers on Enter key', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(<Button onClick={handleClick}>Enter</Button>)

      const button = screen.getByRole('button')
      button.focus()
      await user.keyboard('{Enter}')

      expect(handleClick).toHaveBeenCalled()
    })

    it('triggers on Space key', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(<Button onClick={handleClick}>Space</Button>)

      const button = screen.getByRole('button')
      button.focus()
      await user.keyboard(' ')

      expect(handleClick).toHaveBeenCalled()
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('has focus ring classes', () => {
      render(<Button>Focus</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('focus:outline-none', 'focus:ring-2')
    })

    it('is keyboard navigable', async () => {
      const user = userEvent.setup()
      render(
        <>
          <Button>First</Button>
          <Button>Second</Button>
        </>
      )

      await user.tab()
      expect(screen.getByRole('button', { name: 'First' })).toHaveFocus()

      await user.tab()
      expect(screen.getByRole('button', { name: 'Second' })).toHaveFocus()
    })
  })

  // Tailwind Classes
  describe('tailwind classes', () => {
    it('includes base transition classes', () => {
      render(<Button>Transition</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('transition-colors', 'rounded-md')
    })

    it('includes hover classes for primary variant', () => {
      render(<Button variant="primary">Hover</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('hover:bg-emerald-800')
    })
  })
})
```

---

## API Mocking with MSW

### Setup MSW (Optional)

**src/test/mocks/handlers.ts:**
```typescript
import { http, HttpResponse } from 'msw'

export const handlers = [
  // Mock successful API call
  http.get('/api/contact-submissions', () => {
    return HttpResponse.json([
      { id: 1, name: 'John Doe', email: 'john@example.com', message: 'Test message' },
    ])
  }),

  // Mock POST request
  http.post('/api/contact', async ({ request }) => {
    const data = await request.json()
    return HttpResponse.json(
      { id: 2, ...data, status: 'submitted' },
      { status: 201 }
    )
  }),

  // Mock error response
  http.get('/api/error', () => {
    return HttpResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }),
]
```

**src/test/mocks/server.ts:**
```typescript
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)
```

**Update src/setupTests.ts:**
```typescript
import { server } from './test/mocks/server'
import { beforeAll, afterEach, afterAll } from 'vitest'

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

// Reset handlers after each test
afterEach(() => server.resetHandlers())

// Clean up after all tests
afterAll(() => server.close())
```

### Using MSW in Tests

```typescript
import { server } from '../test/mocks/server'
import { http, HttpResponse } from 'msw'

it('handles API errors gracefully', async () => {
  // Override handler for this specific test
  server.use(
    http.get('/api/contact-submissions', () => {
      return HttpResponse.json(
        { error: 'Not found' },
        { status: 404 }
      )
    })
  )

  render(<ContactList />)

  await waitFor(() => {
    expect(screen.getByText(/error loading/i)).toBeInTheDocument()
  })
})
```

---

## Testing React Router Components

### Testing with MemoryRouter

```typescript
import { MemoryRouter } from 'react-router-dom'

describe('Header Component', () => {
  it('highlights active link', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Header />
      </MemoryRouter>
    )

    const aboutLink = screen.getByRole('link', { name: /about/i })
    expect(aboutLink).toHaveClass('text-emerald-700', 'font-semibold')
  })

  it('navigates to different pages', async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    )

    await user.click(screen.getByRole('link', { name: /services/i }))
    // Verify navigation occurred (check URL or rendered content)
  })
})
```

### Helper for Routing Tests

**src/test/utils.tsx:**
```typescript
import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

interface WrapperProps {
  children: React.ReactNode
}

export function renderWithRouter(
  ui: ReactElement,
  { route = '/', ...renderOptions }: RenderOptions & { route?: string } = {}
) {
  const Wrapper = ({ children }: WrapperProps) => (
    <MemoryRouter initialEntries={[route]}>
      {children}
    </MemoryRouter>
  )

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}
```

**Usage:**
```typescript
import { renderWithRouter } from '../test/utils'

it('shows active state on about page', () => {
  renderWithRouter(<Header />, { route: '/about' })
  expect(screen.getByRole('link', { name: /about/i })).toHaveClass('active')
})
```

---

## Testing Async Operations

### waitFor and findBy Queries

```typescript
import { waitFor } from '@testing-library/react'

it('loads data asynchronously', async () => {
  render(<ProjectsList />)

  // Wait for loading to complete
  await waitFor(() => {
    expect(screen.getByText('Sewer Air Testing')).toBeInTheDocument()
  })
})

// Or use findBy (combines getBy + waitFor)
it('loads data with findBy', async () => {
  render(<ProjectsList />)

  const project = await screen.findByText('Sewer Air Testing')
  expect(project).toBeInTheDocument()
})
```

### Testing Form Submissions

```typescript
it('submits contact form', async () => {
  const user = userEvent.setup()
  const onSubmit = vi.fn()

  render(<ContactForm onSubmit={onSubmit} />)

  // Fill out form
  await user.type(screen.getByLabelText(/name/i), 'John Doe')
  await user.type(screen.getByLabelText(/email/i), 'john@example.com')
  await user.type(screen.getByLabelText(/message/i), 'Test message')

  // Submit
  await user.click(screen.getByRole('button', { name: /submit/i }))

  // Verify
  await waitFor(() => {
    expect(onSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test message',
    })
  })
})
```

---

## Tailwind Class Testing Patterns

### Testing Responsive Classes

```typescript
it('has responsive padding classes', () => {
  render(<Section />)
  const section = screen.getByRole('region')

  expect(section).toHaveClass('px-4')      // Mobile
  expect(section).toHaveClass('sm:px-6')   // Tablet
  expect(section).toHaveClass('lg:px-8')   // Desktop
})
```

### Testing Custom Theme Colors

```typescript
it('uses emerald theme colors', () => {
  render(<Button variant="primary">Click</Button>)
  const button = screen.getByRole('button')

  expect(button).toHaveClass('bg-emerald-700')
  expect(button).toHaveClass('focus:ring-emerald-500')
})
```

### Testing Conditional Classes

```typescript
it('applies different classes based on active state', () => {
  const { rerender } = render(<NavLink active={false} />)
  const link = screen.getByRole('link')

  expect(link).toHaveClass('text-gray-600')
  expect(link).not.toHaveClass('text-emerald-700')

  rerender(<NavLink active={true} />)

  expect(link).toHaveClass('text-emerald-700')
  expect(link).toHaveClass('font-semibold')
})
```

---

## Common Testing Patterns

### Query Priority (Accessibility-First)

```typescript
// 1. Prefer role-based queries
screen.getByRole('button', { name: /submit/i })
screen.getByRole('textbox', { name: /email/i })

// 2. Use label text
screen.getByLabelText('Email Address')

// 3. Use visible text
screen.getByText('Welcome back')

// 4. Use placeholder (less ideal)
screen.getByPlaceholderText('Enter email')

// 5. Avoid test IDs (last resort)
screen.getByTestId('submit-button')
```

### Mocking Functions

```typescript
import { vi } from 'vitest'

// Simple mock
const mockFn = vi.fn()

// Mock with return value
const mockGetUser = vi.fn().mockReturnValue({ id: 1, name: 'John' })

// Mock async function
const mockFetchData = vi.fn().mockResolvedValue({ data: 'test' })

// Mock with different returns on successive calls
const mockCounter = vi.fn()
  .mockReturnValueOnce(1)
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(3)
```

### Debugging Tests

```typescript
// Print entire document
screen.debug()

// Print specific element
screen.debug(screen.getByRole('button'))

// Get suggested queries
screen.logTestingPlaygroundURL()

// Check what roles are available
const { container } = render(<Component />)
console.log(prettyDOM(container))
```

---

## Running Tests

### Development Commands

```bash
cd demo-site

# Watch mode (recommended for development)
npm run test:watch

# Run once
npm test

# UI mode (visual browser-based runner)
npm run test:ui

# With coverage
npm run test:coverage
open coverage/index.html
```

### Pre-Push Hook

Tests automatically run before every `git push`:
- TypeScript type check
- ESLint
- Build verification

See [docs/TESTING.md](TESTING.md) for hook configuration.

---

## Best Practices Summary

1. ✅ **Test user behavior** - Click buttons, fill forms, read text
2. ✅ **Use accessible queries** - `getByRole`, `getByLabelText`, `getByText`
3. ✅ **Test accessibility** - Keyboard navigation, ARIA attributes, focus management
4. ✅ **Verify Tailwind classes** - Ensure styles are applied correctly
5. ✅ **Mock external dependencies** - Use MSW for API calls
6. ✅ **One concept per test** - Keep tests focused and descriptive
7. ✅ **Avoid implementation details** - Don't test state, props, or internals
8. ✅ **Use userEvent over fireEvent** - Simulates real user interactions
9. ✅ **Cleanup automatically** - React Testing Library handles this
10. ✅ **Run tests in watch mode** - Get instant feedback

---

## Resources

- **Vitest**: https://vitest.dev/
- **React Testing Library**: https://testing-library.com/react
- **jest-dom matchers**: https://github.com/testing-library/jest-dom
- **User Event**: https://testing-library.com/docs/user-event/intro
- **MSW (API Mocking)**: https://mswjs.io/
- **Testing Playground**: https://testing-playground.com/

---

**Last Updated**: February 2026
**Project**: James A. Jacobs Demo Site
**Current Tests**: 9 passing (6 utility + 3 component smoke tests)
