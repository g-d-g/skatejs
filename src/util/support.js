const { Document } = window;
const doc = document;
const win = window;
const div = doc.createElement('div');
export const customElementsV0 = !!doc.registerElement;
export const customElementsV1 = !!win.customElements;
export const shadowDomV0 = !!div.createShadowRoot;
export const shadowDomV1 = !!div.attachShadow;
export const reflect = 'Reflect' in window;
export const isPolyfilled = !!Document.prototype.registerElement;
