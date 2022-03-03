import { h } from 'preact';
import Contract from './Contract';
import Hero from './Hero';
import RewardSection from './RewardSection';

const MainPage = () => {
  return (
    <>
      <Hero />
      <RewardSection />
      <Contract />
    </>
  );
};

export default MainPage;
