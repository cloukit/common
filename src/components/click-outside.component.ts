/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[cloukitClickOutside]'
})
export class ClickOutsideDirective {

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
