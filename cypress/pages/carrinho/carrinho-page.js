//elementos:

const tituloPagina = '.page-title'
const botaoIrCheckout = '[data-role="proceed-to-checkout"]'


export class CarrinhoPage {
    clicarFinalizarCompra() {
        cy.get(tituloPagina)
            .should('be.visible').then(() => {
                cy.get(botaoIrCheckout)
                .should('be.enabled')
                .click();
            })
    }
}