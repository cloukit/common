/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, DebugElement } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { CloukitClickOutsideDirective } from './click-outside.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <input
    type="text"
    (click)="toggleFocus(true)"
    (cloukitClickOutside)="toggleFocus(false)"
  >
  <div>outside</div>
  `
})
class TestComponent {
  public hasFocus: boolean;
  public toggleFocus(value: boolean) {
    this.hasFocus = value;
  }
}

describe('CloukitClickOutsideDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        CloukitClickOutsideDirective,
      ],
    }).compileComponents();
  }));
  it('should create the app and click outside should work', async(() => {
    const fixture = TestBed.createComponent(TestComponent);
    const component = fixture.componentInstance;
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    //
    // FIRST CLICK THE INPUT FIELD
    //
    const inputEl = fixture.debugElement.query(By.css('input'));
    inputEl.nativeElement.click();
    fixture.whenStable().then(() => {
      expect(component.hasFocus).toBeTruthy();
      //
      // SECOND CLICK OUTSIDE THE INPUT FIELD
      //
      const divEl = fixture.debugElement.query(By.css('div'));
      divEl.nativeElement.click();
      fixture.whenStable().then(() => {
        expect(component.hasFocus).toBeFalsy();
      });
    });
  }));
});
