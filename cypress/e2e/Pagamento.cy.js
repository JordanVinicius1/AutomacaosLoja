describe('RealizarBusca', () => {
    beforeEach(() => {
      cy.visit('https://www.automationexercise.com/login');
      cy.get('[data-qa="login-email"]').type('jrdnvinicius@gmail.com')
      cy.get('[data-qa="login-password"]').type('adm01')
      cy.get('[data-qa="login-button"]').click()
      cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
      cy.get('.modal-title').should('be.visible')
    });

    it('Validação procuto no carrinho', () => {
        cy.get('u').click().should('be.visible', "Blue Top")
        cy.get('.col-sm-6 > .btn').click()
        cy.get(':nth-child(4) > .heading').should('be.visible', "Blue Top")
    });
    



})