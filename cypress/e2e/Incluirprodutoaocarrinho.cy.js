describe('Produto ao carrinho', () => {
    beforeEach(() => {
      cy.visit('https://www.automationexercise.com/login');
      cy.get('[data-qa="login-email"]').type('jrdnvinicius@gmail.com')
      cy.get('[data-qa="login-password"]').type('adm01')
      cy.get('[data-qa="login-button"]').click()

    });
    it('Deve adicionar produtos ao carrinho', () => {
      cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
      cy.get('.modal-title').should('be.visible')
    })
    it('Excluir produto do carrinho', () => {
      cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
      cy.get('.modal-title').should('be.visible')
      cy.get('u').click().should('be.visible', "Blue Top")
      cy.get('.cart_quantity_delete').click().should('be.visible', 'Cart is empty!')
  });
})