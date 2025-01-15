import userData from '../fixtures/users/userData.json'
import loginPage from'../pages/loginPage'
import dboardPage from '../pages/dashboardPage'

const LoginPage = new loginPage
const DashboardPage = new dboardPage

describe('Login Orange HRM Test', () => {

  it('User Info Update - Success', () => {
    LoginPage.accessLoginPage()
    LoginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    DashboardPage.checkDashboardPage()
  })

  it('Login - Fail', () => {
    LoginPage.accessLoginPage()
    LoginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    LoginPage.checkAccessInvalid()
  }) 

})