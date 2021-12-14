beforeEach(()=>{
    cy.visit('http://zero.webappsecurity.com/');
 
})

describe('Prueba sobre pagina principal',()=>{
    
    it('Prueba carga imagen inicio',()=>{
        cy.get('#carousel').should('be.visible');
    })

})


describe('E2E Transferencia de fondos',()=>{

    it('Prueba login',()=>{

        cy.get('#signin_button').click();
        
        cy.get('#user_login').type('username');
        cy.get('#user_password').type('password');

        cy.get('.btn').click();

        cy.get('#transfer_funds_tab > a').click();
        
        cy.get('#tf_fromAccountId').select(3);
        cy.get('#tf_toAccountId').select(5);
        cy.get('#tf_amount').type('200');
        cy.get('#tf_description').type('Test automatizado');
        cy.get('#btn_submit').click();
        cy.get('#btn_submit').click();

        cy.get('.alert').should('contain.text', 'You successfully submitted your transaction.');
        cy.get('.board-content').should('be.visible');

    }) 

})
