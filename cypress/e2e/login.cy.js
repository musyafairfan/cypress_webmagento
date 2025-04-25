import loginPage from "../support/pageObjects/loginPage";
import homePage from "../support/pageObjects/homePage";

describe('Login', () => {
    it('Login Success Using Valid Data & Logout', () => {
        cy.visit('');
        loginPage.clickSigIn();
        loginPage.verifyLoginPage1();
        loginPage.verifyLoginPage2();
        loginPage.validEmail();
        loginPage.validPwd();
        loginPage.clickBtnSignIn();
        loginPage.verifySuccessLogin();
        homePage.clickDropdownAccount();
        homePage.clickSignOut();
        homePage.verifyTitle2();
    });
    it('Login Failed Using Inalid Email', () => {
        cy.visit('');
        loginPage.clickSigIn();
        loginPage.verifyLoginPage1();
        loginPage.verifyLoginPage2();
        loginPage.invalidEmail();
        loginPage.validPwd();
        loginPage.clickBtnSignIn();
        loginPage.msgErrorEmail();
    });
    it('Login Failed Using Inalid Password', () => {
        cy.visit('');
        loginPage.clickSigIn();
        loginPage.verifyLoginPage1();
        loginPage.verifyLoginPage2();
        loginPage.validEmail();
        loginPage.invalidPwd();
        loginPage.clickBtnSignIn();
        loginPage.msgErrorEmail();
    });
    it('Login Failed Empty Email', () => {
        cy.visit('');
        loginPage.clickSigIn();
        loginPage.verifyLoginPage1();
        loginPage.verifyLoginPage2();
        loginPage.validPwd();
        loginPage.clickBtnSignIn();
        loginPage.msgEmptyEmail();
    });
    it('Login Failed Empty Password', () => {
        cy.visit('');
        loginPage.clickSigIn();
        loginPage.verifyLoginPage1();
        loginPage.verifyLoginPage2();
        loginPage.validEmail();
        loginPage.clickBtnSignIn();
        loginPage.msgEmptyPwd();
    });
    it('Login Failed Empty Email & Password', () => {
        cy.visit('');
        loginPage.clickSigIn();
        loginPage.verifyLoginPage1();
        loginPage.verifyLoginPage2();
        loginPage.clickBtnSignIn();
        loginPage.msgEmptyEmail();
        loginPage.msgEmptyPwd();
    });
});