import { supabase, isSupabaseConfigured } from './supabase-client.js';

export async function signIn(email, password) {
  ensureConfigured();
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signUp(email, password) {
  ensureConfigured();
  return supabase.auth.signUp({ email, password });
}

export async function signOut() {
  ensureConfigured();
  return supabase.auth.signOut();
}

export async function sendPasswordReset(email) {
  ensureConfigured();
  return supabase.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin
  });
}

export async function getCurrentSession() {
  ensureConfigured();
  return supabase.auth.getSession();
}

export function onAuthStateChange(callback) {
  if (!isSupabaseConfigured()) return { data: { subscription: { unsubscribe() {} } } };
  return supabase.auth.onAuthStateChange(callback);
}

function ensureConfigured() {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured yet. Add your project URL and publishable key in assets/js/config.js.');
  }
}
