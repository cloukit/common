import { Component } from '@angular/core';

@Component({
  selector: 'preview',
  template: `
  <div class="preview">
    <h3>HasFocus</h3>
    <button
      type="button"
      (click)="toggleFocus1()"
    >
      click me to toggle focus on the textfield below
    </button>
    <br /><br />
    <input
      type="text"
      value="I can be focussed from the outside"
      name="iAmSomeWhereElse"
      [ngStyle]="focus1Styles()"
      [cloukitHasFocus]="hasFocus1"
    />


    <h3>ClickOutside</h3>
    <input
      type="text"
      value="click inside me and outside to see the change"
      [ngStyle]="focus2Styles()"
      (click)="toggleFocus2(true)"
      (cloukitClickOutside)="toggleFocus2(false)"
    />
  </div>`,
  styles: [ '.preview { font-family:sans-serif' ],
})
export class PreviewComponent {
  styles = { };
  hasFocus1 = false;
  hasFocus2 = false;

  constructor() {
    this.styles.base = {
      color: '#000',
      borderWidth: '3px',
      borderStyle: 'solid',
      width: '300px',
      padding: '8px',
    };
    this.styles.inActive = Object.assign({}, this.styles.base, {
      backgroundColor: '#FAFBFC',
      borderColor: '#F4F5F7',
    });
    this.styles.active = Object.assign({}, this.styles.base, {
      color: '#fff',
      backgroundColor: '#64B058',
      borderColor: '#000',
      transition: [
        'color 0.2s ease-in-out, ',
        'background-color 0.2s ease-in-out, ',
        'border-color 0.2s ease-in-out '
      ].join(''),
    });
  }

  // HAS FOCUS
  focus1Styles() {
    return this.hasFocus1 ? this.styles.active : this.styles.inActive;
  }

  toggleFocus1() {
    this.hasFocus1 = !this.hasFocus1;
  }

  // CLICK OUTSIDE
  focus2Styles() {
    return this.hasFocus2 ? this.styles.active : this.styles.inActive;
  }

  toggleFocus2(value: boolean) {
    this.hasFocus2 = value;
  }
}
