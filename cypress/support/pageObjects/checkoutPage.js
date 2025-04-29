class checkout {

    showcart = '.showcart'
    XS = '#option-label-size-143-item-166'
    S = '#option-label-size-143-item-167'
    M = '#option-label-size-143-item-168'
    L = '#option-label-size-143-item-169'
    XL = '#option-label-size-143-item-170'
    black = '#option-label-color-93-item-49'
    gray = '#option-label-color-93-item-52'
    green = '#option-label-color-93-item-53'

    openShowcart() {
        cy.get(this.showcart).click();
      
        // Cek apakah subtitle mengandung teks "You have no items in your shopping cart."
        cy.get('.subtitle').then(($subtitle) => {
          const text = $subtitle.text();
      
          if (text.includes('You have no items in your shopping cart.')) {
            cy.log('Keranjang kosong, kembali ke halaman sebelumnya');
            cy.get('#btn-minicart-close').click();
          } else {
            cy.log('Keranjang ada isinya, melanjutkan proses');
            cy.get('.product-item-details > .actions > .secondary > .action').click().then(() => {
                cy.get('.action-primary').click();
              });
          }
        });
      }
      
    
    clickProduct() {
        cy.get(':nth-child(3) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    }

    verifyProductTitle() {
        cy.get('.base').should('contain','Argus All-Weather Tank');
    }

    verifyProductPrice() {
        cy.get('#product-price-694 > .price').should('contain','$22.00');
    }

    chooseSizeXS() {
        cy.get(this.XS).click();
    }

    chooseSizeS() {
        cy.get(this.S).click();
    }

    chooseSizeM() {
        cy.get(this.M).click();
    }

    chooseSizeL() {
        cy.get(this.L).click();
    }

    chooseSizeXL() {
        cy.get(this.XL).click();
    }

    chooseColorBlack() { 
        cy.get(this.black).click();
    }

    chooseColorGray() { 
        cy.get(this.gray).click();
    }

    chooseColorGreen() { 
        cy.get(this.green).click();
    }

    clickAddToCart() {
        cy.get('#product-addtocart-button').click();
    }

    qty() {
        cy.get('#qty').clear().type('1');
    }

    verifiySuccessAddToCart() {
        cy.get('.message-success').should('contain','You added Argus All-Weather Tank to your shopping cart.');
    }

    verifyProductonCart() {
        cy.get(this.showcart).click().then(() => {
            cy.get('.minicart-items-wrapper').should('contain','Argus All-Weather Tank');
            cy.get('.minicart-items-wrapper').should('contain','$22.00');
        });
    }

    deleteProductonCart() {
        cy.get('.product-item-details > .actions > .secondary > .action').click().then(() => {
            cy.get('.action-primary').click();
        });
    }

    processCheckout() {
        cy.get('#top-cart-btn-checkout').click().then(() => {
            cy.get(':nth-child(1) > :nth-child(1) > .radio').click(); //shipping method1
            cy.get('.button > span').click(); //btn Next
            cy.get('.payment-method-content > :nth-child(4) > div.primary > .action > span').click(); //btn PlaceOrder
        });
    }

    verifyCheckoutSuccess() {
        cy.get('.base').should('contain','Thank you for your purchase!');
        cy.get('.checkout-success > :nth-child(1)').should('contain','Your order number is:');
        cy.get('.order-number > strong').invoke('text').should((text) => {
          expect(text.trim()).to.match(/^\d+$/); // hanya angka dari awal sampai akhir
        });
    }


}

export default new checkout();