import { alpha, Typography } from '@mui/material';
import styled from 'styled-components';

const Contract = () => {
  return (
    <Wrapper>
      <Typography variant="h3" gutterBottom>
        Kontrakt
      </Typography>

      <Typography
        variant="subtitle1"
        style={{ maxWidth: '35rem', fontSize: '130%' }}
      >
        Denne kontrakten er lovbindende mellom partene, og regler for
        registrering av forsentkomming må tilfredsstille alle paragrafer i denne
        kontrakten.
        <br />
        <br />
        &sect; Forsentkomming må alltid sjekkes opp i mot global synkronisert
        klokke (GMT).
        <br />
        <br />
        &sect; Dersom minuttviser har oversteget avtalt møtetid, registreres
        hvert minutt.
        <br />
        <br />
        &sect; Dersom en av partene er på tiden og den andre forsinket, vil kun
        den parten som er forsinket få straff.
        <br />
        <br />
        &sect; Dersom begge partene er forsinket, vil begge parter få
        individuell straff med grunnlag i hvor mange minutter partene kommer for
        sent.
        <br />
        <br />
        &sect; Når en part har tjent seg opp til å en enhet består vedkommende
        fritt til å registrere uttak og pengene skal overleveres innen en dag.
        <br />
        <br />
        &sect; Ved uttak skal penger sendes som oppkrav på Vipps.
        <br />
        <br />
        &sect; Begge parter vil på tro og ære være ærlige med registering av
        forsentkomming.
      </Typography>

      <Blob></Blob>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const Blob = styled.div`
  border-radius: 66% 34% 43% 57% / 68% 28% 72% 32%;
  background: ${(props) => `
        linear-gradient(275deg, 
            ${alpha(props.theme.palette.secondary.main, 0.12)},
        ${alpha(props.theme.palette.primary.main, 0.12)} 120%
        )`};

  position: absolute;
  left: 35%;
  top: 22rem;
  bottom: -7rem;
  right: -5rem;
  z-index: 0;

  ${(props) => props.theme.breakpoints.down('sm')} {
    left: 25%;
    right: -15rem;
    bottom: -20rem;
  }
`;

export default Contract;
