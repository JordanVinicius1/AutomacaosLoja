describe('RealizarBusca', () => {
    beforeEach(() => {
      cy.visit('https://www.automationexercise.com/login');
      cy.get('[data-qa="login-email"]').type('jrdnvinicius@gmail.com')
      cy.get('[data-qa="login-password"]').type('adm01')
      cy.get('[data-qa="login-button"]').click()
      cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    });

    it('Busca por produto existente ', () => {
        cy.url()
        cy.get('#search_product').click().type('Little Girls Mr. Panda Shirt')
        cy.get('#submit_search').click()
        .should('be.visible', 'Little Girls Mr. Panda Shirt')
    });
    it('Buscar por categoria Woman-Dress', () => {
        cy.url()
        cy.get('a[href="#Women"]').click();
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
        cy.get('.features_items').contains('Dress').should('exist')
    });
    it('Buscar por categoria Woman-Tops', () => {
        cy.url()
        cy.get('a[href="#Women"]').click();
        cy.get('#Women > .panel-body > ul > :nth-child(2) > a').click()
        cy.get('.features_items').contains('Tops').should('exist')
    });
    it('Buscar por categoria Woman-saree', () => {
        cy.url()
        cy.get('a[href="#Women"]').click();
        cy.get('.panel-body > ul > :nth-child(3) > a').click()
        cy.get('.features_items').contains('Saree').should('exist')
    });
    it('Buscar por categoria Men-Tshirts', () => {
        cy.url()
        cy.get('a[href="#Men"]').click();
        cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click()
        cy.get('.features_items').contains('Tshirts').should('exist')
    });
    it('Buscar por categoria Men-jeans', () => {
        cy.url()
        cy.get('a[href="#Men"]').click();
        cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click()
        cy.get('.features_items').contains('Jeans').should('exist')
    });
    it('Buscar por categoria Kids-Dress', () => {
        cy.url()
        cy.get('a[href="#Kids"]').click();
        cy.get('#Kids > .panel-body > ul > :nth-child(1) > a').click()
        cy.get('.features_items').contains('Dress').should('exist')
    });
    it('Buscar por categoria Kids-Tops e shirts', () => {
        cy.url()
        cy.get('a[href="#Kids"]').click();
        cy.get('#Kids > .panel-body > ul > :nth-child(2) > a').click()
        cy.get('.features_items').contains('Tops & Shirts').should('exist')
    });
})