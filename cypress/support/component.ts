import "@/assets/main.css";

import { mount as _mount } from "cypress/vue";
import { createPinia, Pinia, setActivePinia } from "pinia";

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
