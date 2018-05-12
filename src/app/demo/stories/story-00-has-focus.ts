import { Component } from '@angular/core';

@Component({
  selector: 'cloukit-story-00-has-focus',
  templateUrl: './story-00-has-focus.html',
  styleUrls: [ '../demo.styles.css' ]
})
export class Story00Component {

  styles: any = { };

  hasFocus = false;

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

  focusStyles() {
    return this.hasFocus ? this.styles.active : this.styles.inActive;
  }

  toggleFocus() {
    this.hasFocus = !this.hasFocus;
  }

}
