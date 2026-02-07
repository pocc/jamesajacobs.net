import { describe, it, expect } from 'vitest'
import { formatPhoneNumber, truncateText } from './helpers'

describe('Helper Functions', () => {
  describe('formatPhoneNumber', () => {
    it('formats a 10-digit phone number correctly', () => {
      expect(formatPhoneNumber('5105901098')).toBe('(510) 590-1098')
    })

    it('handles phone numbers with special characters', () => {
      expect(formatPhoneNumber('(510) 590-1098')).toBe('(510) 590-1098')
      expect(formatPhoneNumber('510-590-1098')).toBe('(510) 590-1098')
    })

    it('returns original string if not 10 digits', () => {
      expect(formatPhoneNumber('123')).toBe('123')
      expect(formatPhoneNumber('12345678901')).toBe('12345678901')
    })
  })

  describe('truncateText', () => {
    it('truncates text longer than maxLength', () => {
      expect(truncateText('Hello, World!', 8)).toBe('Hello, W...')
    })

    it('returns full text if shorter than maxLength', () => {
      expect(truncateText('Hello', 10)).toBe('Hello')
    })

    it('returns full text if exactly maxLength', () => {
      expect(truncateText('Hello', 5)).toBe('Hello')
    })
  })
})
