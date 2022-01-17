import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

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

  it('increase the count when the tap button is clicked', () => {
    expect(screen.getByText(0)).toBeInTheDocument();

    const tapButton = screen.getByRole('button', { name: /tap/i });

    userEvent.click(tapButton);

    expect(screen.getByText(1)).toBeInTheDocument();
  });
});
