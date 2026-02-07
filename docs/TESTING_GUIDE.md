# Testing Guide

Complete testing setup and strategy for the Union of Relative Strangers project.

---

## Testing Philosophy

We follow these principles:

1. **Test user behavior**, not implementation details
2. **Accessibility first** - test keyboard navigation and ARIA
3. **Tailwind verification** - ensure classes are applied correctly
4. **Mock external dependencies** - use MSW for API calls
5. **Fast feedback** - tests should run in <1 second

---

## Test Coverage

### Current Status (62 tests, 100% passing)

```
✓ src/components/Button.test.tsx     (32 tests)
✓ src/components/Layout.test.tsx     (17 tests)
✓ src/pages/Timeline.test.tsx        (13 tests)
```

**Coverage by Category:**
- Component rendering: 15 tests
- User interactions: 12 tests
- Accessibility (ARIA): 10 tests
- Tailwind styling: 15 tests
- Snapshot testing: 5 tests
- Data validation: 5 tests

---

## Test Infrastructure

### Tools & Libraries

| Tool | Version | Purpose |
|------|---------|---------|
| Vitest | 3.0.0 | Test runner |
| @vitest/ui | 3.0.0 | Browser UI |
| @vitest/coverage-v8 | 3.0.0 | Coverage reports |
| @testing-library/react | 16.1.0 | Component testing |
| @testing-library/jest-dom | 6.6.3 | Custom matchers |
| @testing-library/user-event | 14.5.2 | User simulation |
| MSW | 2.8.2 | API mocking |
| jsdom | 25.0.1 | DOM environment |

### Configuration Files

**vitest.config.ts:**
```typescript
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setupTests.ts'],
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src/test/', '**/*.d.ts', 'dist/'],
    },
  },
})
```

**src/test/setupTests.ts:**
- Imports @testing-library/jest-dom matchers
- Starts MSW server
- Cleans up after each test
- Mocks window.matchMedia

---

## Test Examples

### 1. Button Component (32 tests)

**Coverage:**
- ✅ 4 variants (primary, secondary, outline, ghost)
- ✅ 3 sizes (sm, md, lg)
- ✅ Loading and disabled states
- ✅ User interactions (click, keyboard)
- ✅ Accessibility (ARIA, focus)
- ✅ Tailwind class verification
- ✅ Forward refs
- ✅ Snapshot testing

**Sample Test:**
```typescript
it('renders primary variant with correct Tailwind classes', () => {
  render(<Button variant="primary">Primary</Button>)
  const button = screen.getByRole('button')
  
  expect(button).toHaveClass('bg-[#8B3F8B]')
  expect(button).toHaveClass('text-white')
  expect(button).toHaveClass('hover:bg-[#6B2F6B]')
})
```

### 2. Layout Component (17 tests)

**Coverage:**
- ✅ Navigation rendering
- ✅ Active link highlighting
- ✅ Tailwind color verification
- ✅ Responsive grid classes
- ✅ Semantic HTML structure
- ✅ External link attributes

**Sample Test:**
```typescript
it('highlights active link on home page', () => {
  renderWithRouter(<Layout><div/></Layout>, { route: '/' })
  const homeLink = screen.getByRole('link', { name: /home/i })
  
  expect(homeLink).toHaveClass('text-[#D4AF37]')
  expect(homeLink).toHaveClass('font-semibold')
})
```

### 3. Timeline Page (13 tests)

**Coverage:**
- ✅ Event data rendering
- ✅ Chronological sorting
- ✅ Event type badges
- ✅ Tailwind utility classes
- ✅ Date formatting
- ✅ Location icons

**Sample Test:**
```typescript
it('displays events in reverse chronological order', () => {
  const { container } = render(<Timeline />)
  const eventTitles = Array.from(container.querySelectorAll('h3'))
    .map(el => el.textContent)
  
  expect(eventTitles[0]).toBe('Cracking the Trunk') // Newest
  expect(eventTitles[4]).toBe('First Zoom Gathering') // Oldest
})
```

