
describe('Pruebas pagina inicio',()=>{

    it('Validacion doodle Google',()=>{

        cy.visit('https://www.google.com/');
        cy.get('#hplogo').should('be.visible');

    })

    it('Visibilidad de botones',()=>{

        cy.get('.FPdoLc > center > .gNO89b').should('be.visible');
        cy.get('.FPdoLc > center > .RNmpXc').should('be.visible');

    })    

    it('Contenido de botones',()=>{

        cy.get('.FPdoLc > center > .gNO89b').contains('Buscar con Google');
        cy.get('.FPdoLc > center > .RNmpXc').contains('Me siento con suerte');     

    })
})    