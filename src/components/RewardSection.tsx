import { alpha, lighten, Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { profilesState } from '../store/state';
import { Profile } from '../supabase/supabase.models';
import { ExtractMoney } from './ExtractMoney';
import RewardItem from './RewardItem';

const RewardSection = () => {
  const profiles = useRecoilValue(profilesState);

  return (
    <Wrapper>
      <Typography variant="h3" style={{ zIndex: 10 }} gutterBottom>
        Hva skal pengene brukes på?
      </Typography>

      <RewardItemsWrapper>
        {profiles.map((profile: Profile) => (
          <RewardItem key={profile.id} {...profile} />
        ))}
      </RewardItemsWrapper>
      <ExtractionsWrapper>
        {profiles.map((profile, i) => (
          <ExtractMoney
            key={profile.id}
            {...profile}
            // Extraction for Anders needs to add a latecoming using Tjøls ID
            id={profiles[Math.abs(i - 1)].id}
          />
        ))}
      </ExtractionsWrapper>

      <Blob></Blob>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

const Blob = styled.div`
  border-radius: 58% 42% 33% 67% / 67% 67% 33% 33%;
  background: ${(props) => `
        linear-gradient(275deg, 

            ${alpha(props.theme.palette.secondary.main, 0.12)},
        ${alpha(props.theme.palette.primary.main, 0.1)} 120%
        )`};

  position: absolute;
  left: -20rem;
  top: -20rem;
  bottom: -20rem;
  right: 32%;
  z-index: 0;

  position: absolute;
  left: -20rem;
  top: -20rem;
  bottom: -20rem;
  right: 32%;
  z-index: 0;

  ${(props) => props.theme.breakpoints.down('sm')} {
    right: 22%;
    left: -35rem;
  }
`;

const RewardItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  z-index: 10;
  width: 100%;

  ${(props) => props.theme.breakpoints.down('sm')} {
    flex-direction: column;
  }

  div:nth-child(1n) {
    border-radius: 58% 42% 33% 67% / 67% 67% 33% 33%;
    background: ${(props) => `
        linear-gradient(125deg, 
            ${lighten(props.theme.palette.secondary.main, 0.26)},
        ${lighten(props.theme.palette.primary.main, 0.3)} 200%
        )`};
  }
  div:nth-child(2n) {
    border-radius: 43% 57% 53% 47% / 67% 38% 62% 33%;
    background: ${(props) => `
        linear-gradient(125deg, 
        ${lighten(props.theme.palette.primary.main, 0.35)},
        ${lighten(props.theme.palette.secondary.main, 0.26)} 170%)`};
  }
`;

const ExtractionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  z-index: 10;
  width: 100%;
`;

export default RewardSection;
