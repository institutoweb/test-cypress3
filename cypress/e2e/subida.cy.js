/// <reference types="Cypress" />

describe('Subida de Archivo txt', ()=> {

    it('Subir el archivo.', ()=>{

        cy.visit('https://institutoweb.com.ar/test/subida.html')    
        
        cy.fixture('carpetas.txt')
        .then((contenido) => {
            cy.get('#archivo').selectFile('./cypress/fixtures/carpetas.txt')
        })

        cy.get('button').click()
        cy.get('.mensaje-exito').should('contain','Archivo subido correctamente')

    });
});