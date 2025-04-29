import loginPage from "../support/pageObjects/loginPage";
import homePage from "../support/pageObjects/homePage";
import checkoutPage from "../support/pageObjects/checkoutPage";

describe('Checkout', () => {
    it('Login Success Using Valid Data & Logout', () => {
        cy.visit('');
        loginPage.clickSigIn();
        loginPage.verifyLoginPage1();
        loginPage.verifyLoginPage2();
        loginPage.validEmail();
        loginPage.validPwd();
        loginPage.clickBtnSignIn();
        loginPage.verifySuccessLogin();
        checkoutPage.openShowcart();
        checkoutPage.clickProduct();
        checkoutPage.verifyProductTitle();
        checkoutPage.verifyProductPrice();
        checkoutPage.chooseSizeXS();
        checkoutPage.chooseColorGray();
        checkoutPage.qty();
        checkoutPage.clickAddToCart();
        checkoutPage.verifiySuccessAddToCart();
        checkoutPage.verifyProductonCart();
        checkoutPage.processCheckout();
        checkoutPage.verifyCheckoutSuccess();
    });
});