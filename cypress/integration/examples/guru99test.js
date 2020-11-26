/// <reference types="cypress" />

describe('Failed in nopCommerce Title', ()=> {

    it('verifyTitlePage', ()=>{
        cy.visit('https://www.nopcommerce.com/en/demo')
        const titleText = 'nopCommerce'
        //cy.get('.button-text')
        //.contains('Admin area')
        expect(titleText).to.not.equal(cy.title())
    })
})

describe('Success in nopCommerce Title', ()=> {

    it('verifyTitlePage', ()=>{
        cy.visit('https://www.nopcommerce.com/en/demo')
        cy.title().should('eq', 'Store Demo - nopCommerce')
    })
})


describe('Verify text present in page', ()=>{

    it('verifyTextMainPage', ()=> {
        cy.visit('https://www.nopcommerce.com/en/demo')
        cy.get('#ph-title')
        .find('h1')
        .should('have.text', 'nopCommerce Store Demo')
    })
})