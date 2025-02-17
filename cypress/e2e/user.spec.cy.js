import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/DashboardPage.js';
import MenuPage from '../pages/menuPage.js';



const loginPage = new LoginPage()
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage()


describe('Oranfe HRM Tests', () => {

  const selectorList = {  
    
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: "[data-v-1f99f73c='']",
    dataCloseButton: '.--close',
    submitButton: "[type='submit']",
    comboBoxGeneric: ".oxd-select-text--arrow",
    secondItemComboBox: ':nth-child(6) > span',
    thirdItemComboBox: ':nth-child(3 ) > span',
    SuccessfullyCloseButton: '.oxd-toast-close',
    
  } 


  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashBoardPage()

    menuPage.accessMyInfo()
    
   

    
    
    //Alterando informações
    cy.get(selectorList.firstNameField).clear().type("First Name TEST")
    cy.get(selectorList.lastNameField).clear().type("Last Name TEST")
    cy.get(selectorList.genericField).eq(5).clear().type("EmployeID")
    cy.get(selectorList.genericField).eq(6).clear().type("Other Test")
    cy.get(selectorList.genericField).eq(8).clear().type("2020-10-10")
    
    cy.get(selectorList.dataCloseButton).click
    cy.get(selectorList.genericField).eq(6).clear().type("Driver TEST")
    

    cy.get(selectorList.comboBoxGeneric).eq(0).click()
    cy.get(selectorList.secondItemComboBox).click()
    cy.get(selectorList.comboBoxGeneric).eq(1).click()
    cy.get(selectorList.thirdItemComboBox).click()
    
    
   
    cy.get(selectorList.genericField).eq(9).clear().type("Test_Field")
  

    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get(selectorList.SuccessfullyCloseButton).click()

  


  })

  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get('.oxd-alert')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
  })




  
})