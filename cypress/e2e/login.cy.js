import userData from '../fixtures/users/userData.json'
import loginPage from'../pages/loginPage'

const LoginPage = new loginPage


describe('Login Orange HRM Test', () => {

  it('User Info Update - Success', () => {
    LoginPage.accessLoginPage()
    LoginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
  })

  it('Login - Fail', () => {
    LoginPage.accessLoginPage()
    LoginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    LoginPage.checkAccessInvalid()
  }) 

})