describe('Probando asserts',()=>{
    it('Dos numeros deben ser iguales',()=>{
        expect(1==1).to.equal(true);
    })
    it('Verificando suma de dos numeros',()=>{
        expect(1+1).to.equal(2);
    })
    it('Verificando resta de dos numeros',()=>{
        expect(2-2).to.equal(0);
    })
    it('Verificando que dos numeros no sean iguales',()=>{
        expect(1==2).to.equal(false);
    })
    it('Probando try-catch',()=>{
        try{
            expect(1==2).to.equal(true);
        }catch(e){
            cy.log('La prueba fallo');
        }
    })
    it('Segundo argumento en expect en caso de fallo',()=>{
        expect(1==2,'El test fallo, se esperaba un true').to.equal(true);
    })
})