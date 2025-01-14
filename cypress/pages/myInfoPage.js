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

    fillNames() {
        cy.get(this.selectorsList.firstNameField).clear().type('Isso')
        cy.get(this.selectorsList.middleNameField).clear().type('É um')
        cy.get(this.selectorsList.lastNameField).clear().type('Teste')
    }

    fillId() {
        cy.get(this.selectorsList.genericField).eq(4).clear().type('55667788')
        cy.get(this.selectorsList.genericField).eq(5).clear().type('OtherIdTest')
        cy.get(this.selectorsList.genericField).eq(6).clear().type('DL55')
    }

    fillDropdowns() {
        cy.get(this.selectorsList.genericField).eq(7).clear().type('2029-09-09')
        cy.get(this.selectorsList.dateCloseButton).click()
        cy.get(this.selectorsList.nationalityButton).eq(0).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(4)').click({force: true})
        cy.get(this.selectorsList.maritalButton).eq(1).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(4)').click({force: true})
        cy.get(this.selectorsList.bloodTypeButton).eq(2).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(5)').click({force: true})
    }

    submitUpdate() {
        cy.get(this.selectorsList.submitButton).eq(0).click({force: true})
        cy.get('.oxd-toast-close')
    }
}

export default myInfoPage