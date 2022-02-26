import { supabase } from "./supabase";
import { Latecoming, Profile } from "./supabase.models";

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
  if (minutes <= 0) return;

  const { data, error } = await supabase
    .from("latecomings")
    .insert([{ guilty: uuid, minutes: minutes }]);

  if (error) throw error;
};
