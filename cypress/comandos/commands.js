Cypress.Commands.add('mi_login',() => { 
     
    // cy.get(':nth-child(1) > [width="40"] > input').type("prueba")
       //cy.get('#mid_left > form > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]').type("prueba")
       cy.get('[name="usuario"]').type(Cypress.env('miusuario'))
       cy.get('[name="clave"]').type(Cypress.env('miclave'))  
       cy.get('#btnIngresar').click()  

})

Cypress.Commands.add('mi_consorcio',() => { 
              // Selecciono el consorcio con el que voy a trabajar
              cy.get('[onmouseover="sorter.hover(2,1)"] > .evenselected > p > a > font').click()
})
