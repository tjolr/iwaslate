import { atom } from 'recoil';
import {
  LatecomingProfile,
  Latecomings,
  Profile,
} from '../supabase/supabase.models';

export const profilesState = atom<Profile[]>({
  key: 'profilesState',
  default: [],
});

export const latecomingsState = atom<Latecomings>({
  key: 'latecomingsState',
  default: {},
});

export const latecomingProfilesState = atom<LatecomingProfile[]>({
  key: 'latecomingProfilesState',
  default: [],
});
