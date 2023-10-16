/// Test de date picker con librerías adicionales, en este ej: boostrap

describe('Date Picker Test', () => {
    it('Seleccionar una fecha en el date picker', () => {
      cy.visit('https://www.institutoweb.com.ar/test/fecha.html');
  
      // Hacer clic en el campo de entrada del date picker
      cy.get('.datepicker-input').click();
  
      // Seleccionar la fecha 2023-07-14 en el date picker
      cy.get('.datepicker-dropdown')
      .find('.datepicker-days tbody tr:nth-child(3) td:nth-child(3)')
      .click();
  
      // Verificar que la fecha seleccionada se haya establecido correctamente en el campo de entrada
      cy.get('.datepicker-input').should('have.value', '2023-10-10');
    });
  });
  
