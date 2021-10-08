Cypress.Commands.add('sos', () => {
  cy.visit('../index.html', { log: false })
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
