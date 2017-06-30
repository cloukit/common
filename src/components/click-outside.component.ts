/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

/**
 * Click outside directive with EventEmitter.
 */
@Directive({
  selector: '[cloukitClickOutside]'
})
export class CloukitClickOutsideDirective {

  /**
   * When directive is used on a textfield the EventEmitter
   * emits an event each time the outside of the textfield is clicked.
   */
  @Output()
  public cloukitClickOutside = new EventEmitter<MouseEvent>();

  constructor(private el: ElementRef) { }

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, target: HTMLElement): void {
    if (!target) {
      return;
    }
    const clickedInside = this.el.nativeElement.contains(target);
    if (!clickedInside) {
      this.cloukitClickOutside.emit(event);
    }
  }
}
