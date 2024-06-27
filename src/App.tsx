import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LeagueSelector from './components/league-selector';
import { useState } from 'react';
import ConcussionSubs from './components/concussion-subs';

const queryClient = new QueryClient();

function App() {
  const [league, setLeague] = useState('');
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className='text-3xl'>League1 Ontario Head Injuries</h1>
      <LeagueSelector onValueChange={setLeague} />
      {league === 'League1 Ontario Premier Division (M)' ? (
        <ConcussionSubs leagueName={league} envVar={'VITE_MENS_PREM'} />
      ) : null}
      {league === 'League1 Ontario Championship Division (M)' ? (
        <ConcussionSubs leagueName={league} envVar={'VITE_MENS_CHAMPS'} />
      ) : null}
      {league === 'League2 Ontario (M)' ? (
        <ConcussionSubs leagueName={league} envVar={'VITE_MENS_L2'} />
      ) : null}
      {league === 'L1 Cup (M)' ? (
        <ConcussionSubs leagueName={league} envVar={'VITE_MENS_L1_CUP'} />
      ) : null}
      {league === 'League1 Ontario Premier Division (W)' ? (
        <ConcussionSubs leagueName={league} envVar={'VITE_WOMENS_PREM'} />
      ) : null}
      {league === 'League1 Ontario Championship Division (W)' ? (
        <ConcussionSubs leagueName={league} envVar={'VITE_WOMENS_CHAMPS'} />
      ) : null}
      {league === 'League2 Ontario (W)' ? (
        <ConcussionSubs leagueName={league} envVar={'VITE_WOMENS_L2'} />
      ) : null}
      {league === 'L1 Cup (W)' ? (
        <ConcussionSubs leagueName={league} envVar={'VITE_WOMENS_L1_CUP'} />
      ) : null}
    </QueryClientProvider>
  );
}

export default App;
