/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { HasFocusDirective } from './has-focus.component';
import { ClickOutsideDirective } from './click-outside.component';

@NgModule({
  imports: [  ],
  exports: [ HasFocusDirective, ClickOutsideDirective ],
  declarations: [ HasFocusDirective, ClickOutsideDirective ],
})
export class CommonModule {}
