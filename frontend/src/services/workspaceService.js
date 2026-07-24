// Frontend developer: Mehdi AGHAEI
import { createDemoWorkspace } from '../data/demoData'
import { normalizeUser } from './authService'

export async function fetchWorkspace(requester, signal) {
  if (import.meta.env.VITE_DEMO_MODE === 'true') {
    return createDemoWorkspace()
  }

  const [user, events, participants, registrations] = await Promise.all([
    requester('/auth/me/', { signal }),
    requester('/events/', { signal }),
    requester('/participants/', { signal }),
    requester('/registrations/', { signal }),
  ])

  return {
    user: normalizeUser(user),
    events,
    participants,
    registrations,
  }
}
