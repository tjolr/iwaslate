import { Button, IconButton, Typography } from "@mui/material";
import styled from "styled-components";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const ParticipantAddValue = () => {
  return (
    <Wrapper>
      <IncDecAmount>
        <StyledIconButton size="large">
          <RemoveCircleIcon fontSize="large" />
        </StyledIconButton>

        <Typography variant="h6">2</Typography>

        <StyledIconButton size="large">
          <AddCircleIcon fontSize="large" />
        </StyledIconButton>
      </IncDecAmount>

      <StyledButton variant="contained">Lagre</StyledButton>
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

const IncDecAmount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const StyledIconButton = styled(IconButton)`
  color: #f3d853;
  margin: 0 1rem;
`;

const StyledButton = styled(Button)`
  width: 80%;
  border-radius: 10px;
  background: #f3d853;
  color: black;
`;

export default ParticipantAddValue;
