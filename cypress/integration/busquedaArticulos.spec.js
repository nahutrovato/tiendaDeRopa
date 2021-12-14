import indexPage from '../support/pages/index';
import articlesPage from '../support/pages/articles';

describe('Pruebas sobre pagina principal',()=>{

   before(()=>{
       cy.log('Inicio de pruebas');
       cy.visit('http://automationpractice.com/index.php');
   })
 

   beforeEach(()=>{
         
   })
   
   afterEach(()=>{
        indexPage.clear();
    })

   it('Buscando hat',()=>{
        indexPage.search('hat');
        //articlesPage.verifyArticle('hat');
   })
   it('Buscando T-shirt',()=>{
        indexPage.search('T-shirt');
        //articlesPage.verifyArticle('T-shirt')
    })
    

})