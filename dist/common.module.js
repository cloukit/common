"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt
 * https://github.com/cloukit/common
 */
__export(require("./click-outside.component"));
__export(require("./has-focus.component"));
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var has_focus_component_1 = require("./has-focus.component");
var click_outside_component_1 = require("./click-outside.component");
var CloukitCommonModule = (function () {
    function CloukitCommonModule() {
    }
    return CloukitCommonModule;
}());
CloukitCommonModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        exports: [click_outside_component_1.ClickOutsideDirective, has_focus_component_1.HasFocusDirective],
        declarations: [click_outside_component_1.ClickOutsideDirective, has_focus_component_1.HasFocusDirective]
    })
], CloukitCommonModule);
exports.CloukitCommonModule = CloukitCommonModule;
