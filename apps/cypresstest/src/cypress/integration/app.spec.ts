describe('cypresstest', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.get('body').contains('Resources & Tools');
  });
});
