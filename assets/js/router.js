// Role-specific dashboards are wired in a later batch after the database schema is in place.
export const ROLE_LABELS = {
  student: 'Student',
  proctor: 'Proctor',
  event_in_charge: 'Event In-Charge'
};

export function normalizeRole(role) {
  return ROLE_LABELS[role] ? role : null;
}

export function getRoleLabel(role) {
  return ROLE_LABELS[role] ?? 'Role not assigned';
}
