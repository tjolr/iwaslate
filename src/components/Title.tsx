import { Typography } from '@mui/material';
import styled from 'styled-components';
import LogoPng from '../assets/logo_white.png';

const Title = () => {
  return (
    <Wrapper>
      <img src={LogoPng} alt="logo" width="40" height="40" />
      <Typography
        variant="h5"
        color="whitesmoke"
        style={{ fontWeight: 700, fontFamily: 'revert' }}
      >
        jegKomForSent
      </Typography>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Title;
