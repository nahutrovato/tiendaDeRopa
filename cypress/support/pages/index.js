class indexPage{

    search = (elemento) =>{
      cy.fixture('index.json').then((locators)=>{
          cy.get(locators.searchInput).type(elemento);
          cy.get(locators.searchButton).click();
      })
    }
    clear = () =>{
        cy.fixture('index.json',(locators)=>{
            cy.get(locators.searchInput).clear();
        })
        cy.get('#search_query_top').clear();
    }

}

export default new indexPage();

