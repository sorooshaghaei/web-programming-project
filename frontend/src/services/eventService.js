// Frontend developer: Mehdi AGHAEI
import { createDemoWorkspace } from '../data/demoData'
import { requestJson } from './api'

export function fetchPublicEventsRequest(signal) {
  if (import.meta.env.VITE_DEMO_MODE === 'true') {
    return Promise.resolve(createDemoWorkspace().events)
  }

  return requestJson('/events/', { signal })
}

export function saveEventRequest(requester, payload, eventId) {
  return requester(eventId ? `/events/${eventId}/` : '/events/', {
    method: eventId ? 'PATCH' : 'POST',
    data: payload,
  })
}

export function deleteEventRequest(requester, eventId) {
  return requester(`/events/${eventId}/`, {
    method: 'DELETE',
  })
}
