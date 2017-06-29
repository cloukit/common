/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[cloukitHasFocus]'
})
export class CloukitHasFocusDirective implements OnChanges, AfterViewInit {
  @Input() cloukitHasFocus: boolean;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    if (this.cloukitHasFocus) {
      this.el.nativeElement.focus();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cloukitHasFocus'] && changes['cloukitHasFocus'].currentValue === true) {
      this.el.nativeElement.focus();
    }
  }
}
