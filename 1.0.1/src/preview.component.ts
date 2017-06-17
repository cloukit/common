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


    <h3>ClickOutside</h3>
    <input
      type="text"
      value="click inside me and outside to see the change"
      [ngStyle]="containerStyles()"
      (click)="toggleFocus2(true)"
      (cloukitClickOutside)="toggleFocus2(false)"
    />
  </div>`,
  styles: [ '.preview { font-family:sans-serif' ],
})
export class PreviewComponent {

  constructor() { }

  // HAS FOCUS
  hasFocus = false;

  toggleFocus(value: boolean) {
    this.hasFocus = !this.hasFocus;
  }

  // CLICK OUTSIDE
  hasFocus2 = false;
  styles = {
    inActive: {
      borderWidth: '3px',
      borderStyle: 'solid',
      backgroundColor: '#FAFBFC',
      borderColor: '#F4F5F7',
      width: '300px',
    },
    active: {
      borderWidth: '3px',
      borderStyle: 'solid',
      backgroundColor: '#FFFFFF',
      borderColor: '#4C9AFF',
      width: '300px',
      transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out',
    }
  };

  containerStyles() {
    return this.hasFocus2 ? this.styles.active : this.styles.inActive;
  }

  toggleFocus2(value: boolean) {
    this.hasFocus2 = !this.hasFocus2;
  }
}
