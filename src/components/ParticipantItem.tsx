import { Typography, useMediaQuery } from '@mui/material';
import styled, { useTheme } from 'styled-components';
import { LatecomingProfile } from '../supabase/supabase.models';
import ParticipantAddValue from './ParticipantAddValue';
import Chart from 'react-apexcharts';
import { StringUtils } from '../utils/String.utils';

const ParticipantItem = ({
  username,
  ppu,
  earnedNOK,
  totalMinutes,
  id,
  reward,
}: LatecomingProfile) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const getPercentageOfNextUnit = (earnedNOK: number, ppu: number): number =>
    Math.round(((earnedNOK % ppu) / ppu) * 100);

  const getFullyEarnedUnits = (earnedNOK: number, ppu: number): number =>
    Math.floor((earnedNOK ?? 0) / ppu);

  const chartOptions = {
    options: {
      chart: {
        id: 'radial-bar',
        foreColor: 'white',
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#e7e7e7',
            strokeWidth: '97%',
            margin: 5,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: '22px',
            },
          },
        },
      },
      grid: {
        padding: {
          top: -10,
        },
      },

      theme: {
        monochrome: {
          enabled: true,
          color: '#53aa7a',
          shadeTo: 'dark',
          shadeIntensity: 0.35,
        },
      },
    } as ApexCharts.ApexOptions,
    series: [getPercentageOfNextUnit(earnedNOK ?? 0, ppu)],
  };

  return (
    <Wrapper>
      <Typography variant="h4" sx={{ mb: 0 }}>
        {username}
      </Typography>

      <Typography variant="subtitle1" sx={{ mx: 3 }} align="center">
        Har vært for sen totalt {totalMinutes} minutter
      </Typography>

      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="radialBar"
        width={isMobile ? 150 : isTablet ? 220 : 300}
      />
      <Typography variant="subtitle1">av neste {reward}</Typography>

      <Typography variant="caption" sx={{ mt: 3 }}>
        OPPTJENT GEVINST:
      </Typography>

      <Typography variant="h6">{earnedNOK} kr</Typography>

      <Typography variant="h6" sx={{ mb: 3 }}>
        {getFullyEarnedUnits(earnedNOK ?? 0, ppu)}{' '}
        {getFullyEarnedUnits(earnedNOK ?? 0, ppu) === 1
          ? reward
          : StringUtils.rewardToPlural(reward)}
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
