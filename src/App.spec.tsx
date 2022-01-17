import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

const buttonClicksTestCases = [[1], [2], [21], [30]];
describe('tap counter should', () => {
  beforeEach(() => render(<App />));

  it('render the title', () => {
    expect(
      screen.getByRole('heading', { name: /tap counter/i })
    ).toBeInTheDocument();
  });

  it('render a counter starting on 0', () => {
    expect(screen.getByText(0)).toBeInTheDocument();
  });

  it('render a tap button', () => {
    expect(screen.getByRole('button', { name: /tap/i })).toBeInTheDocument();
  });

  it('render a reset button', () => {
    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
  });

  it.each(buttonClicksTestCases)(
    'increase the count by %d when the tap button is clicked',
    (clicks) => {
      expect(screen.getByText(0)).toBeInTheDocument();

      const tapButton = screen.getByRole('button', { name: /tap/i });
      for (let i = 0; i < clicks; i++) {
        userEvent.click(tapButton);
      }

      expect(screen.getByText(clicks)).toBeInTheDocument();
    }
  );

  it.each(buttonClicksTestCases)(
    'set count from %d to 0 when reset button is clicked',
    (clicks) => {
      const tapButton = screen.getByRole('button', { name: /tap/i });

      for (let i = 0; i < clicks; i++) {
        userEvent.click(tapButton);
      }

      const resetButton = screen.getByRole('button', { name: /reset/i });

      userEvent.click(resetButton);

      expect(screen.getByText(0)).toBeInTheDocument();
    }
  );
});
