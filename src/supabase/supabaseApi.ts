import { supabase } from './supabase';

export const getAllLatecomingsForUser = async (uuid: string) => {
  let { latecomings, error } = await supabase
  .from('latecomings')
  .select('*')
  .eq('guilty', uuid)

  if (error) throw error;

  return latecomings;
}

export const addNewLatecoming = async (uuid: string, minutes: number) => {
  const { latecoming, error } = await supabase
  .from('latecomings')
  .insert([
    { guilty: uuid, minutes: minutes },
  ])

  if (error) throw error;
}

export interface Latecoming {
  id: number;
  created_at: Date;
  guilty: string;
  minutes: number;
}
