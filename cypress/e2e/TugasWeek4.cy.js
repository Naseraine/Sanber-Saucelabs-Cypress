describe('Testing Add To Cart 2 Product', () => {

  it('Visit Website Page', () => {
    cy.clearAllLocalStorage()
    cy.visit('https://saucedemo.com/')
  })
  
  it('Login Website Page', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url('include','/inventory.html')

    //assertion
    cy.get('[data-test="title"]').should('exist')
    cy.get('[data-test="product-sort-container"]').should('be.visible')
  })
  
  it('Product page - add product to cart', () => {
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

    //assertion
    cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').should('exist')
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').should('exist')
    cy.get('[data-test="shopping-cart-badge"]').should('be.visible')
  })
  
  it('Check Shopping Cart- Your Cart Page', () => {
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.url('include','/cart.html')

    //assertion
    cy.get('[data-test="title"]').should('exist')
    cy.get('[data-test="inventory-item"]').should('exist')
    cy.get('[data-test="cart-desc-label"]').should('be.visible')
  })


})

describe('Testing Checkout 1 Product', () => {
  it('Visit Website Page', () => {
      cy.clearAllLocalStorage()
      cy.visit('https://saucedemo.com/')
  })
  it('Login Website Page', () => {
      cy.get('#user-name').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.url('include','/inventory.html')

      //assertion
      cy.get('[data-test="title"]').should('exist')
      cy.get('[data-test="product-sort-container"]').should('be.visible')
  })
  it('Add product to cart', () => {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

      //assertion
      cy.get('[data-test="remove-sauce-labs-backpack"]').should('exist')
      cy.get('[data-test="shopping-cart-badge"]').should('be.visible')
  })
  it('Check Cart Page', () => {
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.url('include','/cart.html')

      //assertion
      cy.get('[data-test="title"]').should('exist')
      cy.get('[data-test="inventory-item"]').should('exist')
      cy.get('[data-test="cart-desc-label"]').should('be.visible')
  })
  it('Checkout and Fill Information', () => {
      cy.get('[data-test="checkout"]').click()
      cy.url('include','/checkout-step-one.html')
      
      cy.get('[data-test="firstName"]').type('Muhammad')
      cy.get('[data-test="lastName"]').type('Rasyid')
      cy.get('[data-test="postalCode"]').type('666')
      
      //assertion
      cy.get('[data-test="title"]').should('contain.text', 'Checkout: Your Information')
      cy.get('.checkout_info').should('be.visible')
      cy.get('[data-test="continue"]')
  })
  it('Checkout Overview', () => {
      cy.get('[data-test="continue"]').click()
      cy.url('include','/checkout-complete.html')
      
      //assertion
      cy.get('[data-test="title"]').should('be.visible').and('contain.text', 'Checkout: Overview')
      cy.get('[data-test="inventory-item"]').should('exist')
      cy.get('[data-test="finish"]')
  })
  it('Completing Checkout', () => {
      cy.get('[data-test="finish"]').click()
      cy.url('include','/checkout-complete.html')

      //assertion
      cy.get('[data-test="complete-header"]')
      .should('exist').and('contain.text', 'Thank you for your order!')
      cy.get('[data-test="title"]').should('be.visible')
  })



})