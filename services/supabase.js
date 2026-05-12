import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = "https://dvfqbxsvymwjmwzyeurj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2ZnFieHN2eW13am13enlldXJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI0MTEzODUsImV4cCI6MjA4Nzk4NzM4NX0.AQTcS6eFAqB4cxAJ3MbhC930qVDjzEBHhNNL9WOs3aU";


const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;