import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useState } from 'preact/hooks';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { latecomingsState, userState } from '../store/state';
import { extractMoney } from '../supabase/supabase.api';
import { Latecoming, Profile } from '../supabase/supabase.models';
import { StyledButton } from './StyledButton';
import CloseIcon from '@mui/icons-material/Close';

export const ExtractMoney = ({ id, username, reward }: Profile) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const user = useRecoilValue(userState);
  const setLatecomings = useSetRecoilState(latecomingsState);
  const [extractionAmount, setExtractionAmount] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExtractionAmount(Number(event.target.value));
  };

  const extractMoneyAndUpdateLocalState = async () => {
    try {
      // Only able to add a negative latecoming to other person
      if (user?.id === id) throw Error;

      const created_at = await extractMoney(id, extractionAmount);

      const newLatecoming: Latecoming = {
        minutes: 0,
        nok: -extractionAmount,
        created_at: created_at ? new Date(created_at) : new Date(),
      };

      setLatecomings((latecomings) => ({
        ...latecomings,
        [id]: [...latecomings[id], newLatecoming],
      }));

      let feedbackText = `${username} har brukt ${extractionAmount},- NOK på ${reward}. Nyt! 🤩`;
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
    } catch (e) {
      enqueueSnackbar('Ikke noe juks 😂', {
        variant: 'error',
      });
    }
  };

  return (
    <Wrapper>
      <Typography variant="h6">På tide med en ny {reward}?</Typography>
      <TextField
        id="extraction-amount"
        type="number"
        size="small"
        label="Hvor mye koster den?"
        InputProps={{
          endAdornment: <InputAdornment position="end">NOK</InputAdornment>,
        }}
        value={extractionAmount}
        onChange={handleChange}
      />
      <StyledButton
        onClick={extractMoneyAndUpdateLocalState}
        variant="contained"
      >
        Bruk!
      </StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem;
  width: 22rem;
`;
