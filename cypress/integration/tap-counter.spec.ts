import '@testing-library/cypress/add-commands';

const findMain = () => cy.findByRole('main');

const findCounter = (count: number) =>
  findMain().findByRole('heading', { name: count.toString() });

const findTapButton = () => findMain().findByRole('button', { name: /tap/i });

const findResetButton = () =>
  findMain().findByRole('button', { name: /reset/i });

const tapButtonClicksTestCases = [[1], [2], [7], [21]];

describe('when a user visits the tap counter page', () => {
  beforeEach(() => cy.visit('/'));

  it('the title should be on the screen', () => {
    cy.findByRole('banner')
      .findByRole('heading', { name: /tap counter/i })
      .should('be.visible');
  });

  it('the counter should start on 0 and reset button should be disabled', () => {
    findCounter(0).should('be.visible');
    findResetButton().should('be.disabled');
  });

  tapButtonClicksTestCases.forEach((testCase) => {
    const [clicks] = testCase;
    it(`clicking the tap button ${clicks} time(s) should increase the count to ${clicks}`, () => {
      for (let i = 0; i < clicks; i++) {
        findTapButton().click();
      }

      findCounter(clicks).should('be.visible');
    });

    it(`clicking the reset button when the count is ${clicks} should set the counter to 0 and disable reset button`, () => {
      for (let i = 0; i < clicks; i++) {
        findTapButton().click();
      }

      findResetButton().click();

      findCounter(0).should('be.visible');
      findResetButton().should('be.disabled');
    });
  });
});
