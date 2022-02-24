import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sdyyceitwjnhrmxogftf.supabase.co'
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
