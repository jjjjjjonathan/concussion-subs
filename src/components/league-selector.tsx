import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

type LeagueSelectorProps = {
  onValueChange: (value: string) => void;
};

const LeagueSelector = ({ onValueChange }: LeagueSelectorProps) => {
  return (
    <>
      <h2 className='text-xl'>Select a league</h2>
      <Select
        onValueChange={(value) => {
          onValueChange(value);
        }}
      >
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Pick a league' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='League1 Ontario Premier Division (M)'>
            League1 Ontario Premier Division (M)
          </SelectItem>
          <SelectItem value='League1 Ontario Championship Division (M)'>
            League1 Ontario Championship Division (M)
          </SelectItem>
          <SelectItem value='League2 Ontario (M)'>
            League2 Ontario (M)
          </SelectItem>
          <SelectItem value='L1 Cup (M)'>L1 Cup (M)</SelectItem>
          <SelectItem value='League1 Ontario Premier Division (W)'>
            League1 Ontario Premier Division (W)
          </SelectItem>
          <SelectItem value='League1 Ontario Championship Division (W)'>
            League1 Ontario Championship Division (W)
          </SelectItem>
          <SelectItem value='League2 Ontario (W)'>
            League2 Ontario (W)
          </SelectItem>
          <SelectItem value='L1 Cup (W)'>L1 Cup (W)</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default LeagueSelector;
