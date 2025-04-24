import registerPage from "../support/pageObjects/registerPage";

describe('Create Account', () => {
    it('Register Success Using Valid Data', () => {
        cy.visit('')
        registerPage.clickRegister();
        registerPage.firstname();
        registerPage.lastname();
        registerPage.email();
        registerPage.pwd();
        registerPage.confirmPwd();
        registerPage.clickCreateAccount();
        registerPage.msgSuccessRegister();
    })
    it('Register Failed Using Already Data', () => {
        cy.visit('')
        registerPage.clickRegister();
        registerPage.firstname();
        registerPage.lastname();
        registerPage.email();
        registerPage.pwd();
        registerPage.confirmPwd();
        registerPage.clickCreateAccount();
        registerPage.msgErrorRegister_alreadyAccount();
    })
    it('Register Failed with Empty Firstname', ()=> {
        cy.visit('')
        registerPage.clickRegister();
        registerPage.lastname();
        registerPage.email();
        registerPage.pwd();
        registerPage.confirmPwd();
        registerPage.clickCreateAccount();
        registerPage.msgFirstnameError();
    })
    it('Register Failed with Empty Lastname', () => {
        cy.visit('')
        registerPage.clickRegister();
        registerPage.firstname();
        registerPage.email();
        registerPage.pwd();
        registerPage.confirmPwd();
        registerPage.clickCreateAccount();
        registerPage.msgLastnameError();
    })
    it('Register Failed with Empty Email Address', () => {
        cy.visit('')
        registerPage.clickRegister();
        registerPage.firstname();
        registerPage.lastname();
        registerPage.pwd();
        registerPage.confirmPwd();
        registerPage.clickCreateAccount();
        registerPage.msgEmailError();
    })
    it('Register Failed with Invalid Format of Email', () => {
        cy.visit('')
        registerPage.clickRegister();
        registerPage.firstname();
        registerPage.lastname();
        registerPage.invalidemail();
        registerPage.pwd();
        registerPage.confirmPwd();
        registerPage.clickCreateAccount();
        registerPage.msgEmailInvalid();
    })
    it('Register Failed with Empty Password', () => {
        cy.visit('')
        registerPage.clickRegister();
        registerPage.firstname();
        registerPage.lastname();
        registerPage.email();
        registerPage.confirmPwd();
        registerPage.clickCreateAccount();
        registerPage.msgPwdError();
    })
    it('Register Failed with Empty Confirm Password', () => {
        cy.visit('')
        registerPage.clickRegister();
        registerPage.firstname();
        registerPage.lastname();
        registerPage.email();
        registerPage.pwd();
        registerPage.clickCreateAccount();
        registerPage.msgConfirmPwdError();
    })
    it('Register Failed with Empty All Field', () => {
        cy.visit('')
        registerPage.clickRegister();
        registerPage.clickCreateAccount();
        registerPage.msgFirstnameError();
        registerPage.msgLastnameError();
        registerPage.msgEmailError();
        registerPage.msgPwdError();
        registerPage.msgConfirmPwdError();
    })
})