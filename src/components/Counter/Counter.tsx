const Counter = ({ count }: ICounterProps) => <main>{count}</main>;

interface ICounterProps {
  count: number;
}

export default Counter;
