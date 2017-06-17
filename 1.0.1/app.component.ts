import { Component, Output, Input, EventEmitter, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
  <div class="demo">
    <h2>@cloukit/common - HasFocusModule - Directive HasFocus</h2>
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
  styles: [ '.demo { font-family:sans-serif' ],
})
export class AppComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  constructor() { }
  ngOnInit() {


  }
  hasFocus = false;

  toggleFocus(value: boolean) {
    this.hasFocus = !this.hasFocus;
  }
}
