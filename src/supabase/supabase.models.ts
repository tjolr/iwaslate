export interface Latecoming {
  created_at: Date;
  minutes: number;
  nok: number;
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
  earnedNOK?: number;
  penaltyNOK?: number;
}
