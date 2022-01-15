import { render, screen, within } from '@testing-library/react';
import Counter from '../Counter';

const countTestCases = [[0], [1], [6], [73]];

describe('counter should', () => {
  it.each(countTestCases)('show the %d as count', (count) => {
    render(<Counter count={count} />);

    const main = screen.getByRole('main');
    expect(within(main).getByText(count)).toBeInTheDocument();
  });
});
