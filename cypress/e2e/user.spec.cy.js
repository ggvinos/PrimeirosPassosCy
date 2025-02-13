
import userData from '../fixtures/user-data.json'
describe('template spec', () => {

  const selectorList = {  //objeto que armazena seletores CSS dos elementos da página
    usernameField: "[name='username']", 
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar : '.oxd-topbar-header-breadcrumb > .oxd-text',
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: "[data-v-1f99f73c='']",
    dataCloseButton: ".--close",
    submitButton: "[type='submit']",
    comboBoxGeneric: "[data-v-67d2aedf=''][data-v-bddebfba='']",

    
  } 
  
  
  //A ideia é centralizar os seletores para facilitar a manutenção e evitar repetição
  it.only('login - Success', () => {
    //Realizando Login com sucesso
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    //Alterando informações
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type("First Name TEST")
    cy.get(selectorList.lastNameField).clear().type("Last Name TEST")
    cy.get(selectorList.genericField).eq(4).clear().type("EmployeID")
    cy.get(selectorList.genericField).eq(5).clear().type("Other Id TEST")
    cy.get(selectorList.genericField).eq(6).clear().type("DriversLicenseTEST")

    cy.get(selectorList.comboBoxGeneric).eq(0).click()
    cy.get(':nth-child(6) > span').click()
    cy.get(selectorList.comboBoxGeneric).eq(1).click()
    cy.get(':nth-child(3) > span').click()
    
    cy.get(selectorList.genericField).eq(7).clear().type("2020-10-10")
    cy.get(selectorList.dataCloseButton).click
   
    cy.get(selectorList.genericField).eq(9).clear().type("Test_Field")
  

    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close').click()


    

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