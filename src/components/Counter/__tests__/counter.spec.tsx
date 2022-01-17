import { render, screen } from '@testing-library/react';
import Counter from '../Counter';

const countTestCases = [[0], [1], [6], [73], [1000]];

describe('counter should', () => {
  it.each(countTestCases)('show %d as count', (count) => {
    render(<Counter count={count} />);

    expect(screen.getByText(count)).toBeInTheDocument();
  });
});
