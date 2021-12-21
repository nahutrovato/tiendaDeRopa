import indexPage from '../support/pages/index';

describe('Nuevo test',()=>{

    it('Entrando al sitio',()=>{
        cy.visit('/');
    })
    it('Busqueda del usuario',()=>{
       let busqueda = prompt('Que desea buscar?');
       cy.search(busqueda);
    })
})