# Pixel to Product 2026 — Combined Main Portal + Student Dashboard

This combines the uploaded Pixel to Product authentication portal with the Student Dashboard. The main portal keeps its email/password sign-in and Supabase client. After sign-in, profiles with `profiles.role = 'student'`, `'proctor'`, or `'event_in_charge'` are routed to their matching dashboards. Each dashboard checks the Supabase session and expected role. The student dashboard loads `full_name`, `student_id`, and `department`; all dashboards use Supabase sign-out.

## Project layout

- `index.html` — main sign-in portal / non-student workspace
- `assets/css/styles.css` — main portal styles
- `assets/js/` — authentication, Supabase client/config, and role routing
- `student-dashboard/index.html` — student dashboard
- `student-dashboard/style.css` — student dashboard styles
- `proctor-dashboard/` — proctor workspace
- `event-in-charge-dashboard/` — event in-charge workspace

## Setup and run

1. Open `assets/js/config.js` and verify the Supabase Project URL and **publishable** key are correct for your project. Browser code must never contain a secret/service-role key.
2. In Supabase Auth URL configuration, allow the local URL you use, such as `http://localhost:8000`.
3. Ensure each student has a row in `public.profiles` with `id` equal to that user's `auth.users.id`, `role = 'student'`, and the expected profile fields.
4. Confirm RLS allows an authenticated user to select their own profile row (for example, `id = auth.uid()`).
5. From this folder, run `python -m http.server 8000` and open `http://localhost:8000`.
6. Sign in with an account whose `profiles.role` is `student`, `proctor`, or `event_in_charge`. The matching dashboard opens automatically. Use **Return to main portal** to return to the portal workspace, or **Sign out** to end the session.

## Important notes

- The course, event, attendance, task, and announcement cards in the student dashboard remain demo/sample content; they are not loaded from database tables.
- Proctor and event-in-charge dashboards are starter workspaces; their metrics and actions are placeholders until matching database tables and RLS policies are configured.
- This is a static front-end project. Supabase RLS policies remain the security boundary; do not rely on client-side role checks alone to protect data.
