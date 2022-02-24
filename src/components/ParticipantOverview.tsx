import styled from "styled-components";
import ParticipantItem from "./ParticipantItem";
import { useEffect, useState } from "preact/hooks";
import {
  getAllLatecomingsForUser,
  getProfiles,
  Latecoming,
  LatecomingProfile,
  Profile,
} from "../supabase/supabaseApi";

const ParticipantOverview = () => {
  const PENALTY = 10;
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [latecomingProfiles, setLatecomingProfiles] = useState<
    LatecomingProfile[]
  >([]);
  const [tmpLatecomingProfiles, setTmpLatecomingProfiles] = useState<
    LatecomingProfile[]
  >([]);

  const fetchProfiles = async () => {
    const profiles: Profile[] = await getProfiles();
    setProfiles(() => [...profiles]);
  };

  const fetchLatecomings = () => {
    profiles.forEach(async (profile: Profile) => {
      const latecomings: Latecoming[] = await getAllLatecomingsForUser(
        profile.id
      );

      let totalMinutes = 0;
      latecomings.map((latecoming: Latecoming) => {
        totalMinutes += latecoming.minutes;
      });

      const latecomingProfile: LatecomingProfile = {
        ...profile,
        totalMinutes,
      };

      setTmpLatecomingProfiles((tmpLateComingProfiles) => [
        ...tmpLateComingProfiles,
        latecomingProfile,
      ]);
    });
  };

  const findEarnedPpu = () => {
    const newLatecomingProfiles = tmpLatecomingProfiles.map(
      (item: LatecomingProfile) => {
        // looping through other profiles to recieved earned ppu
        let totalEarnedPpu = 0;
        tmpLatecomingProfiles.forEach((otherItem: LatecomingProfile) => {
          if (item.id !== otherItem.id) {
            // multiply total minutes late with penalty, and divide with
            // the amount of other profiles in the same group
            totalEarnedPpu += otherItem.totalMinutes * PENALTY;
          }
        });

        const latecomingProfile: LatecomingProfile = {
          ...item,
          earnedPpu: totalEarnedPpu,
        };

        return latecomingProfile;
      }
    );

    setLatecomingProfiles(() => [...newLatecomingProfiles]);
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  useEffect(() => {
    fetchLatecomings();
  }, [profiles]);

  useEffect(() => {
    findEarnedPpu();
  }, [tmpLatecomingProfiles]);

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
`;

export default ParticipantOverview;
