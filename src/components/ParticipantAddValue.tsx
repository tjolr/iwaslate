import { Button, IconButton, Typography } from '@mui/material';
import styled from 'styled-components';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useState } from 'preact/hooks';
import { addNewLatecoming } from '../supabase/supabase.api';
import { useSnackbar } from 'notistack';
import { useSetRecoilState } from 'recoil';
import { latecomingsState } from '../store/state';
import { Latecoming } from '../supabase/supabase.models';
import { calculateLatecomingPenalty } from '../services/latecoming.service';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  profileId: string;
}

const ParticipantAddValue = ({ profileId }: Props) => {
  const [minutes, setMinutes] = useState<number>(0);
  const setLatecomings = useSetRecoilState(latecomingsState);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const incrementMinutes = () => setMinutes((minutes) => minutes + 1);
  const decrementMinutes = () =>
    setMinutes((minutes) => Math.max(minutes - 1, 0));

  const handleSave = async () => {
    if (minutes === 0) return;

    const penalty = calculateLatecomingPenalty(minutes);

    try {
      const created_at = await addNewLatecoming(
        profileId,
        minutes,
        penalty.penaltyNOK
      );

      const newLatecoming: Latecoming = {
        minutes: minutes,
        nok: penalty.penaltyNOK,
        created_at: created_at ? new Date(created_at) : new Date(),
      };

      setLatecomings((latecomings) => ({
        ...latecomings,
        [profileId]: [...latecomings[profileId], newLatecoming],
      }));

      let feedbackText = `${penalty.penaltyNOK},- straff ved ${minutes} minutt${
        minutes > 1 ? 'er' : ''
      } for sent.`;
      if (penalty.luckyDiscount < 0) {
        feedbackText += `${Math.abs(penalty.luckyDiscount)},- rabatt 🎉`;
      } else if (penalty.luckyDiscount > 0) {
        feedbackText += `${penalty.luckyDiscount},- tillegg 😭`;
      }

      enqueueSnackbar(feedbackText, {
        variant: 'success',
        autoHideDuration: 10000,
        action: (key) => (
          <IconButton
            style={{ color: 'white' }}
            onClick={() => {
              closeSnackbar(key);
            }}
          >
            <CloseIcon />
          </IconButton>
        ),
      });
      setMinutes(0);
    } catch (e) {
      enqueueSnackbar('Det skjedde en feil', { variant: 'error' });
    }
  };

  return (
    <Wrapper>
      <IncDecAmount>
        <StyledIconButton size="large" onClick={decrementMinutes}>
          <RemoveCircleIcon fontSize="large" />
        </StyledIconButton>

        <Typography variant="h5">{minutes}</Typography>

        <StyledIconButton size="large" onClick={incrementMinutes}>
          <AddCircleIcon fontSize="large" />
        </StyledIconButton>
      </IncDecAmount>

      <StyledButton onClick={handleSave} variant="contained">
        Lagre
      </StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  margin-bottom: 2rem;
`;

const IncDecAmount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin-bottom: 0.5rem;
`;

const StyledIconButton = styled(IconButton)`
  color: #53aa7a;
  margin: 0 1rem;
`;

const StyledButton = styled(Button)`
  width: 80%;
  border-radius: 10px;
  background: #53aa7a;
  color: white;

  :hover {
    background: #5dc08a;
  }
`;

export default ParticipantAddValue;
