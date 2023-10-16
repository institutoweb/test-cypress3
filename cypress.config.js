const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    supportFile:'cypress/comandos/e2e.js',
    fixturesFolder: 'cypress/datos',
    viewportHeight : 600,
    viewportWidth: 1200,
    // tiempo de espera para cada comando cy....
    defaultCommandTimeout : 6000,
    // tiempo de carga de una página
    pageLoadTimeout: 7000, 
    // tiempo de respuesta de una api o request
    requestTimeout: 5000,
    //tiempo de espera en recibir el contenido
    responseTimeout: 4000,
    specPattern:[
      'cypress/e2e/mover.cy.js',
      'cypress/e2e/fecha.cy.js',
      'cypress/e2e/emaras.cy.js'
    ],
   setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env:{
    "miusuario" :"prueba",
    "miclave": "12345"
  }
});
