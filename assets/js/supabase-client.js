import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from './config.js';

const isConfigured =
  SUPABASE_URL.startsWith('https://') &&
  !SUPABASE_URL.includes('YOUR_PROJECT_ID') &&
  SUPABASE_PUBLISHABLE_KEY.startsWith('sb_publishable_') &&
  !SUPABASE_PUBLISHABLE_KEY.includes('YOUR_KEY');

export const supabase = isConfigured
  ? createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
  : null;

export function isSupabaseConfigured() {
  return Boolean(supabase);
}
