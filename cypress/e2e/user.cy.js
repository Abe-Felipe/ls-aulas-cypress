import userData from '../fixtures/users/userData.json'

describe('Orange HRM Test', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: ".oxd-button",
    nationalityButton: ".oxd-select-text",
    maritalButton: ".oxd-select-text",
    bloodTypeButton: ".oxd-select-text",
  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Isso')
    cy.get(selectorsList.middleNameField).clear().type('É um')
    cy.get(selectorsList.lastNameField).clear().type('Teste')
    cy.get(selectorsList.genericField).eq(4).clear().type('55667788')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('DL55')
    cy.get(selectorsList.genericField).eq(7).clear().type('2029-09-09')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.nationalityButton).eq(0).click({force: true})
    cy.get('.oxd-select-dropdown > :nth-child(4)').click({force: true})
    cy.get(selectorsList.maritalButton).eq(1).click({force: true})
    cy.get('.oxd-select-dropdown > :nth-child(4)').click({force: true})
    cy.get(selectorsList.bloodTypeButton).eq(2).click({force: true})
    cy.get('.oxd-select-dropdown > :nth-child(5)').click({force: true})
    cy.get(selectorsList.submitButton).eq(0).click({force: true})
    cy.get('.oxd-toast-close')

  })

  it('Login - Fail', () => {
    cy.visit ('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  }) 

})