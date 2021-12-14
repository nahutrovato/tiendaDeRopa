describe('Probando secciones internas',()=>{
    before('Cargando pagina inicial',()=>{
        cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category');
    })
    it('Probando checkboxes de Women',()=>{
        cy.get('#layered_category_4').check();
        cy.get('[name="layered_category_8"]').check();
        
        cy.get('#layered_category_4').uncheck();
    })

    it('Ordenando por Product name A to Z',()=>{
        cy.get('#selectProductSort').select('Product Name: A to Z');
    })
})