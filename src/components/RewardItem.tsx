import { lighten, Typography } from '@mui/material';
import styled from 'styled-components';
import { Profile } from '../supabase/supabase.models';
import { StringUtils } from '../utils/String.utils';

const RewardItem = ({ reward, rewardInfo }: Profile) => {
  return (
    <Wrapper>
      <Typography variant="h4" align="center" color="whitesmoke">
        {StringUtils.firstCharUpperCase(reward)}
      </Typography>
      <Typography variant="subtitle1" align="center" color="whitesmoke">
        {rewardInfo}
      </Typography>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 4rem;
  width: 22rem;
  height: 19rem;
  box-shadow: ${(props) => props.theme.shadows[12]};
`;

export default RewardItem;
