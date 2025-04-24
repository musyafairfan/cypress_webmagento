const email = 'rolando@mailinator.com';
const password = 'ao4Y7L0_szz92FB';
const firstName = 'Rolando';
const lastName = 'Hills';

class loginPage {
    visit() {
        cy.visit('');
    }

    clickSigIn() {
        cy.get('.panel > .header > .authorization-link > a').click()
    }

    confirmLoginPage1() {
        cy.get('.base').should('contain','Customer Login')
    }

    confirmLoginPage2() {
        cy.get('#block-customer-login-heading').should('contain','Registered Customers')
    }

    validEmail() {
        cy.get('#email').type(email)
    }

    invalidEmail() {
        cy.get('#email').type('invalid@gmail.com')
    }

    validPwd() {
        cy.get('#pass').type(password)
    }

    invalidPwd() {
        cy.get('#pass').type('invalid')
    }

    clickBtnSignIn() {
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    }

    confirmSuccessLogin() {
        cy.get('.panel > :nth-child(2) > .greet > .logged-in').should('contain',`Welcome, ${firstName} ${lastName}!`)
    }

    msgErrorEmail() {
        cy.get('#maincontent > div.page.messages > div:nth-child(2) > div > div > div').should('contain','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    }

    msgEmptyEmail() {
        cy.get('#email-error').should('contain','This is a required field.')
    }

    msgEmptyPwd() {
        cy.get('#pass-error').should('contain','This is a required field.')
    }
}

export default new loginPage()