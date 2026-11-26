
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ymxpptgtynanyarwvjyw.supabase.co'

const supabaseKey = 'sb_publishable_awn4z60n8UfBUQZzFgu9wQ_fpplV0Ru'

export const supabase = createClient(supabaseUrl, supabaseKey)
