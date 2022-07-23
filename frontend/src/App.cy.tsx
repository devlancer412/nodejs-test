import { mount } from '@cypress/react';
import App from './App';

describe('<App>', () => {
  it('mounts', () => {
    mount(<App />)

    cy.get('input#first').type('5');
    cy.get('input#second').type('3');

    cy.get('button').click();

    cy.get('input#sum').should('have.value', 8);
  })
})