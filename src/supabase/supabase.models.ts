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
