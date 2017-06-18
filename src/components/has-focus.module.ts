/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HasFocusDirective } from './has-focus.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  exports: [ HasFocusDirective ],
  declarations: [ HasFocusDirective ],
})
export class HasFocusModule {}
