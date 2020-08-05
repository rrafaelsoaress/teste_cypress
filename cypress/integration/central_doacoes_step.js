import CentralDoacoesPage from '../support/pages/central_doacoes_pages';

describe('Teste Picpay', () => {
  const validacao = new CentralDoacoesPage()

  it('Validar Instituições', () => {
    validacao.validar_instituicoes()
  });
})
