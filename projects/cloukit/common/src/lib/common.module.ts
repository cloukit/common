/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { CloukitHasFocusDirective } from './has-focus.directive';
import { CloukitClickOutsideDirective } from './click-outside.directive';

@NgModule({
  imports: [  ],
  exports: [ CloukitHasFocusDirective, CloukitClickOutsideDirective ],
  declarations: [ CloukitHasFocusDirective, CloukitClickOutsideDirective ],
})
export class CloukitCommonModule {}
