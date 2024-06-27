import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const LeagueSelector = () => {
  const [league, setLeague] = useState<string>('');

  return (
    <>
      <Select
        onValueChange={(value) => {
          setLeague(value);
        }}
      >
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Pick a league' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='L1ON Premier (M)'>L1ON Premier (M)</SelectItem>
          <SelectItem value='L1ON Championship (M)'>
            L1ON Championship (M)
          </SelectItem>
          <SelectItem value='League2 ON (M)'>League2 ON (M)</SelectItem>
          <SelectItem value='L1 Cup (M)'>L1 Cup (M)</SelectItem>
          <SelectItem value='L1ON Premier (W)'>L1ON Premier (W)</SelectItem>
          <SelectItem value='L1ON Championship (W)'>
            L1ON Championship (W)
          </SelectItem>
          <SelectItem value='League2 ON (W)'>League2 ON (W)</SelectItem>
          <SelectItem value='L1 Cup (W)'>L1 Cup (W)</SelectItem>
        </SelectContent>
      </Select>
      <p>Selected league is: {league}</p>
    </>
  );
};

export default LeagueSelector;
