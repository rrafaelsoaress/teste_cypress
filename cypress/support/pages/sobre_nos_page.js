export default class SobreNosPage {
  acessar_pagina() {
    cy.visit('https://www.picpay.com/site');
    cy.get('.sobrenos').click();
    cy.url().should('eq', 'https://www.picpay.com/site/sobre-nos')
  }

  clicar_botoes() {
    cy.get('.active').click()
    cy.get('[data-target="press"]').click();
    cy.get('[data-target="contact"]').click();
  }

  contato_nok() {
    cy.get('#contact > button').click();
    cy.contains('Campo incorreto ou inválido')
  }
}
