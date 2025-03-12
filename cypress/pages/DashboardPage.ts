class DashboardPage {

    private hamburgerMenu = "#menu-button > span.mat-mdc-button-touch-target"
    private sideMenuSearchField = "#menuSearchInput";
    private sideMenuProcessingDDL = "##st-navbar-button-processing > span";
    private sideMenuOrder = "##st-navbar-sub-item-button-order";

    visit(){
        cy.visit("/dashboard")
    }

    clickHamburgerMenu(){
        cy.get(this.hamburgerMenu).click();
    }

    clickSideMenuSearchField(){
        cy.get(this.sideMenuSearchField).click();
    }

    clickSideMenuProcessingDDL(){
        cy.get(this.sideMenuProcessingDDL).click();
    }

    clickSideMenuOrder(){
        cy.get(this.sideMenuOrder).click();
    }    
}

export default new DashboardPage();