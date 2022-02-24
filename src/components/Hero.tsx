import { IconButton } from "@mui/material";
import styled from "styled-components";
import Title from "./Title";
import MenuIcon from "@mui/icons-material/Menu";
import ParticipantOverview from "./ParticipantOverview";

const Hero = () => {
  return (
    <Wrapper>
      <Navbar>
        <Title />
        <IconButton>
          <MenuIcon style={{ color: "white" }} />
        </IconButton>
      </Navbar>

      <ParticipantOverview />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${(props) => `
  linear-gradient(125deg, ${props.theme.palette.primary.main},
    ${props.theme.palette.secondary.main})  
  `};

  width: 100%;
  height: clamp(25rem, 25rem + 3vh + 4vw, 40rem);
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 20%;
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
