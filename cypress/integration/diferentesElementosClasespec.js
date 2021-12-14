describe('Probando diferentes elementos de una misma clase',()=>{
    before('Ingresando al sitio',()=>{
        cy.log('Inicio de pruebas');
        cy.visit('http://automationpractice.com/index.php')
    })
    it('Primer elemento de la clase, WOMEN',()=>{
        cy.get('[class=sf-with-ul]').eq(0).click();
        
    })
    it('Cuarto elemento de clase, DRESSES',()=>{
        cy.get('[class=sf-with-ul]').eq(3).click();
    })
    it('Realizando busqueda de Hat',()=>{
        cy.get('[name="search_query"]').type('T-shirt');
        cy.get('[name="submit_search"]').click();
    })
    it('Accediendo a la tercera imagen',()=>{
        cy.get('.last-in-line.first-item-of-tablet-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click();
    })
})