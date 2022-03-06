import { supabase } from './supabase';

export const signInWithGithub = async (): Promise<void> => {
  const { user, session, error } = await supabase.auth.signIn({
    provider: 'github',
  });

  if (error) throw error;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
};
