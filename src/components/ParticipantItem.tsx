import { Typography, useMediaQuery } from "@mui/material";
import styled, { useTheme } from "styled-components";
import { LatecomingProfile } from "../supabase/supabase.models";
import ParticipantAddValue from "./ParticipantAddValue";

const ParticipantItem = ({
  username,
  ppu,
  earnedPpu,
  totalMinutes,
  id,
}: LatecomingProfile) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Wrapper>
      <Typography variant={isMobile ? "h3" : "h1"} sx={{ mb: 3 }}>
        {earnedPpu} <span style={{ fontSize: "35%" }}>/ {ppu} NOK</span>
      </Typography>
      <Typography variant="h5" sx={{ my: 1 }}>
        {username}
      </Typography>

      <Typography variant="subtitle1" sx={{ mb: 3 }}>
        Har vært for sen totalt {totalMinutes} minutter
      </Typography>

      <ParticipantAddValue profileId={id} />
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
