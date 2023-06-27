//elementos: 

const botaoAdicionarProdutoCarrinho = '#product-addtocart-button'
const msgProdutoAdicionado = '[class="page messages"]'
const botaoMiniCart = '[class*="minicart-icon"]'
const botaoAcessarCarrinho = '#top-cart-btn-checkout'

export class PdpPage {
    clicarAdicionarProdutoCarrinho() {
        cy.get(botaoAdicionarProdutoCarrinho)
            .should('be.visible')
            .click().then(() => {
                cy.get(msgProdutoAdicionado)
                    .should('contain.text', 'Você adicionou')
            })
    }

    acessarCarrinho() {
        cy.get(botaoMiniCart).click().then(() => {
            cy.get(botaoAcessarCarrinho).click();
        });
    }
}