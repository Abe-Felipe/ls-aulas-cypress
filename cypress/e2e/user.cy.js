import userData from '../fixtures/users/userData.json'
import loginPage from'../pages/loginPage'
import dboardPage from '../pages/dashboardPage'
import menuPage from '../pages/menuPage'
import myInfoPage from '../pages/myInfoPage'

const Chance = require('chance');

const chance = new Chance();
const LoginPage = new loginPage
const DashboardPage = new dboardPage
const MenuPage = new menuPage
const MyInfoPage = new myInfoPage

describe('Orange HRM Test', () => {

  it('User Info Update - Success', () => {
    LoginPage.accessLoginPage()
    LoginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    DashboardPage.checkDashboardPage()

    MenuPage.accessMyInfo()

    MyInfoPage.fillNames(chance.first(), chance.prefix(), chance.last())
    MyInfoPage.fillId('556677', '776655', '889900')
    MyInfoPage.fillDropdowns('2029-09-09')
    MyInfoPage.submitUpdate()
  })
})