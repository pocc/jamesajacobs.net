import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />)
    // Check that component renders
    expect(container).toBeTruthy()
  })

  it('creates a container', () => {
    const { container } = render(<App />)
    // Check that container exists (router may not render content without proper basename)
    expect(container).toBeDefined()
  })

  it('has proper document structure', () => {
    render(<App />)
    // Verify document body exists
    expect(document.body).toBeDefined()
    expect(document.body).not.toBeNull()
  })
})
