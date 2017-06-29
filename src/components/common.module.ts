/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { CloukitHasFocusDirective } from './has-focus.component';
import { CloukitClickOutsideDirective } from './click-outside.component';

@NgModule({
  imports: [  ],
  exports: [ CloukitHasFocusDirective, CloukitClickOutsideDirective ],
  declarations: [ CloukitHasFocusDirective, CloukitClickOutsideDirective ],
})
export class CloukitCommonModule {}
