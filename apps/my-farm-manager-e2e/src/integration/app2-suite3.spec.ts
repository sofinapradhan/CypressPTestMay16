import { getGreeting } from '../support/app.po';
import { buttonControl } from '@myorg/shared-cypress-utils/cypress-commands/support';

describe('my-farm-manager', () => {
  before(() => cy.visit('/'));

  it(' C4 Validation message from suite 3', () => {
    cy.get('button').should('exist')
  });


});
