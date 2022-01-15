import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from './App';

describe('tap counter should', () => {
  beforeEach(() => render(<App />));

  it('render the title', () => {
    expect(
      screen.getByRole('heading', { name: /tap counter/i })
    ).toBeInTheDocument();
  });

  it('render the counter starting on 0', () => {
    const main = screen.getByRole('main');
    expect(within(main).getByText('0')).toBeInTheDocument();
  });
});
