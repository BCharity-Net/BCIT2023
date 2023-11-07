export interface VHRRequest {
  createdAt: string
  comments: string
  opportunity: {
    id: number
    post_id: string
    name: string
    category: string
    startDate: string
    endDate: string
  }
  from: {
    id: string
    handle: string
  }
  hoursToVerify: number // Added property
}

export const dummyVHRData: VHRRequest[] = [
  {
    createdAt: '2023-01-01T00:00:00Z', // Example ISO date-time string
    comments: 'Initial request for verification.',
    opportunity: {
      id: 101, // Example unique identifier
      post_id: '1',
      name: 'Mopping',
      category: 'Category A',
      startDate: '2023-01-01',
      endDate: '2023-01-31'
    },
    from: {
      id: 'user01', // Example unique identifier
      handle: 'UserA'
    },
    hoursToVerify: 15 // Example value
  },
  {
    createdAt: '2023-02-01T00:00:00Z', // Example ISO date-time string
    comments: 'Request for new opportunity verification.',
    opportunity: {
      id: 102, // Example unique identifier
      post_id: '2',
      name: 'Vacuum',
      category: 'Category B',
      startDate: '2023-02-01',
      endDate: '2023-02-28'
    },
    from: {
      id: 'user02', // Example unique identifier
      handle: 'UserB'
    },
    hoursToVerify: 20 // Example value
  }
  // Add more dummy data as needed
]
