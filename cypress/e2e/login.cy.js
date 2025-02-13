
import userData from '../fixtures/user-data.json'
describe('template spec', () => {

  const selectorList = {  //objeto que armazena seletores CSS dos elementos da página
    usernameField: "[name='username']", 
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar : '.oxd-topbar-header-breadcrumb > .oxd-text',
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  } 
  
  
  //A ideia é centralizar os seletores para facilitar a manutenção e evitar repetição
  it('login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
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