---

## API Mocking with MSW

### Mock Handlers

**src/test/mocks/handlers.ts:**
```typescript
import { http, HttpResponse } from 'msw'

export const handlers = [
  // GET /api/photos
  http.get('/api/photos', () => {
    return HttpResponse.json([
      {
        id: '1',
        title: 'Family Reunion 2024',
        branch: 'harriet-johnston-bowdoin',
        // ... full photo object
      },
    ])
  }),

  // POST /api/photos  
  http.post('/api/photos', async () => {
    return HttpResponse.json(
      { id: '2', title: 'New Upload' },
      { status: 201 }
    )
  }),

  // Error case
  http.get('/api/error', () => {
    return HttpResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }),
]
```

### Using Mocks in Tests

```typescript
import { server } from '../test/mocks/server'

it('handles API errors gracefully', async () => {
  // Override handler for this test
  server.use(
    http.get('/api/photos', () => {
      return HttpResponse.json({ error: 'Not found' }, { status: 404 })
    })
  )

  render(<PhotoGallery />)
  
  await waitFor(() => {
    expect(screen.getByText(/error/i)).toBeInTheDocument()
  })
})
```

---

## Test Utilities

**src/test/utils.tsx:**

### renderWithRouter

```typescript
export function renderWithRouter(
  ui: ReactElement,
  { route = '/', ...renderOptions }: RenderOptions & { route?: string } = {}
) {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {
    wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
    ...renderOptions,
  })
}
```

### Mock Data Generators

```typescript
export const mockPhoto = (overrides = {}) => ({
  id: '1',
  title: 'Test Photo',
  branch: 'john-taylor-johnston',
  uploadedBy: 'user_123',
  // ... defaults with overrides
})

export const mockUser = (overrides = {}) => ({
  id: 'user_123',
  email: 'test@example.com',
  branch: 'emily-johnston-de-forest',
  isAdmin: false,
  ...overrides,
})
```

---

## Tailwind Class Testing

### Testing Utility Classes

```typescript
it('has correct padding classes', () => {
  render(<Component />)
  const element = screen.getByRole('main')
  
  expect(element).toHaveClass('px-4')
  expect(element).toHaveClass('sm:px-6')
  expect(element).toHaveClass('lg:px-8')
})
```

### Testing Custom Colors

```typescript
it('uses heritage purple color', () => {
  render(<Button variant="primary">Click</Button>)
  const button = screen.getByRole('button')
  
  expect(button).toHaveClass('bg-[#8B3F8B]')
  expect(button).toHaveClass('focus:ring-[#8B3F8B]')
})
```

### Testing Conditional Classes

```typescript
it('applies hover state for non-active links', () => {
  renderWithRouter(<Navigation />, { route: '/' })
  const photosLink = screen.getByRole('link', { name: /photos/i })
  
  expect(photosLink).toHaveClass('hover:text-[#D4AF37]')
  expect(photosLink).not.toHaveClass('font-semibold')
})
```

---

## Accessibility Testing

### Keyboard Navigation

```typescript
import userEvent from '@testing-library/user-event'

it('can be focused with keyboard', async () => {
  const user = userEvent.setup()
  render(<Button>Click Me</Button>)
  
  await user.tab()
  
  expect(screen.getByRole('button')).toHaveFocus()
})

it('triggers on Enter key', async () => {
  const handleClick = vi.fn()
  const user = userEvent.setup()
  
  render(<Button onClick={handleClick}>Click</Button>)
  const button = screen.getByRole('button')
  
  button.focus()
  await user.keyboard('{Enter}')
  
  expect(handleClick).toHaveBeenCalled()
})
```

### ARIA Attributes

