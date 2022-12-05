// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Import global styles
import "@/assets/main.css";

import { mount as _mount } from "cypress/vue";
import { createPinia, Pinia, setActivePinia } from "pinia";

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add("mount", _mount);

let pinia: Pinia = createPinia();

beforeEach(() => {
  pinia = createPinia();
  setActivePinia(pinia);
});

export function mount(Comp: any, options?: any) {
  return _mount(Comp, {
    ...options,
    global: {
      plugins: [pinia],
    },
  });
}

// Example use:
// cy.mount(MyComponent)
