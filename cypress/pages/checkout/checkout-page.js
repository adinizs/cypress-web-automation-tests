//elementos: 

const radioButtonCartaoCredito = '#pagarme_creditcard'
const campoNumeroCartao = '[class*="cc_number"]'
const campoNomeCartao = '[class*="cc_owner"]'
const titlePageCheckout = '#opc-shipping_method'
const selectVencimentoCartao = '[name="payment[cc_exp_year]"]'
const campoCvv = '[name="payment[cc_cid]"]'
const selectParcelas = '[name="payment[cc_installments]"]'
const radioButtonBoleto = '#pagarme_billet'
const msgBoleto = '.checkout-text-block'
const radioButtonPix = '#pagarme_pix'
const campoDesconto = '#discount-code'
const opcaoDesconto = '#block-discount-heading'
const botaoAplicarDesconto = '[class="action action-apply"]'
const botaoFinalizarCompra = '#sidebar_place_order'


export class CheckoutPage {
    pagamentoCartaoCredito() {
        cy.get(titlePageCheckout).should('be.visible').then(() => {
            cy.get('.loader > img').should('not.be.visible')
        })
        cy.get(radioButtonCartaoCredito).click().then(() => {
            cy.get(campoNumeroCartao).type("4111111111111111");
            cy.get(campoNomeCartao).type('Desafio Palacio Ferramentas');
            cy.get(selectVencimentoCartao).select('2027');
            cy.get(campoCvv).type('456');
            cy.get(selectParcelas).select(3);
        });
    }

    pagamentoBoleto() {
        cy.get(titlePageCheckout).should('be.visible').then(() => {
            cy.get('.loader > img').should('not.be.visible')
        })
        cy.get(radioButtonBoleto).click();
        cy.get(msgBoleto).should('be.visible')
    }

    pagamentoPix() {
        cy.get(titlePageCheckout).should('be.visible').then(() => {
            cy.get('.loader > img').should('not.be.visible')
        })
        cy.get(radioButtonPix).click();
    }

    aplicaDesconto() {
        cy.get(opcaoDesconto).click().then(() => {
            cy.get(campoDesconto).type('DESCONTO10');
        })
    }

    aplicaDescontoInvalido() {
        cy.get(opcaoDesconto).click().then(() => {
            cy.get(campoDesconto).type('DESCONTO');
            cy.get(botaoAplicarDesconto).click();
            cy.contains('O código do cupom não é válido. Verifique o código e tente novamente.').should('be.visible')
        })
    }

    pagamentoCartaoCreditoDataVencInvalida() {
        cy.get(titlePageCheckout).should('be.visible').then(() => {
            cy.get('.loader > img').should('not.be.visible')
        })
        cy.get(radioButtonCartaoCredito).click().then(() => {
            cy.get(campoNumeroCartao).type("4111111111111111");
            cy.get(campoNomeCartao).type('Desafio Palacio Ferramentas');
            cy.get(selectVencimentoCartao).select('2023');
            cy.get(campoCvv).type('456');
            cy.get(selectParcelas).select(3);
            cy.get(botaoFinalizarCompra)
                .should('be.enabled')
                .click();
        });
    }

    pagamentoCartaoCreditoCVVVazio() {
        cy.get(titlePageCheckout).should('be.visible').then(() => {
            cy.get('.loader > img').should('not.be.visible')
        })
        cy.get(radioButtonCartaoCredito).click().then(() => {
            cy.get(campoNumeroCartao).type("4111111111111111");
            cy.get(campoNomeCartao).type('Desafio Palacio Ferramentas');
            cy.get(selectVencimentoCartao).select('2023');
            cy.get(selectParcelas).select(3);
            cy.get(botaoFinalizarCompra)
                .should('be.enabled')
                .click();
        });
    }

    validaDataVencimentoCartaoInvalida() {
        cy.contains('Data de Validade Inválida')
    }

    validaCvvObrigatorio() {
        cy.contains('Campo obrigatório')
    }
}