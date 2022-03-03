import styled from 'styled-components';
import ParticipantItem from './ParticipantItem';
import { useEffect, useState } from 'preact/hooks';
import {
  getAllLatecomingsForUser,
  getProfiles,
} from '../supabase/supabase.api';
import {
  Latecoming,
  LatecomingProfile,
  Profile,
} from '../supabase/supabase.models';
import { useSnackbar } from 'notistack';
import { useRecoilState } from 'recoil';
import {
  latecomingProfilesState,
  latecomingsState,
  profilesState,
} from '../store/state';

const ParticipantOverview = () => {
  const PENALTY = 10;

  const { enqueueSnackbar } = useSnackbar();

  const [profiles, setProfiles] = useRecoilState(profilesState);
  const [latecomings, setLatecomings] = useRecoilState(latecomingsState);
  const [latecomingProfiles, setLatecomingProfiles] = useRecoilState(
    latecomingProfilesState
  );

  const fetchProfiles = async () => {
    try {
      const profiles: Profile[] = await getProfiles();
      setProfiles(profiles);
    } catch (e) {
      enqueueSnackbar('Det skjedde en feil i henting av profiler', {
        variant: 'error',
      });
    }
  };

  const fetchLatecomings = async () => {
    const newLatecomings: Record<string, Latecoming[]> = {};

    for (const profile of profiles) {
      try {
        const userLatecomings: Latecoming[] = await getAllLatecomingsForUser(
          profile.id
        );
        newLatecomings[profile.id] = userLatecomings;
      } catch (e) {
        enqueueSnackbar('Det skjedde en feil i henting av latecomings', {
          variant: 'error',
        });
      }
    }

    setLatecomings(newLatecomings);
  };

  const calculateLatecomingProfiles = () => {
    const newLatecomingProfiles: LatecomingProfile[] = [];

    // First calculate how many minutes late each person has been
    profiles.forEach((profile) => {
      const totalLateMinutes = latecomings[profile.id].reduce(
        (total, latecoming) => total + latecoming.minutes,
        0
      );

      const latecomingProfile: LatecomingProfile = {
        ...profile,
        totalMinutes: totalLateMinutes,
      };

      newLatecomingProfiles.push(latecomingProfile);
    });

    // Update latecomingProfiles with earnings
    const updatedLatecomingProfiles = newLatecomingProfiles.map(
      (latecomingProfile) => {
        let earnings = 0;
        // looping through other profiles to calculate earnings
        newLatecomingProfiles.forEach((otherLatecomingProfile) => {
          if (latecomingProfile.id !== otherLatecomingProfile.id) {
            // multiply total minutes late with penalty, and divide with
            // the amount of other profiles in the same group
            // (currently doesn't do the dividing part)
            earnings += otherLatecomingProfile.totalMinutes * PENALTY;
          }
        });

        const updatedLatecomingProfile: LatecomingProfile = {
          ...latecomingProfile,
          earnedPpu: earnings,
        };

        return updatedLatecomingProfile;
      }
    );

    setLatecomingProfiles(updatedLatecomingProfiles);
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  useEffect(() => {
    if (profiles.length !== 0) fetchLatecomings();
  }, [profiles]);

  useEffect(() => {
    if (Object.keys(latecomings).length !== 0) calculateLatecomingProfiles();
  }, [latecomings]);

  return (
    <Wrapper>
      {latecomingProfiles.map((latecomingProfile: LatecomingProfile) => (
        <ParticipantItem {...latecomingProfile} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  margin: 2rem 0rem;
  z-index: 10;
`;

export default ParticipantOverview;
