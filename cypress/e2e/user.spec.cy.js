import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/DashboardPage.js';
import MenuPage from '../pages/menuPage.js';
import MyInfoPage from '../pages/myInfoPage.js';

const Chance = require('chance');
const formatDate = (date) => {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
};

const chance = new Chance();
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

    const randomDate = chance.date();
    const formattedDate = formatDate(randomDate);

    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.animal(), chance.animal({type: 'zoo'}), chance.string({ length: 5 }), formattedDate)
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  
  })
  
  
})