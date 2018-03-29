webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: "<demo></demo>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__ = __webpack_require__("./src/demo/demo.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__["a" /* DemoModule */]],
            providers: [],
            exports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/click-outside.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitClickOutsideDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */

/**
 * Click outside directive with EventEmitter.
 */
var CloukitClickOutsideDirective = /** @class */ (function () {
    function CloukitClickOutsideDirective(el) {
        this.el = el;
        /**
         * When directive is used on a textfield the EventEmitter
         * emits an event each time the outside of the textfield is clicked.
         */
        this.cloukitClickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    CloukitClickOutsideDirective.prototype.onClick = function (event, target) {
        if (!target) {
            return;
        }
        var clickedInside = this.el.nativeElement.contains(target);
        if (!clickedInside) {
            this.cloukitClickOutside.emit(event);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], CloukitClickOutsideDirective.prototype, "cloukitClickOutside", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('document:click', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
        __metadata("design:returntype", void 0)
    ], CloukitClickOutsideDirective.prototype, "onClick", null);
    CloukitClickOutsideDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[cloukitClickOutside]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], CloukitClickOutsideDirective);
    return CloukitClickOutsideDirective;
}());



/***/ }),

/***/ "./src/components/common.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitCommonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__has_focus_component__ = __webpack_require__("./src/components/has-focus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__click_outside_component__ = __webpack_require__("./src/components/click-outside.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */



var CloukitCommonModule = /** @class */ (function () {
    function CloukitCommonModule() {
    }
    CloukitCommonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__has_focus_component__["a" /* CloukitHasFocusDirective */], __WEBPACK_IMPORTED_MODULE_2__click_outside_component__["a" /* CloukitClickOutsideDirective */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__has_focus_component__["a" /* CloukitHasFocusDirective */], __WEBPACK_IMPORTED_MODULE_2__click_outside_component__["a" /* CloukitClickOutsideDirective */]],
        })
    ], CloukitCommonModule);
    return CloukitCommonModule;
}());



/***/ }),

/***/ "./src/components/has-focus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitHasFocusDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */

/**
 * Has focus directive to use on any input field.
 * You can focus e.g. an textfield from the outside.
 */
var CloukitHasFocusDirective = /** @class */ (function () {
    function CloukitHasFocusDirective(el) {
        this.el = el;
    }
    /**
     * @overrides AfterViewInit
     * @hidden
     */
    CloukitHasFocusDirective.prototype.ngAfterViewInit = function () {
        if (this.cloukitHasFocus) {
            this.el.nativeElement.focus();
        }
    };
    /**
     * @overrides OnChanges
     * @hidden
     */
    CloukitHasFocusDirective.prototype.ngOnChanges = function (changes) {
        if (changes['cloukitHasFocus'] && changes['cloukitHasFocus'].currentValue === true) {
            this.el.nativeElement.focus();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CloukitHasFocusDirective.prototype, "cloukitHasFocus", void 0);
    CloukitHasFocusDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[cloukitHasFocus]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], CloukitHasFocusDirective);
    return CloukitHasFocusDirective;
}());



/***/ }),

/***/ "./src/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:10px;\">\n\n  <cloukit-story title=\"Has Focus\" story=\"story-00-has-focus\">\n    <story-00-has-focus></story-00-has-focus>\n  </cloukit-story>\n\n  <br><br>\n\n  <cloukit-story title=\"Click Outside\" story=\"story-01-click-outside\">\n    <story-01-click-outside></story-01-click-outside>\n  </cloukit-story>\n\n</div>\n"

/***/ }),

