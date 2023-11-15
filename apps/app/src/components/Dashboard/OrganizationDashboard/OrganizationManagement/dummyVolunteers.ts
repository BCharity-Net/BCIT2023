// File: dummyVolunteers.ts

export interface VolunteerProfile {
  id: string
  name: string
  handle: string
  dateJoined: string
}

export interface VolunteerData {
  profile: VolunteerProfile
  dateJoined: string
}

// Example dummy data array
export const dummyVolunteers: VolunteerData[] = Array.from(
  { length: 10 },
  (_, index) => ({
    profile: {
      id: `vol-${index}`,
      name: `Volunteer ${index}`,
      handle: `volunteer${index}`,
      dateJoined: new Date().toISOString()
    },
    dateJoined: '2023'
  })
)
