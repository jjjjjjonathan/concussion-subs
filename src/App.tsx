import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LeagueSelector from './components/league-selector';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LeagueSelector />
    </QueryClientProvider>
  );
}

export default App;
