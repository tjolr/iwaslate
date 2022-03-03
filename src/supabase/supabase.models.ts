export interface Latecoming {
  created_at: Date;
  minutes: number;
}

export interface Latecomings {
  [profileId: string]: Latecoming[];
}

export interface Profile {
  id: string;
  username: string;
  ppu: number;
  reward: string;
  rewardInfo: string;
}

export interface LatecomingProfile extends Profile {
  totalMinutes: number;
  earnedPpu?: number;
}
