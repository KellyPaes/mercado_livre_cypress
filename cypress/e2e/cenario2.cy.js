describe('Login no Mercado Livre', () => {
    beforeEach(() => {
        cy.visit('https://www.mercadolivre.com/jms/mlb/lgz/msl/login/H4sIAAAAAAAEAzWNSw6DMAxE7-I1gn2WvUhkgoGoDkGOIVQVd69TieV83swXOC9x8_rZCRzQtXMMUaGDnVHnLMnHyYLEZpWo9MixVVAwkZIUcN82tND0IoPa1IxcyEp46OpnztW8_5d5sXi6jNuQfaXxjNTSh1iyiVV1L24Yaq19Igk4ZY6nUB9y6kcZ4O4MKOpVMLzBqRx0_wBJfknyzgAAAA/user') //URL do Mercado Livre 
    });
    it('Tenta fazer login com e-mail e senha incorretos', () => { 
        // Faz login incorreto
        cy.get('[data-testid="user_id"]')
        cy.get('input[name=user_id]').type('teste123@gmail.com')  // Email
        cy.get('.login-form__submit').click()
        cy.get('input[name=password]').type('123456',{log:false})  //  Senha
        cy.contains('Iniciar sessão').click()

        })
  })