
import {LitElement, html, customElement} from 'lit-element';

const css = require('./style.pcss');
import template from './template';

@customElement('sk-button')
export default class SkButton extends LitElement {
  render() {
    return html`<style>${css}</style> ${template(this)}`;
  }
}