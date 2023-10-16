/// Test de date picker sin librerías adicionales, solamente HTML

describe('Seleccionar fecha', () => {
  it('Selecciona la fecha 30 de julio de 2023', () => {
    cy.visit('https://www.institutoweb.com.ar/test/fecha1.html');
    cy.get('#fecha').type('2023-05-07')
  });
});
