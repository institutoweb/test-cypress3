/// <reference types="Cypress" />

describe('Test Emaras Web', ()=> {

    beforeEach('Conexión a Emaras.com.ar', ()=>{
            cy.visit('https://www.emaras.com.ar')
         //   cy.wait(5000)
           
    })

    it('Escribo un nuevo domicilio de la Adm.', ()=>{
  
        cy.mi_login() // ingresando con usuario y clave
        cy.mi_consorcio() // seleccionando el consorcio a utilizar

        // seleccion de "Usuarios" en el menu
        cy.get('[style="z-index: 93;"] > [href="#"] > font').trigger('mouseover')
        // Click en el submenu "Datos de la Administración"
        cy.get('#tp_menu > ul > li:nth-child(8) > ul > li:nth-child(6) > font > a').click()
       // Pantalla de datos: selecciono todo el cuadro de texto "Domicilio"
        cy.get(':nth-child(5) > [width="38%"] > font > input').type('{selectall}')
        //cy.get(':nth-child(5) > [width="38%"] > font > input').clear().type('Rivadavia 5050')
        cy.get(':nth-child(5) > [width="38%"] > font > input').type('Rivadavia 5050')
        cy.get(':nth-child(2) > input').click()
        cy.get('[align="right"] > :nth-child(1) > a > font').click()
    })

    it('Test de la correcta escritura del cambio de domicilio de la Adm.', ()=>{

        cy.mi_login() // ingresando con usuario y clave
        cy.mi_consorcio() // seleccionando el consorcio a utilizar

         // Seleccionar la opción de la Adm en el menú
         cy.get('[style="z-index: 93;"] > [href="#"] > font').trigger('mouseover')
         cy.get('#tp_menu > ul > li:nth-child(8) > ul > li:nth-child(6) > font > a').click()
        
         // Aserción: leer lo que dice el cuadro de texto del domicilio
         cy.get(':nth-child(5) > [width="38%"] > font > input')
         .invoke('val')
         .should('eq','Rivadavia 5050')


         cy.get('[align="right"] > :nth-child(1) > a > font').click()
     })

     after('cierro el test', ()=>{
        cy.end()
     })

})
