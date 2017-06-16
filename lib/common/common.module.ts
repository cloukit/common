/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt
 * https://github.com/cloukit/common
 */
export * from './click-outside.component';
export * from './has-focus.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HasFocusDirective } from './has-focus.component';
import { ClickOutsideDirective } from './click-outside.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  exports: [ ClickOutsideDirective, HasFocusDirective ],
  declarations: [ ClickOutsideDirective, HasFocusDirective ],
})
export class CloukitCommonModule {}
