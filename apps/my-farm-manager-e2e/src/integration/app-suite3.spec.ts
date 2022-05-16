import { getGreeting } from '../support/app.po';
import { buttonControl } from '@myorg/shared-cypress-utils/cypress-commands/support';

describe('my-farm-manager', () => {
  before(() => cy.visit('/'));

  it(' C5 Validation message from suite 3', () => {
    cy.get('button').should('exist')
  });

  it(' C6 Validation message from suite 3', () => {
    cy.get('button').should('exist')
  });

  it(' C7 Validation message from suite 3 ', () => {
    cy.get('button').should('exist')
  });

});
