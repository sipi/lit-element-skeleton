
import {LitElement, html, customElement} from 'lit-element';

const css = require('./style.pcss');
import template from './template';
import '../../dumbs/sk-button';

@customElement('sk-app')
export default class SkApp extends LitElement {

  name: String;
  appVersion: String;
  ENV: String;
  updateReady: Boolean;

  render() {
    return html`<style>${css}</style> ${template(this)}`;
  }

  constructor() {
    super();
    this.name = "";
    this.appVersion = <String> process.env.appVersion;
    this.ENV = <String> process.env.NODE_ENV;
    this.updateReady = false;

    document.addEventListener('updateReady', () => {
      this.updateReady = true;
    });
  }

  startTour() {
    window.location.replace('https://github.com/PolymerX/polymer-skeleton');
  }

  reload() {
    window.location.reload();
  }
}