import userData from '../fixtures/users/userData.json'
import loginPage from'../pages/loginPage'
import dboardPage from '../pages/dashboardPage'
import menuPage from '../pages/menuPage'
import myInfoPage from '../pages/myInfoPage'

const LoginPage = new loginPage
const DashboardPage = new dboardPage
const MenuPage = new menuPage
const MyInfoPage = new myInfoPage

describe('Orange HRM Test', () => {

  it.only('User Info Update - Success', () => {
    LoginPage.accessLoginPage()
    LoginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    DashboardPage.checkDashboardPage()
    MenuPage.accessMyInfo()
    MyInfoPage.fillNames()
    MyInfoPage.fillId()
    MyInfoPage.fillDropdowns()
    MyInfoPage.submitUpdate()
  })

  it('Login - Fail', () => {
    cy.visit ('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  }) 

})