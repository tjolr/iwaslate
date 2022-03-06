import { h } from 'preact';
import { useSetRecoilState } from 'recoil';
import { userState } from '../store/state';
import { supabase } from '../supabase/supabase';
import Contract from './Contract';
import Hero from './Hero';
import RewardSection from './RewardSection';

const MainPage = () => {
  const setUser = useSetRecoilState(userState);

  supabase.auth.onAuthStateChange((_, session) => {
    const user = session?.user || null;

    setUser(user);
  });

  return (
    <>
      <Hero />
      <RewardSection />
      <Contract />
    </>
  );
};

export default MainPage;
