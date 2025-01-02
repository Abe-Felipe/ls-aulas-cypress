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
  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('A')
    cy.get(selectorsList.middleNameField).clear().type('A')
    cy.get(selectorsList.lastNameField).clear().type('A')
    cy.get(selectorsList.genericField).eq(4).clear().type('EmployeeIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('Driver License Number Test')
    cy.get(selectorsList.genericField).eq(7).clear().type('2029-03-07')
    cy.get(selectorsList.genericField).eq(9).clear().type('Test Field Test')

  })
  it('Login - Fail', () => {
    cy.visit ('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  }) 

})