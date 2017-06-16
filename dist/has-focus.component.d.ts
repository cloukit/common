import { AfterViewInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class HasFocusDirective implements OnChanges, AfterViewInit {
    private el;
    cloukitHasFocus: boolean;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