/***/ "./src/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
    }
    DemoComponent.sharedStyles = [];
    DemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'demo',
            template: __webpack_require__("./src/demo/demo.component.html"),
            styles: ['.demo { font-family:sans-serif; }'],
        })
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/demo/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__("./src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cloukit_story__ = __webpack_require__("./node_modules/@cloukit/story/story.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stories_story_00_has_focus__ = __webpack_require__("./src/demo/stories/story-00-has-focus.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stories_story_01_click_outside__ = __webpack_require__("./src/demo/stories/story-01-click-outside.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DemoModule = /** @class */ (function () {
    function DemoModule(cloukitStoryService) {
        this.cloukitStoryService = cloukitStoryService;
        //
        // INITIALIZE STORY SOURCES
        //
        var baseUrl = document.getElementsByTagName('base')[0].href;
        var storySourceJsonUrl = baseUrl + "assets/demoStoriesSource.json"; // File is auto generated by build chain!
        this.cloukitStoryService.loadStoryJson(storySourceJsonUrl);
    }
    DemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__demo_component__["a" /* DemoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__stories_story_00_has_focus__["a" /* Story00Component */],
                __WEBPACK_IMPORTED_MODULE_7__stories_story_01_click_outside__["a" /* Story01Component */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__demo_component__["a" /* DemoComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__index__["a" /* CloukitCommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__cloukit_story__["a" /* CloukitStoryModule */],
            ],
            providers: [],
            bootstrap: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__cloukit_story__["b" /* CloukitStoryService */]])
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./src/demo/stories/story-00-has-focus.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo\">\n\n  <button\n    type=\"button\"\n    (click)=\"toggleFocus()\"\n  >\n    click me to toggle focus on the textfield below\n  </button>\n\n  <br><br>\n\n  <input\n    type=\"text\"\n    value=\"I can be focussed from the outside\"\n    name=\"iAmSomeWhereElse\"\n    [ngStyle]=\"focusStyles()\"\n    [cloukitHasFocus]=\"hasFocus\"\n  />\n\n</div>\n"

/***/ }),

/***/ "./src/demo/stories/story-00-has-focus.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story00Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Story00Component = /** @class */ (function () {
    function Story00Component() {
        this.styles = {};
        this.hasFocus = false;
        this.styles.base = {
            color: '#000',
            borderWidth: '3px',
            borderStyle: 'solid',
            width: '300px',
            padding: '8px',
        };
        this.styles.inActive = Object.assign({}, this.styles.base, {
            backgroundColor: '#FAFBFC',
            borderColor: '#F4F5F7',
        });
        this.styles.active = Object.assign({}, this.styles.base, {
            color: '#fff',
            backgroundColor: '#64B058',
            borderColor: '#000',
            transition: [
                'color 0.2s ease-in-out, ',
                'background-color 0.2s ease-in-out, ',
                'border-color 0.2s ease-in-out '
            ].join(''),
        });
    }
    Story00Component.prototype.focusStyles = function () {
        return this.hasFocus ? this.styles.active : this.styles.inActive;
    };
    Story00Component.prototype.toggleFocus = function () {
        this.hasFocus = !this.hasFocus;
    };
    Story00Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-00-has-focus',
            template: __webpack_require__("./src/demo/stories/story-00-has-focus.html"),
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__demo_component__["a" /* DemoComponent */].sharedStyles),
        }),
        __metadata("design:paramtypes", [])
    ], Story00Component);
    return Story00Component;
}());



/***/ }),

/***/ "./src/demo/stories/story-01-click-outside.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo\">\n\n  <input\n    type=\"text\"\n    value=\"click inside me and outside to see the change\"\n    [ngStyle]=\"focusStyles()\"\n    (click)=\"toggleFocus(true)\"\n    (cloukitClickOutside)=\"toggleFocus(false)\"\n  />\n\n</div>\n"

/***/ }),

/***/ "./src/demo/stories/story-01-click-outside.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story01Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Story01Component = /** @class */ (function () {
    function Story01Component() {
        this.styles = {};
        this.hasFocus = false;
        this.styles.base = {
            color: '#000',
            borderWidth: '3px',
            borderStyle: 'solid',
            width: '300px',
            padding: '8px',
        };
        this.styles.inActive = Object.assign({}, this.styles.base, {
            backgroundColor: '#FAFBFC',
            borderColor: '#F4F5F7',
        });
        this.styles.active = Object.assign({}, this.styles.base, {
            color: '#fff',
            backgroundColor: '#64B058',
            borderColor: '#000',
            transition: [
                'color 0.2s ease-in-out, ',
                'background-color 0.2s ease-in-out, ',
                'border-color 0.2s ease-in-out '
            ].join(''),
        });
    }
    Story01Component.prototype.focusStyles = function () {
        return this.hasFocus ? this.styles.active : this.styles.inActive;
    };
    Story01Component.prototype.toggleFocus = function (value) {
        this.hasFocus = value;
    };
    Story01Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-01-click-outside',
            template: __webpack_require__("./src/demo/stories/story-01-click-outside.html"),
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__demo_component__["a" /* DemoComponent */].sharedStyles),
        }),
        __metadata("design:paramtypes", [])
    ], Story01Component);
    return Story01Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_module__ = __webpack_require__("./src/components/common.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_common_module__["a"]; });



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map