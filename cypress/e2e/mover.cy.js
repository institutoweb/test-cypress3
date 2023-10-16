/// <reference types="Cypress" />

describe('Drag and Drop de un elemento', ()=> {

    it('Muevo y suelto un boton.', ()=>{

        cy.visit('https://institutoweb.com.ar/test/drop_boton.html')  

        const dataTransfer = new DataTransfer();

        // recuadro a mover
        cy.get('#draggable').trigger('dragstart', {dataTransfer})
        // recepción del elemento movido
        cy.get('#textarea1').trigger('drop', {dataTransfer})
        cy.get('#textarea1').trigger('drop', {dataTransfer})
        
       
    });
});