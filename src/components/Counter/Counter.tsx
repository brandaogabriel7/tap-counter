const Counter = ({ count = 0 }: ICounterProps) => <>{count}</>;

interface ICounterProps {
  count?: number;
}

export default Counter;
