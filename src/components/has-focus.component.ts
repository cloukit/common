/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

/**
 * Has focus directive to use on any input field.
 * You can focus e.g. an textfield from the outside.
 */
@Directive({
  selector: '[cloukitHasFocus]'
})
export class CloukitHasFocusDirective implements OnChanges, AfterViewInit {

  /**
   * When set to true and used on e.g. a textfield,
   * the field will have focus. When set to false the textfield
   * will have no focus.
   */
  @Input()
  cloukitHasFocus: boolean;

  constructor(private el: ElementRef) { }

  /**
   * @overrides AfterViewInit
   * @hidden
   */
  ngAfterViewInit() {
    if (this.cloukitHasFocus) {
      this.el.nativeElement.focus();
    }
  }

  /**
   * @overrides OnChanges
   * @hidden
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['cloukitHasFocus'] && changes['cloukitHasFocus'].currentValue === true) {
      this.el.nativeElement.focus();
    }
  }
}
