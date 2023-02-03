import { alpha, Typography } from '@mui/material';
import styled from 'styled-components';

const rules = [
  `Denne kontrakten gjelder for alle avtaler mellom begge parter som kan kategoriseres som arbeidsavtaler. Andre treff kan også underlegges denne kontrakten etter ekstraordinær avtale. I praksis utføres dette ved å sende en digital melding med innholdet 'jkfs?', og må bekreftes av mottakende part innen 30 minutter før første avreisetidspunkt.`,
  'Dersom minuttviser har oversteget avtalt møtetid, registreres hvert minutt.',
  'Dersom en av partene er på tiden og den andre forsinket, vil kun den parten som er forsinket få straff.',
  'Dersom begge partene er forsinket, vil begge parter få individuell straff med grunnlag i hvor mange minutter partene kommer for sent.',
  'Forsentkomming må alltid sjekkes opp i mot global synkronisert klokke (GMT).',
  'Den tjenende part er ansvarlig for å registrere forsentkomming på den forsinkede part.',
  'Dersom forsentkomming ikke er registrert innen 24 timer etter hendelsestidspunkt blir forsentkommingen ugyldig.',
  'Siste frist for å avtale møtetidpsunkt er 30 minutter før første parts avreisetidspunkt. Her må det også brukes skjønn.',
  'Når en part har tjent seg opp en enhet står vedkommende fritt til å registrere uttak.',
  'Ved uttak skal penger sendes som oppkrav på Vipps, og kravet skal godkjennes innen en dag',
];

const Contract = () => {
  return (
    <Wrapper>
      <ContractWrapper>
        <Typography variant="h3" style={{ marginBottom: '3rem' }}>
          Kontrakt
        </Typography>

        <Typography
          variant="subtitle1"
          style={{ fontSize: '140%', marginBottom: '3rem' }}
        >
          Denne kontrakten er lovbindende mellom partene, og regler for
          registrering av forsentkomming må tilfredsstille alle paragrafer i
          denne kontrakten.
        </Typography>

        {rules.map((rule, index) => (
          <>
            <Typography variant="subtitle1" style={{ fontSize: '120%' }}>
              &sect; {index + 1}: {rule}
            </Typography>
            <br />
            <br />
          </>
        ))}

        <Typography
          variant="subtitle1"
          style={{ fontSize: '140%', marginBottom: '1rem' }}
        >
          Begge parter vil på tro og ære være ærlige med registering av
          forsentkomming.
        </Typography>
      </ContractWrapper>

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

const ContractWrapper = styled.div`
  width: 35rem;
  margin-bottom: 4rem;

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 25rem;
    margin-bottom: 0;
  }
`;

const Blob = styled.div`
  border-radius: 66% 34% 43% 57% / 68% 28% 72% 32%;
  background: ${(props) => `
        linear-gradient(275deg, 
        ${alpha(props.theme.palette.secondary.main, 0.07)},
        ${alpha(props.theme.palette.primary.main, 0.03)} 120%
        )`};

  position: absolute;
  left: 27%;
  top: 22rem;
  bottom: -15rem;
  right: -16rem;
  z-index: 0;

  ${(props) => props.theme.breakpoints.down('sm')} {
    left: 25%;
    right: -15rem;
    bottom: -20rem;
  }
`;

export default Contract;
