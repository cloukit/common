import { Component } from '@angular/core';

@Component({
  selector: 'preview',
  template: `
  <div class="preview">
    <h3>HasFocus</h3>
    <button
      type="button"
      (click)="toggleFocus()"
    >
      click me
    </button>
    <br /><br />
    <input
      type="text"
      name="iAmSomeWhereElse"
      [cloukitHasFocus]="hasFocus"
    />
  </div>`,
  styles: [ '.preview { font-family:sans-serif' ],
})
export class PreviewComponent {

  constructor() { }

  hasFocus = false;

  toggleFocus(value: boolean) {
    this.hasFocus = !this.hasFocus;
  }
}
