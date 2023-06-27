import { BuscaPage } from "../../pages/busca/busca-page";
import { CarrinhoPage } from "../../pages/carrinho/carrinho-page";
import { CheckoutPage } from "../../pages/checkout/checkout-page";
import { HomePage } from "../../pages/home/home-page";
import { LoginPage } from "../../pages/login/login-page"
import { PdpPage } from "../../pages/pdp/pdp-page";
const login = new LoginPage();
const home = new HomePage();
const busca = new BuscaPage();
const pdp = new PdpPage();
const carrinho = new CarrinhoPage();
const checkout = new CheckoutPage();


describe('Cenários da suite de testes "Pagamentos"', { tags: ['regression', 'checkout'] }, () => {
    beforeEach('Visitar site', () => {
        cy.visit("/");
    })
    afterEach(() => {
        home.removerProdutoCarrinho();
    })
    it('Pagamento com cartão de crédito', () => {
        login.loginSuccesso();
        home.buscarProduto();
        busca.clicarPrimeiroItemBusca();
        pdp.clicarAdicionarProdutoCarrinho();
        pdp.acessarCarrinho();
        carrinho.clicarFinalizarCompra();
        checkout.pagamentoCartaoCredito();
    });

    it('Pagamento com boleto', () => {
        login.loginSuccesso();
        home.buscarProduto();
        busca.clicarPrimeiroItemBusca();
        pdp.clicarAdicionarProdutoCarrinho();
        pdp.acessarCarrinho();
        carrinho.clicarFinalizarCompra();
        checkout.pagamentoBoleto();
    });

    it('Pagamento com pix', () => {
        login.loginSuccesso();
        home.buscarProduto();
        busca.clicarPrimeiroItemBusca();
        pdp.clicarAdicionarProdutoCarrinho();
        pdp.acessarCarrinho();
        carrinho.clicarFinalizarCompra();
        checkout.pagamentoPix();
    });

    it('Pagamento com cupom de desconto', () => {
        login.loginSuccesso();
        home.buscarProduto();
        busca.clicarPrimeiroItemBusca();
        pdp.clicarAdicionarProdutoCarrinho();
        pdp.acessarCarrinho();
        carrinho.clicarFinalizarCompra();
        checkout.pagamentoBoleto();
        checkout.aplicaDesconto();
    });

    it('Pagamento com cupom de desconto inválido', () => {
        login.loginSuccesso();
        home.buscarProduto();
        busca.clicarPrimeiroItemBusca();
        pdp.clicarAdicionarProdutoCarrinho();
        pdp.acessarCarrinho();
        carrinho.clicarFinalizarCompra();
        checkout.pagamentoBoleto();
        checkout.aplicaDescontoInvalido();
    });

    it('Pagamento com cartão de crédito (Data Vecimento Invalida)', () => {
        login.loginSuccesso();
        home.buscarProduto();
        busca.clicarPrimeiroItemBusca();
        pdp.clicarAdicionarProdutoCarrinho();
        pdp.acessarCarrinho();
        carrinho.clicarFinalizarCompra();
        checkout.pagamentoCartaoCreditoDataVencInvalida();
        checkout.validaDataVencimentoCartaoInvalida();
    });

    it('Pagamento com cartão de crédito (CVV vazio)', () => {
        login.loginSuccesso();
        home.buscarProduto();
        busca.clicarPrimeiroItemBusca();
        pdp.clicarAdicionarProdutoCarrinho();
        pdp.acessarCarrinho();
        carrinho.clicarFinalizarCompra();
        checkout.pagamentoCartaoCreditoCVVVazio();
        checkout.validaCvvObrigatorio();
    });
})