import { createClient } from '@supabase/supabase-js';

// Récupération sécurisée des variables d'environnement
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Attention : Les variables d'environnement Supabase sont manquantes dans votre fichier .env.local.");
}

// Initialisation unique du client Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;