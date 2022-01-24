import { Typography } from '@mui/material';

const Counter = ({ count = 0 }: ICounterProps) => (
  <>
    <Typography variant="h2">{count}</Typography>
  </>
);

interface ICounterProps {
  count?: number;
}

export default Counter;
