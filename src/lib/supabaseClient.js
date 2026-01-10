import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/public';

// This allows the app to check for the keys at runtime
export const supabase = createClient(
    env.PUBLIC_SUPABASE_URL,
    env.PUBLIC_SUPABASE_ANON_KEY
);
