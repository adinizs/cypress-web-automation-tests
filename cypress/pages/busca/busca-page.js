//elementos: 

const itensDeBusca = '[class="item product product-item"]';


export class BuscaPage {
    clicarPrimeiroItemBusca(){
        cy.get(itensDeBusca)
            .eq(0)
            .should('be.visible')
            .click();
    }
}