export interface Latecoming {
  created_at: Date;
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
