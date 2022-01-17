import '@testing-library/cypress/add-commands';

const findMain = () => {
  return cy.findByRole('main');
};

const tapButtonClicksTestCases = [[1], [2], [7], [21]];

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

  tapButtonClicksTestCases.forEach((testCase) => {
    const [clicks] = testCase;
    it(`tapping the counter ${clicks} should increase the count to ${clicks}`, () => {
      for (let i = 0; i < clicks; i++) {
        findMain().findByRole('button', { name: /tap/i }).click();
      }

      findMain().findByText(clicks).should('be.visible');
    });
  });
});
