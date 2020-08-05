export default class DuvidasPage {
  acessar_pagina() {
    cy.visit('https://www.picpay.com/site');
    cy.get('.col-md-10 > [href="/site/faq"]').click()
    cy.url().should('eq', 'https://www.picpay.com/site/faq')
  }

  ver_perguntas() {
    this.acessar_pagina()
    cy.get(':nth-child(27) > h4').click();
    cy.get(':nth-child(27) > h4').click();
    cy.get(':nth-child(28) > h4').click();
    cy.get(':nth-child(28) > h4').click();
    cy.get(':nth-child(29) > h4').click();
    cy.get(':nth-child(29) > h4').click();
    cy.get(':nth-child(30) > h4').click();
    cy.get(':nth-child(30) > h4').click();
    cy.get(':nth-child(31) > h4').click();
    cy.get(':nth-child(31) > h4').click();
    cy.get(':nth-child(32) > h4').click();
    cy.get(':nth-child(32) > h4').click();
    cy.get(':nth-child(33) > h4').click();
    cy.get(':nth-child(33) > h4').click();
    cy.get(':nth-child(34) > h4').click();
    cy.get(':nth-child(34) > h4').click();
  }
}