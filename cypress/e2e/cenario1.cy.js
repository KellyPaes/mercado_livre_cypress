describe('Login no Mercado Livre', () => {
    beforeEach(() => {
        cy.visit('') //URL do Mercado Livre 
    });

    

    // Realiza a pesquisa
    it('Pesquisa um produto, seleciona, adiciona ao carrinho e faz login para comprar', () => {
        // O produto que deseja pesquisar
        cy.get('input[name="as_word"]').type('12 Pares Meias Masculina Cano Alto Grossa Algodão Oferta')  
        cy.get('button[type=submit]').click() 
        cy.contains("12 Pares Meias Masculina Cano Alto Grossa Algodão Oferta").first().click()

        //Seleciona opçoes
        cy.get('.ui-pdp-variations > :nth-child(1)').contains('Preto').click()
        cy.get('.ui-pdp-variations > :nth-child(3)').contains('UN').click()

        // Adiciona o produto ao carrinho
        cy.get('.ui-pdp-actions__container > .andes-button--quiet').click()
     
        // Faz login para realizar a compra
        cy.get('.login-link > .andes-button__content').click()
        cy.get('input[name=user_id]').type(Cypress.env('EMAIL'))  // Seu e-mail
        cy.get('.login-form__submit').click()
        
        //A partir daqui existe uma verificação recaptcha 
        cy.get('input[name=password]').type('SENHA', {log:false})  // Sua senha
        cy.contains('Entrar').click()

        // Volta para a página do produto
        cy.go('back')
    });
     
});