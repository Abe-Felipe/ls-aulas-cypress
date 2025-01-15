class myInfoPage {

    selectorsList() {
            const selectors = {
                firstNameField: "[name='firstName']",
                middleNameField: "[name='middleName']",
                lastNameField: "[name='lastName']",
                genericField: ".oxd-input",
                dateField: "[placeholder='yyyy-dd-mm']",
                dateCloseButton: ".--close",
                submitButton: ".oxd-button",
                nationalityButton: ".oxd-select-text",
                maritalButton: ".oxd-select-text",
                bloodTypeButton: ".oxd-select-text",
            }

    return selectors
    }

    fillNames(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillId(employeeId, otherId, driversLicense) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicense)
    }

    fillDropdowns(licenseExpiryDate) {
        cy.get(this.selectorsList().genericField).eq(8).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().nationalityButton).eq(0).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(4)').click({force: true})
        cy.get(this.selectorsList().maritalButton).eq(1).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(4)').click({force: true})
        cy.get(this.selectorsList().bloodTypeButton).eq(2).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(5)').click({force: true})
    }

    submitUpdate() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('.oxd-toast-close')
    }
}

export default myInfoPage