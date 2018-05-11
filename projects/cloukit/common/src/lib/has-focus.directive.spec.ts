/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, DebugElement } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { CloukitHasFocusDirective } from './has-focus.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <input
    type="text"
    id="dummy"
    name="dummyInputWhichIsAutoFocuesAsFirstElement"
  >
  <input
    type="text"
    id="focusableInput"
    [cloukitHasFocus]="hasFocus"
  >
  <button id="btn" (click)="toggleFocus()">click me to focus</button>
  `
})
class TestComponent {
  public hasFocus = false;
  public toggleFocus() {
    this.hasFocus = !this.hasFocus;
  }
}

describe('CloukitHasFocusDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        CloukitHasFocusDirective,
      ],
    }).compileComponents();
  }));
  it('should create the app and click button should focus input', async(() => {
    const fixture = TestBed.createComponent(TestComponent);
    const component = fixture.componentInstance;
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    //
    // FIRST CLICK THE INPUT FIELD
    //
    const inputEl = fixture.debugElement.query(By.css('#focusableInput'));
    //
    // SECOND CLICK BUTTON TO FOCUS THE INPUT FIELD
    //
    const buttonEl = fixture.debugElement.query(By.css('button'));
    buttonEl.nativeElement.click();
    fixture.whenStable().then(() => {
      expect(component.hasFocus).toBeTruthy();
    });
  }));
});
