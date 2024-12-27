describe('Concluir compra na loja', () => {
    it('Concluir compra na loja', () => {
        cy.visit('https://www.automationexercise.com/login');
        cy.get('[data-qa="login-email"]').type('jrdnvinicius@gmail.com')
        cy.get('[data-qa="login-password"]').type('adm01')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-title').should('be.visible')
        cy.get('u').click().should('be.visible', "Blue Top")
        cy.get('.col-sm-6 > .btn').click()
        cy.get(':nth-child(4) > .heading').should('be.visible', "Blue Top")
        cy.get(':nth-child(7) > .btn').click()
        cy.get('[data-qa="name-on-card"]').type('Name Card Teste')
        cy.get('[data-qa="card-number"]').type('5531 4058 7968 1821')
        cy.get('[data-qa="cvc"]').type('321')
        cy.get('[data-qa="expiry-month"]').type('10')
        cy.get('[data-qa="expiry-year"]').type('2026')
        cy.get('[data-qa="pay-button"]').click()
        cy.get('.col-sm-9').should('be.visible', 'Congratulations! Your order has been confirmed!')
    });

})