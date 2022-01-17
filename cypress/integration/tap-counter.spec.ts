import '@testing-library/cypress/add-commands';

const findMain = () => cy.findByRole('main');

const findResetButton = () =>
  findMain().findByRole('button', { name: /reset/i });

const findTapButton = () => findMain().findByRole('button', { name: /tap/i });

const tapButtonClicksTestCases = [[1], [2], [7], [21]];

describe('when a user visits the tap counter page', () => {
  beforeEach(() => cy.visit('/'));

  it('the title should be on the screen', () => {
    cy.findByRole('banner')
      .findByRole('heading', { name: /tap counter/i })
      .should('be.visible');
  });

  it('the counter should start on 0 and reset button should be disabled', () => {
    findMain().findByText('0').should('be.visible');
    findResetButton().should('be.disabled');
  });

  tapButtonClicksTestCases.forEach((testCase) => {
    const [clicks] = testCase;
    it(`clicking the tap button ${clicks} time(s) should increase the count to ${clicks}`, () => {
      for (let i = 0; i < clicks; i++) {
        findTapButton().click();
      }

      findMain().findByText(clicks).should('be.visible');
    });

    it(`clicking the reset button when the count is ${clicks} should set the counter to 0 and disable reset button`, () => {
      for (let i = 0; i < clicks; i++) {
        findTapButton().click();
      }

      findResetButton().click();

      findMain().findByText(0).should('be.visible');
      findResetButton().should('be.disabled');
    });
  });
});
