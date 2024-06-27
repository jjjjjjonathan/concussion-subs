import { useQuery } from '@tanstack/react-query';
import type { ConcussionSubData } from '../lib/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

type ConcussionSubsProps = {
  leagueName: string;
  envVar: string;
};

const getSubs = async (envVar: string) => {
  const response = await fetch(import.meta.env[envVar]);

  const data = (await response.json()) as ConcussionSubData;

  return data.results.sort((a, b) => b.date - a.date);
};

type ConcussionSubRowProps = {
  matchId: number;
  name: string;
  team: string;
  competition: string;
  date: number;
  timeOfInjury: string;
};

const ConcussionSubRow = ({
  matchId,
  name,
  team,
  competition,
  date,
  timeOfInjury,
}: ConcussionSubRowProps) => {
  return (
    <TableRow>
      <TableCell>
        <a
          target='__blank'
          rel='noopener noreferrer'
          className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
          href={`https://comet.canadasoccer.com/resources/jsf/match/index.xhtml?id=${matchId}`}
        >
          {matchId}
        </a>
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{team}</TableCell>
      <TableCell>{competition}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>{timeOfInjury}</TableCell>
    </TableRow>
  );
};

const ConcussionSubs = ({ leagueName, envVar }: ConcussionSubsProps) => {
  const result = useQuery({
    queryKey: ['comet_subs'],
    queryFn: () => getSubs(envVar),
  });
  return (
    <>
      <h2 className='text-xl'>{leagueName}</h2>
      {result.isLoading ? 'Loading' : null}
      {result.isError ? 'Something went wrong' : null}
      {result.isSuccess ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Match</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Competition</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time of injury</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {result.data.map((sub) => (
              <ConcussionSubRow
                key={sub.uid}
                matchId={sub.matchId}
                name={sub.secondPersonName}
                team={sub.club}
                competition={sub.name}
                date={sub.date}
                timeOfInjury={sub.displayMinute}
              />
            ))}
          </TableBody>
        </Table>
      ) : null}
    </>
  );
};

export default ConcussionSubs;
