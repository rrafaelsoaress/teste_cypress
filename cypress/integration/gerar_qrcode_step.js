import GerarQRPage from '../support/pages/gerar_qrcode_page';

describe('Teste PicPay', () => {
  const qrcode = new GerarQRPage();

  it('Gerar QR Code', () => {
    qrcode.gerar_qrcode()
  })
})