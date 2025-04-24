import homePage from "../support/pageObjects/homePage"

describe('Home Page', () => {
  it('Home Page Content', () => {
    cy.visit('');
    homePage.confirmTitle1();
    homePage.confirmSignIn();
    homePage.confrimCreateAccount();
    homePage.confirmContentTitle();
    homePage.confirmSearchBox();
    homePage.confirmShowcart();
  })
})