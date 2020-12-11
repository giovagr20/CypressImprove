/// <reference types="cypress" />

context('NopCommerce page', () => {
    beforeEach(() => {
        cy.visit('https://www.nopcommerce.com/en/demo');
})

    it('verifyTitlePage', ()=>{
        const titleText = 'nopCommerce'
        //cy.get('.button-text')
        //.contains('Admin area')
        expect(titleText).to.not.equal(cy.title())
    })

    it('verifyTitlePage', ()=>{
        cy.title().should('eq', 'Store Demo - nopCommerce')
    })

    it('verifyTextMainPage', ()=> {
        cy.get('#ph-title')
        .find('h1')
        .should('have.text', 'nopCommerce Store Demo')
    })
});