describe('Testing Should Not Exist with Contains', () => {

    it('should have a test paragraph', () => {
        cy.visit('http://localhost:8200/')
        cy.get('div').contains('Test Paragraph')
    });

    it('should delete the test paragraph', () => {
        cy.get('#delete-button').click();
        
        // This does works simply because it looks for : 
        //    div :not(script):contains('Test Paragraph'), [type='submit'][value~='Test Paragraph']
        // and of course does not find it
        cy.get('div').contains('Test Paragraph').should('not.exist');

        // This works
        cy.get('div:contains("Test Paragraph")').should('not.exist');
    });
});
