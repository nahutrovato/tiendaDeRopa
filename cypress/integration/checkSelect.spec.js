import indexPage from '../support/pages/index';

describe('Testing con selects',()=>{
    
    
    it('Realizando una busqueda de hat',()=>{
        indexPage.search('hat');
    })
    it('Ordenando por In stock',()=>{
        cy.get('#selectProductSort').select('In stock');
    })
})