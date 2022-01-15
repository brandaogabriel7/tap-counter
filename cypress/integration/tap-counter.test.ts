import '@testing-library/cypress/add-commands';

describe('when a user visits the tap counter page', () => {
  beforeEach(() => cy.visit('/'));

  it('the title should be on the screen', () => {
    cy.findByRole('banner')
      .findByRole('heading', { name: /tap counter/i })
      .should('be.visible');
  });

  it('the counter should start on 0', () => {
    cy.findByRole('main').findByText('0').should('be.visible');
  });
});
