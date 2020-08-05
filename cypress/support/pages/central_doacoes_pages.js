export default class CentralDoacoesPage {
  acessar_pagina() {
    cy.visit('https://centraldedoacoes.picpay.com/')
  };

  validar_instituicoes() {
    this.acessar_pagina();
    cy.get('.slick-current > :nth-child(1) > [style="width: 100%; display: inline-block;"] > .slick-entidades > a > img').click();
    cy.contains('Amigos do Bem');
    cy.get('.stop-video > img').click()
    cy.get('[data-slick-index="1"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > .slick-entidades > a > img').click();
    cy.contains('Central Única das Favelas');
    cy.get('.stop-video2 > img').click();
    cy.get('[data-slick-index="2"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > .slick-entidades > a > img').click();
    cy.contains('Instituto Ronald McDonald')
    cy.get('.stop-video3 > img').click();
    cy.get('[data-slick-index="3"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > .slick-entidades > a > img').click();
    cy.contains('Médicos sem Fronteiras');
    cy.get('.stop-video4 > img').click();
    cy.get('[data-slick-index="4"] > :nth-child(1) > [style="width: 100%; display: inline-block;"] > .slick-entidades > a > img').click();
    cy.contains('Visão Mundial');
    cy.get('.stop-video5 > img').click();
  };
}