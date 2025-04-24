const base = ['Home Page', 'You are signed out']

class homePage {
    //Before Login
    confirmTitle1() {
        cy.get('.base').should('be.contain', base[0]);
    }

    confirmTitle2() {
        cy.get('.base').should('be.contain', base[1]);
    }

    msgRedirectAfterSignOut() {
        cy.get('.base').should('be.contain', 'You have signed out and will go to our homepage in 5 seconds.');
    }

    confirmSignIn() {
        cy.get('.panel > .header > .authorization-link > a').should('be.visible');
    }

    confrimCreateAccount() {
        cy.get('.panel > .header > :nth-child(3) > a').should('be.visible');
    }

    confirmContentTitle() {
        cy.get('.content-heading > .title').should('be.contain', 'Hot Sellers');
    }

    confirmSearchBox() {
        cy.get('#search').should('be.visible');
    }

    confirmShowcart() {
        cy.get('.showcart').should('be.visible');
    }

    // After Login
    clickDropdownAccount() {
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click();
    }

    clickMyAccount() {
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click();
    }

    clickMyWishlist() {
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .link > a').click();
    }

    clickSignOut() {
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click();
    }
}

export default new homePage()