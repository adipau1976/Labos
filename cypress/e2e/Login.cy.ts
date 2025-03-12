/// <reference types="cypress" />
import LoginPage from '../pages/LoginPage';

describe('Login Tests', () => {
    it('Checks successful login', () => {
        LoginPage.enterUsername('Qa');
        LoginPage.enterPassword('123');
        LoginPage.clickLogin();
        cy.url().should('include','/dashboard');
    });
});