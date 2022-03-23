import { Avatar, IconButton, lighten } from '@mui/material';
import styled from 'styled-components';
import Title from './Title';
import GitHubIcon from '@mui/icons-material/GitHub';
import ParticipantOverview from './ParticipantOverview';
import { signInWithGithub, signOut } from '../supabase/supabase.auth';
import { useRecoilValue } from 'recoil';
import { userState } from '../store/state';

const Hero = () => {
  const user = useRecoilValue(userState);

  return (
    <Wrapper>
      <Navbar>
        <Title />
        <AvatarIconWrapper>
          {user ? (
            <IconButton onClick={signOut}>
              <Avatar alt="User avatar" src={user.user_metadata.avatar_url} />
            </IconButton>
          ) : (
            <IconButton onClick={signInWithGithub}>
              <GitHubIcon style={{ color: 'white' }} />
            </IconButton>
          )}
        </AvatarIconWrapper>
      </Navbar>

      <ParticipantOverview />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${(props) => `
  linear-gradient(125deg, ${lighten(props.theme.palette.primary.main, 0.2)},
    ${lighten(props.theme.palette.secondary.main, 0.4)})  
  `};
  position: relative;
  z-index: 100;

  box-shadow: ${(props) => props.theme.shadows[18]};

  width: 100%;
  height: clamp(35rem, 35rem + 5vh + 6vw, 58rem);

  border-radius: 49% 51% 62% 38% / 71% 64% 36% 29%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  ${(props) => props.theme.breakpoints.down('sm')} {
    border-radius: 49% 51% 56% 44% / 91% 93% 7% 9%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 0.5rem;
  padding: 0.5rem;
`;

const AvatarIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
`;
export default Hero;
