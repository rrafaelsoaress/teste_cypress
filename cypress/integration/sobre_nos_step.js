import SobreNosPage from '../support/pages/sobre_nos_page';

describe('Teste PicPay', () => {
  const sobre_nos = new SobreNosPage();

  it('Acessar a pagina Sobre Nós', () => {
      sobre_nos.acessar_pagina();
  });

  it('Clicar nos botões, Sobre, Imprensa e Contato', () => {
      sobre_nos.clicar_botoes();
  })

  it('Enviar mensagem sem nenhum dado', () => {
      sobre_nos.contato_nok();
  })
})