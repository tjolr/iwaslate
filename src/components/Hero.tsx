import { IconButton, lighten } from '@mui/material';
import styled from 'styled-components';
import Title from './Title';
import MenuIcon from '@mui/icons-material/Menu';
import ParticipantOverview from './ParticipantOverview';

const Hero = () => {
  return (
    <Wrapper>
      <Navbar>
        <Title />
        <IconButton>
          <MenuIcon style={{ color: 'white' }} />
        </IconButton>
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
  height: clamp(25rem, 25rem + 4.5vh + 5vw, 43rem);
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 35%;
  ${(props) => props.theme.breakpoints.down('sm')} {
    border-bottom-right-radius: 10%;
    border-bottom-left-radius: 10%;
  }
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  padding: 0.5rem;
`;
export default Hero;
