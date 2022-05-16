import { getGreeting } from '../support/app.po';
import { buttonControl } from '@myorg/shared-cypress-utils/cypress-commands/support';

describe('my-farm-manager', () => {
  before(() => cy.visit('/'));

  //c10 is from suite 4

  it(' C8 Validation message from suite 3', () => {
    cy.get('button').should('exist')
  });

  it(' C9 Validation message from suite 3', () => {
    cy.get('button').should('be.visible')
    cy.logMessage('dd','dsfdsf','dsf')
  });

});
