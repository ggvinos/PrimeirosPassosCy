class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            middleNameField: "[name='middleName']",
            genericField: "[data-v-1f99f73c='']",
            dataCloseButton: '.--close',
            submitButton: "[type='submit']",
            comboBoxGeneric: ".oxd-select-text--arrow",
            secondItemComboBox: ':nth-child(6) > span',
            thirdItemComboBox: ':nth-child(3 ) > span',
            SuccessfullyCloseButton: '.oxd-toast-close',
            

        }
        
        return selectors
    }
    fillPersonalDetails(firstName,middleName, lastName  ){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        
    }

    fillEmployeeDetails(employeID, otherId, driverLicense, ExpiryDate){
        cy.get(this.selectorsList().genericField).eq(5).clear().type(employeID)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driverLicense)
        cy.get(this.selectorsList().genericField).eq(8).clear().type(ExpiryDate)
        cy.get(this.selectorsList().dataCloseButton).click()
    
        
    }
    saveForm(){
        
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get(this.selectorsList().SuccessfullyCloseButton).click()

    }
    fillStatus(){
        cy.get(this.selectorsList().comboBoxGeneric).eq(0).click()
        cy.get(this.selectorsList().secondItemComboBox).click()
        cy.get(this.selectorsList().comboBoxGeneric).eq(1).click()
        cy.get(this.selectorsList().thirdItemComboBox).click()
    }

}

export default MyInfoPage