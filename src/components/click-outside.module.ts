/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './click-outside.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  exports: [ ClickOutsideDirective ],
  declarations: [ ClickOutsideDirective ],
})
export class ClickOutsideModule {}
