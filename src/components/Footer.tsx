import { alpha, Typography } from '@mui/material';
import styled from 'styled-components';
import JegKomForSentLogo from '../assets/logo_gradient.png';
import GithubLogo from '../assets/github-logo.png';
import MuiLogo from '../assets/mui-logo.png';
import PreactLogo from '../assets/preact-logo.png';
import RecoilLogo from '../assets/recoil-logo.png';
import SupabaseLogo from '../assets/supabase-logo.png';
import VercelLogo from '../assets/vercel-logo.png';
import ViteLogo from '../assets/vite-logo.png';

const Footer = () => {
  return (
    <>
      <TechWrapper>
        <LogoImg src={PreactLogo} alt="Preact logo" />
        <LogoImg src={RecoilLogo} alt="Recoil logo" />
        <LogoImg src={MuiLogo} alt="Mui logo" />
        <LogoImg src={ViteLogo} alt="Vite logo" />
        <LogoImg src={VercelLogo} alt="Vercel logo" />
        <LogoImg src={SupabaseLogo} alt="Supabase logo" />
        <LogoImg src={GithubLogo} alt="Github logo" />
      </TechWrapper>

      <FooterWrapper>
        <Typography style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={JegKomForSentLogo}
            alt="logo"
            width="20"
            height="20"
            style={{ marginRight: '.5rem' }}
          />{' '}
          jegKomForSent
        </Typography>
        <Typography>Anders Solberg & Tjøl Ravndal</Typography>
        <Typography>© no rights reserved</Typography>
      </FooterWrapper>
    </>
  );
};

const TechWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 12rem;
  width: 100%;
  background: ${(props) => alpha(props.theme.palette.primary.light, 0.2)};

  ${(props) => props.theme.breakpoints.down('sm')} {
    min-height: 6rem;
  }
`;

const LogoImg = styled.img`
  width: 50px;
  height: 50px;

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 20px;
    height: 20px;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 5rem;
  width: 100%;
  background: ${(props) => alpha(props.theme.palette.primary.light, 0.28)};
  padding: 1rem;

  ${(props) => props.theme.breakpoints.down('sm')} {
    flex-direction: column;
    height: auto;

    & > * {
      margin: 0.42rem 0;
    }
  }
`;

export default Footer;
