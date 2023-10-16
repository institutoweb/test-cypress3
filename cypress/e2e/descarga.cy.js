/// <reference types="Cypress" />

describe('Descarga de archivo pdf', ()=> {

    it('Obtengo el archivo.', ()=>{

        cy.request(
            {method : 'GET',
            url : 'https://institutoweb.com.ar/programas/javascript-cypress.pdf',
            encoding: 'binary'})
        .then((response)=>{
            cy.writeFile('./cypress/descargas/temario.pdf',response.body, 'binary')
        })    
        cy.readFile('./cypress/descargas/temario.pdf').should('exist')
        // En javascript:
       // var ruta = 'temario.pdf'
       // window.open(ruta,'_blank')
    });
});