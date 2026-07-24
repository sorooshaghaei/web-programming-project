// Static portfolio data used by the GitHub Pages build.
// The production application still uses the configured REST API.

function futureDate(daysFromNow, hour) {
  const date = new Date()
  date.setDate(date.getDate() + daysFromNow)
  date.setHours(hour, 0, 0, 0)
  return date.toISOString()
}

export const DEMO_USER = Object.freeze({
  id: 1,
  username: 'demo_viewer',
  email: 'demo@eventhub.local',
  first_name: 'Demo',
  last_name: 'Visitor',
  full_name: 'Demo Visitor',
  role: 'viewer',
  is_staff: false,
})

export function createDemoWorkspace() {
  const events = [
    {
      id: 1,
      title: 'Creative Coding Workshop',
      description: 'A practical introduction to interactive visuals, browser APIs, and collaborative prototyping.',
      location: 'Digital Lab, Paris',
      date: futureDate(2, 18),
      capacity: 30,
    },
    {
      id: 2,
      title: 'Community Design Meetup',
      description: 'Designers and developers share current projects, methods, and useful feedback.',
      location: 'Maison des Associations',
      date: futureDate(5, 19),
      capacity: 24,
    },
    {
      id: 3,
      title: 'Open Web Conference',
      description: 'Short talks about accessible interfaces, modern frontend architecture, and the open web.',
      location: 'Campus Auditorium',
      date: futureDate(11, 10),
      capacity: 80,
    },
    {
      id: 4,
      title: 'Photography Walk',
      description: 'An evening photo walk focused on urban light, composition, and visual storytelling.',
      location: 'Canal Saint-Martin',
      date: futureDate(16, 17),
      capacity: 16,
    },
  ]

  const participants = [
    { id: 1, first_name: 'Lina', last_name: 'Martin', email: 'lina.martin@example.com' },
    { id: 2, first_name: 'Noah', last_name: 'Bernard', email: 'noah.bernard@example.com' },
    { id: 3, first_name: 'Maya', last_name: 'Robert', email: 'maya.robert@example.com' },
    { id: 4, first_name: 'Adam', last_name: 'Petit', email: 'adam.petit@example.com' },
    { id: 5, first_name: 'Sara', last_name: 'Moreau', email: 'sara.moreau@example.com' },
  ]

  const registrations = [
    { id: 1, event: 1, participant: 1, status: 'confirmed' },
    { id: 2, event: 1, participant: 2, status: 'confirmed' },
    { id: 3, event: 1, participant: 3, status: 'pending' },
    { id: 4, event: 2, participant: 2, status: 'confirmed' },
    { id: 5, event: 2, participant: 4, status: 'confirmed' },
    { id: 6, event: 3, participant: 1, status: 'confirmed' },
    { id: 7, event: 3, participant: 3, status: 'confirmed' },
    { id: 8, event: 3, participant: 5, status: 'confirmed' },
    { id: 9, event: 4, participant: 4, status: 'pending' },
  ]

  return {
    user: DEMO_USER,
    events,
    participants,
    registrations,
  }
}

export function createDemoSession() {
  return {
    accessToken: 'eventhub-demo-access',
    refreshToken: 'eventhub-demo-refresh',
    user: DEMO_USER,
    demo: true,
  }
}
