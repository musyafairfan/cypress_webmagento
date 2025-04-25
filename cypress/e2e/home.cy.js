import homePage from "../support/pageObjects/homePage"

describe('Home Page', () => {
  it('Home Page Content', () => {
    cy.visit('');
    homePage.verifyTitle1();
    homePage.verifySignIn();
    homePage.verifyCreateAccount();
    homePage.verifyContentTitle();
    homePage.verifySearchBox();
    homePage.verifyShowcart();
  })
})