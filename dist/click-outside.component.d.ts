import { ElementRef } from '@angular/core';
export declare class ClickOutsideDirective {
    private el;
    cloukitClickOutside: any;
    constructor(el: ElementRef);
    onClick(event: MouseEvent, target: HTMLElement): void;
}
