describe('sigup-error', () => {
    it('sigup-error', () => {
      cy.visit('https://adopet-tau.vercel.app/');
      cy.get('[href="/sigup"]').click();
      cy.get('button').click();
      cy.contains('É necessário informar seu nome').should('be.visible');
      cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('Crie uma senha').should('be.visible');
      cy.contains('Repita a senha criada acima').should('be.visible');
    })
  })