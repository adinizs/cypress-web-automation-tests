//elementos: 

const campoEmail = '[id="email"]'
const campoSenha= '[id="pass"]'
const botaoEntrar = '[id="send2"]'



export class LoginPage {
    loginSuccesso() {
        cy.get('.porto-sicon-box-link > .porto-sicon-box > .porto-sicon-header > p').click();
        cy.get('#btn-cookie-allow').click();
        cy.get(campoEmail).eq(0).type('andersondinizs@gmail.com');
        cy.get(campoSenha).eq(0).type('Teste123');
        cy.get(botaoEntrar).eq(0).click();
    }
}