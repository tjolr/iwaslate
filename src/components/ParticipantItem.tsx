import { Typography, useMediaQuery } from "@mui/material";
import styled, { useTheme } from "styled-components";
import { Participant } from "../types/Participants";
import ParticipantAddValue from "./ParticipantAddValue";

const ParticipantItem = ({ name, earnedAmount, ppu }: Participant) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Wrapper>
      <Typography variant={isMobile ? "h3" : "h1"} sx={{ my: 2 }}>
        {earnedAmount} <span style={{ fontSize: "60%" }}>/ {ppu}</span>
      </Typography>
      <Typography variant="h5" sx={{ my: 2 }}>
        {name}
      </Typography>

      <ParticipantAddValue />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;

export default ParticipantItem;
