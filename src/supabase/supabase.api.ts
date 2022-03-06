import { supabase } from './supabase';
import { Latecoming, Profile } from './supabase.models';

export const getProfiles = async (): Promise<Profile[]> => {
  const { data, error } = await supabase.from('profiles').select('*');

  if (error || !data) throw error;

  const profiles: Profile[] = data.map(
    ({ id, username, ppu, reward, reward_info }) => ({
      id,
      username,
      ppu,
      reward,
      rewardInfo: reward_info,
    })
  );

  return profiles;
};

export const getAllLatecomingsForUser = async (
  uuid: string
): Promise<Latecoming[]> => {
  const { data, error } = await supabase
    .from('latecomings')
    .select('minutes, created_at, nok')
    .eq('guilty', uuid);

  if (error || !data) throw error;

  return data as Latecoming[];
};

export const addNewLatecoming = async (
  uuid: string,
  minutes: number,
  penaltyNOK: number
): Promise<string | undefined> => {
  if (minutes <= 0) return;

  const { data, error } = await supabase
    .from('latecomings')
    .insert([{ guilty: uuid, minutes: minutes, nok: penaltyNOK }]);

  if (error || !data) throw error;

  if (data?.length > 0) return [...data][0]['created_at'];
};
