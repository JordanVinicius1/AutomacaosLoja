describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com/login');
  });
  it('Login com sucesso', () => {
    cy.url()
    cy.get('[data-qa="login-email"]').type('jrdnvinicius@gmail.com')
    cy.get('[data-qa="login-password"]').type('adm01')
    cy.get('[data-qa="login-button"]').click()
    cy.get('.nav > :nth-child(10)').should('be.visible');
  })
  it('Login email incorreto', () => {
    cy.url()
    cy.get('[data-qa="login-email"]').type('teste@gmail.com')
    cy.get('[data-qa="login-password"]').type('adm01')
    cy.get('[data-qa="login-button"]').click()
    cy.get('.login-form > form > p').should('be.visible');
  });
  it('Login senha incorreto', () => {
    cy.url()
    cy.get('[data-qa="login-email"]').type('jrdnvinicius@gmail.com')
    cy.get('[data-qa="login-password"]').type('adm0')
    cy.get('[data-qa="login-button"]').click()
    cy.get('.login-form > form > p').should('be.visible');
  });
  it('Logout com sucessso', () => {
    cy.url()
    cy.get('[data-qa="login-email"]').type('jrdnvinicius@gmail.com')
    cy.get('[data-qa="login-password"]').type('adm01')
    cy.get('[data-qa="login-button"]').click()
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.login-form > h2').should('be.visible');
  });
})