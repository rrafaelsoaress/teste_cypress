import DuvidasPage from '../support/pages/duvidas_page';

describe('Teste PicPay', () => {
  const duvidas = new DuvidasPage();

  it('Visitar Dúvidas Frequentes', () => {
    duvidas.acessar_pagina();
  });

  it('Ver perguntas', () => {
    duvidas.ver_perguntas();
  });
})