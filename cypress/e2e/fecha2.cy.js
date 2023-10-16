
describe('Seleccionar fecha', () => {
  it('Selecciona la fecha 30 de julio de 2023', () => {
    cy.visit('https://portal.novahomecareindiana.com/apply-now');

   cy.get('#field-\\:r3\\:').should('be.visible').and('have.text', ''); //dd/mm/aaaa
   cy.get('#field-\\:r3\\:').type("1810-12-28")
   cy.get('[name="phone"]').click()
   cy.get(':nth-child(3) > :nth-child(1) > .chakra-input').click()
   cy.get('#field-\\:r4\\:-feedback').should('be.visible').and('have.text', 'Phone Number is a required field');
   
  });
});