```typescript
it('has proper ARIA attributes when loading', () => {
  render(<Button loading>Loading</Button>)
  const button = screen.getByRole('button')
  
  expect(button).toHaveAttribute('aria-busy', 'true')
  expect(button).toBeDisabled()
})

it('spinner is hidden from screen readers', () => {
  render(<Button loading>Loading</Button>)
  const spinner = button.querySelector('svg')
  
  expect(spinner).toHaveAttribute('aria-hidden', 'true')
})
```

---

## Snapshot Testing

```typescript
it('matches snapshot for primary variant', () => {
  const { container } = render(<Button variant="primary">Primary</Button>)
  expect(container.firstChild).toMatchSnapshot()
})
```

**Update snapshots:**
```bash
npm test -- -u
```

Snapshots stored in `__snapshots__/` directories.

---

## Running Tests

### Development

```bash
# Watch mode (re-runs on file changes)
npm test

# Run once
npm run test:run

# UI mode (browser-based)
npm run test:ui

# With coverage
npm run test:coverage
open coverage/index.html
```

### CI/CD

Tests run automatically:
- **Pre-commit hook**: Runs all tests
- **Pre-push hook**: Runs tests + build verification
- **GitHub Actions**: On every push (future)

---

## Coverage Reports

**Excluded from coverage:**
- `node_modules/`
- `src/test/`
- `**/*.d.ts`
- `**/*.config.*`
- `dist/`

**Target coverage:** 80% overall
- Components: 90%
- Pages: 70%
- Utilities: 80%

---

## Best Practices

### 1. Test User Behavior

```typescript
// ❌ Bad - testing implementation
expect(component.state.count).toBe(1)

// ✅ Good - testing user-visible behavior
expect(screen.getByText('Count: 1')).toBeInTheDocument()
```

### 2. Prefer Accessible Queries

```typescript
// Prefer (in order):
screen.getByRole('button', { name: /submit/i })
screen.getByLabelText('Email')
screen.getByText('Welcome')

// Avoid:
screen.getByTestId('submit-button')
container.querySelector('.button')
```

### 3. Test Accessibility

```typescript
it('is keyboard accessible', async () => {
  const user = userEvent.setup()
  render(<Form />)
  
  await user.tab() // Focus first input
  await user.keyboard('test@example.com')
  await user.tab() // Focus next input
  await user.keyboard('password')
  await user.keyboard('{Enter}') // Submit
  
  expect(screen.getByText(/success/i)).toBeInTheDocument()
})
```

### 4. One Assertion Per Concept

```typescript
// ❌ Bad - too many unrelated assertions
it('works correctly', () => {
  expect(button).toHaveClass('bg-blue')
  expect(button).toHaveTextContent('Click')
  expect(onClick).toHaveBeenCalled()
})

// ✅ Good - focused tests
it('has correct styling', () => {
  expect(button).toHaveClass('bg-blue')
})

it('calls onClick when clicked', async () => {
  await user.click(button)
  expect(onClick).toHaveBeenCalled()
})
```

---

## Debugging Tests

### Print DOM

```typescript
screen.debug() // Print entire document
screen.debug(screen.getByRole('button')) // Print specific element
```

### UI Mode

```bash
npm run test:ui
```

Opens browser with:
- Live test results
- Component inspection
- Time-travel debugging

### Find Available Queries

```typescript
screen.logTestingPlaygroundURL()
// Opens: testing-playground.com with your component
```

---

## Future Test Plans

### Phase 2: Authentication Tests
- Login/logout flows
- Protected route guards
- User registration with branch selection
- Session persistence

### Phase 3: Photo Gallery Tests
- Upload flow
- Image preview
- Branch filtering
- Tag search
- Delete confirmation

### Phase 4: Stories Tests
- Rich text editor
- Story creation/editing
- Comment threading
- Branch filtering

---

**Last Updated**: February 2025  
**Test Count**: 62 passing  
**Coverage**: TBD (run `npm run test:coverage`)
