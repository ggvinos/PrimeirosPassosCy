import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/DashboardPage.js';
import MenuPage from '../pages/menuPage.js';
import MyInfoPage from '../pages/myInfoPage.js';

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Oranfe HRM Tests', () => {


  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashBoardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails("first Name", 'middleName', 'LastName')
    myInfoPage.fillEmployeeDetails("employeID", "otherId", "driverLicense", "2024-05-10")
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  
  })
  
  
})