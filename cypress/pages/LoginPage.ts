class LoginPage{

    private usernameField = "#mat-input-4";
    private passwordField = "#mat-input-5";
    private loginButton = "#st-button-login-enter > span.mat-mdc-button-touch-target";

    visit(){
        cy.visit("/login")
    }

    enterUsername(username: string){
        cy.get(this.usernameField).type(username);
    }

    enterPassword(password: string){
        cy.get(this.passwordField).type(password);
    }

    clickLogin(){
        cy.get(this.loginButton).click();
    }
}

export default new LoginPage();