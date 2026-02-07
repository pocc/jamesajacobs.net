import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HashRouter } from 'react-router-dom'
import App from '../App'

describe('App Component', () => {
  it('renders without crashing', () => {
    render(
      <HashRouter>
        <App />
      </HashRouter>
    )
    // Check if main app container exists
    expect(document.querySelector('#root')).toBeTruthy()
  })

  it('renders navigation header', () => {
    render(
      <HashRouter>
        <App />
      </HashRouter>
    )
    // Check if navigation is present
    const nav = screen.getByRole('banner')
    expect(nav).toBeInTheDocument()
  })

  it('has correct site title', () => {
    render(
      <HashRouter>
        <App />
      </HashRouter>
    )
    // Check for "James A. Jacobs" in the document
    expect(document.body.textContent).toContain('James A. Jacobs')
  })
})
