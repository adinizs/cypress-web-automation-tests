//elementos: 

const campoBusca = '#search';
const botaoBuscar = '[title="Pesquisar"]'
const iconeRemoverProdutoCarrinho = '[class="action action-delete"]'
const msgCarrinhoVazio = '[class*="cart-empty"]'

export class HomePage {
    buscarProduto() {
        cy.get(campoBusca)
            .should('be.visible')
            .type('Parafuso Allen')
        cy.get(botaoBuscar).click();
    }

    removerProdutoCarrinho() {
        cy.visit('/checkout/cart/')
        cy.get(iconeRemoverProdutoCarrinho)
            .should('be.visible')
            .click();
        cy.get(msgCarrinhoVazio).should('include.text', 'Você não possui nenhum item em seu carrinho de compras.')
    }
}