import { supabase } from "./supabase";

export const getAllLatecomingsForUser = async (
  uuid: string
): Promise<Latecoming[]> => {
  let { data, error } = await supabase
    .from("latecomings")
    .select("*")
    .eq("guilty", uuid);

  if (error) throw error;

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
