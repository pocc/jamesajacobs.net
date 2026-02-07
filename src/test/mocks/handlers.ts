import { http, HttpResponse } from 'msw'

// Mock API handlers for testing
export const handlers = [
  // Mock GET /api/photos endpoint
  http.get('/api/photos', () => {
    return HttpResponse.json([
      {
        id: '1',
        url: 'https://example.com/photo1.jpg',
        thumbnailUrl: 'https://example.com/photo1-thumb.jpg',
        title: 'Family Reunion 2024',
        description: 'Great gathering at The Met',
        branch: 'harriet-johnston-bowdoin',
        uploadedBy: 'user_123',
        uploadedAt: new Date('2024-06-28'),
        tags: ['reunion', 'met'],
        people: ['John Doe', 'Jane Smith'],
        year: 2024,
        location: 'New York',
      },
    ])
  }),

  // Mock POST /api/photos endpoint
  http.post('/api/photos', async () => {
    return HttpResponse.json(
      {
        id: '2',
        url: 'https://example.com/photo2.jpg',
        thumbnailUrl: 'https://example.com/photo2-thumb.jpg',
        title: 'New Upload',
        branch: 'john-taylor-johnston',
        uploadedBy: 'user_456',
        uploadedAt: new Date(),
      },
      { status: 201 }
    )
  }),

  // Mock GET /api/stories endpoint
  http.get('/api/stories', () => {
    return HttpResponse.json([
      {
        id: '1',
        title: 'Meeting My Cousins',
        content: 'I discovered relatives I never knew existed...',
        branch: 'emily-johnston-de-forest',
        author: 'user_789',
        createdAt: new Date('2024-06-29'),
        updatedAt: new Date('2024-06-29'),
        tags: ['reunion', 'discovery'],
        attachments: [],
      },
    ])
  }),

  // Mock error case
  http.get('/api/error', () => {
    return HttpResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }),
]
