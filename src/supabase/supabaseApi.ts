import { supabase } from "./supabase";

export const getProfiles = async (): Promise<Profile[]> => {
  const { data, error } = await supabase.from("profiles").select("*");

  if (error || !data) throw error;

  return data as Profile[];
};

export const getAllLatecomingsForUser = async (
  uuid: string
): Promise<Latecoming[]> => {
  let { data, error } = await supabase
    .from("latecomings")
    .select("*")
    .eq("guilty", uuid);

  if (error || !data) throw error;

  return data as Latecoming[];
};

export const addNewLatecoming = async (uuid: string, minutes: number) => {
  const { data, error } = await supabase
    .from("latecomings")
    .insert([{ guilty: uuid, minutes: minutes }]);

  if (error) throw error;
};

export interface Latecoming {
  id: number;
  created_at: Date;
  guilty: string;
  minutes: number;
}

export interface Profile {
  id: string;
  username: string;
  ppu: number;
}

export interface LatecomingProfile extends Profile {
  totalMinutes: number;
  earnedPpu?: number;
}
