Cypress.Commands.add('sos', () => {
  // "Setup"
  cy.visit('/js/js_intro.asp', { log: false })
  cy.get('#accept-choices', { log: false })
    .click({ log: false })

  // Fast
  cy.toggleBulbOnOff(3, 300)
  // Slow
  cy.toggleBulbOnOff(3, 800)
  // Fast
  cy.toggleBulbOnOff(3, 300)
})

Cypress.Commands.add('toggleBulbOnOff', (times, waitTime) => {
  Cypress._.times(times, () => {
    cy.contains('button', 'Turn on the light', { log: false })
      .click({ log: false })
    cy.wait(waitTime, { log: false })
    cy.contains('button', 'Turn off the light', { log: false })
      .click({ log: false })
    cy.wait(waitTime, { log: false })
  })
})
