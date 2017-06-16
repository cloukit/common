"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt
 * https://github.com/cloukit/common
 */
var core_1 = require("@angular/core");
var HasFocusDirective = (function () {
    function HasFocusDirective(el) {
        this.el = el;
    }
    HasFocusDirective.prototype.ngAfterViewInit = function () {
        if (this.cloukitHasFocus) {
            this.el.nativeElement.focus();
        }
    };
    HasFocusDirective.prototype.ngOnChanges = function (changes) {
        if (changes['cloukitHasFocus'] && changes['cloukitHasFocus'].currentValue === true) {
            this.el.nativeElement.focus();
        }
    };
    return HasFocusDirective;
}());
__decorate([
    core_1.Input()
], HasFocusDirective.prototype, "cloukitHasFocus");
HasFocusDirective = __decorate([
    core_1.Directive({
        selector: '[cloukitHasFocus]'
    })
], HasFocusDirective);
exports.HasFocusDirective = HasFocusDirective;
