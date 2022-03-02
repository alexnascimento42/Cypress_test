describe('validate Tests',() =>{ // onde os testes serão incluidos

  it('Deve inserir uma conta',()=>{ //nome do teste (deve inserir uma conta)
    cy.visit('http://barrigareact.wcaquino.me/') //site o qual deverá abrir os testes

    cy.get('[data-test=email]').type('alexnascimento42@yahoo.com.br') //incluir email
    cy.get('[data-test=passwd]').type('195320') //incluir a senha
    cy.get('.btn').click() // clicar no botão para entrar

    cy.get('.toast').should('be.visible') // verificar mensagem da pagina  seja bem vindo
    .and('contain','Bem vindo, alexnascimento42!') // informa a mensagem

    cy.get('[data-test=menu-settings] > .fas').click() // acessar o menu configurações e clicar
    cy.get('[href="/contas"]').click()  //acessar menu contas e clicar

    cy.get('[data-test=nome]').type('Conta nova') // incluir nome da conta
    cy.get('.btn').click() //clicar para incluir nome da conta
    
    cy.get('.toast-message').should('be.visible')
    .and('contain','Conta inserida com sucesso!') // verificar mensagem de inclusão de conta


    

  })

})