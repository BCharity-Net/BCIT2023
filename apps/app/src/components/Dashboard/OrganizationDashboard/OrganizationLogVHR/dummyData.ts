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
  hoursToVerify: number
}

export const dummyVHRData: VHRRequest[] = [
  {
    createdAt: '2023-09-11',
    comments:
      'Hello SUPERVISOR. I worked in the factory baking \
    cookies from 6:00 AM to 8:00 PM with no rest, food, water, \
    or bathroom breaks. I would appreciate it if you could \
    approve my request for 30 VHR. I really need this VHR \
    to feed my family. Thank you.',
    opportunity: {
      id: 101,
      post_id: '1',
      name: 'Baking',
      category: 'Cooking',
      startDate: '2023-09-01',
      endDate: '2023-09-10'
    },
    from: {
      id: 'user01',
      handle: 'aditya.test'
    },
    hoursToVerify: 30
  },
  {
    createdAt: '2023-09-13',
    comments:
      'Hello SUPERVISOR. I have cleaned the whole storage\
    floor with an old vacuum. Please approve my VHR request.',
    opportunity: {
      id: 102,
      post_id: '2',
      name: 'Vacuum',
      category: 'Cleaning',
      startDate: '2023-08-01',
      endDate: '2023-08-28'
    },
    from: {
      id: 'user02',
      handle: 'peter.test'
    },
    hoursToVerify: 40
  },
  {
    createdAt: '2023-09-13',
    comments:
      'Hello SUPERVISOR. I took care of 100 children\
    and their parents at the daycare center today.\
    They were very happy. Can you please verify my VHR?',
    opportunity: {
      id: 103,
      post_id: '3',
      name: 'Babysitting',
      category: 'Caretaking',
      startDate: '2023-08-01',
      endDate: '2023-08-28'
    },
    from: {
      id: 'user03',
      handle: 'sam.test'
    },
    hoursToVerify: 25
  },
  {
    createdAt: '2023-09-13',
    comments:
      'Hello SUPERVISOR. I cleaned all the mats in the \
    rec center today. Please approve my vhr.',
    opportunity: {
      id: 104,
      post_id: '4',
      name: 'Washing',
      category: 'Cleaning',
      startDate: '2023-08-01',
      endDate: '2023-08-28'
    },
    from: {
      id: 'user01',
      handle: 'aditya.test'
    },
    hoursToVerify: 70
  }
]
