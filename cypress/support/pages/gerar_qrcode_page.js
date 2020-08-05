export default class GerarQRPage {
  gerar_qrcode() {
    cy.visit('https://live.picpay.com/');
    cy.get('#text').type('teste');
    cy.get('#btSubmit').click();
  }
}