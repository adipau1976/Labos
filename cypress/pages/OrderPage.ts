class OrderPage{

    private facilityField = "#mat-input-10";
    private facilityListItem = "#mat-option-10";
    private physician = "#mat-input-24";
    private patient = "#mat-input-38";
    private patientListItem = "#mat-option-56";
    private starIcon = "#mat-mdc-checkbox-6 > div > label > div > st-tube > div > div > div > span > mat-icon";
    private albumCheckBox = "#mat-mdc-checkbox-6-input";
    private testFromTestList = "body > st-root > div > st-main > mat-drawer-container > mat-drawer-content > st-order-create > st-order-wrapper > st-order-entry > div > div.flex-grow-1.st-overflow-y-auto > div.w-100.d-flex.st-container-divider-top.st-overflow-hidden > div.st-px-5.st-selected-tests-container > st-shared-selected-tests > form > div.st-test-item.ng-star-inserted > st-shared-test-item > div.d-flex.st-test-wrapper.justify-content-between";
    private saveButton = "#st-button-save";

    constructor(){
    }

    visit(){
        cy.visit("/order")
    }

    enterFacility(facility: string){
        cy.get(this.facilityField).type(facility);
    }

    clickFacilityListItem(){
        cy.get(this.facilityListItem).click();
    }

    getPhsicaintField(){
        return cy.get(this.physician);//document.querySelector("#mat-input-24").value
    }

    enterPatient(patient: string){
        cy.get(this.patient).type(patient);//document.querySelector("#mat-input-38").value
    }

    clickPatientListItem(){
        cy.get(this.patientListItem).click();
    }

    getStarIcon(){
        return cy.get(this.starIcon);
    }

    clickAlbumimCheckBox(){
        cy.get(this.albumCheckBox).click();
    }

    getTestFromTestsList(){
        return cy.get(this.testFromTestList);
    }

    clickSaveButton(){
        cy.get(this.saveButton).click();
    }
}

export default new OrderPage();