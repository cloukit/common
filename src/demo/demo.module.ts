import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { CloukitCommonModule } from '../index';

@NgModule({
  declarations: [ DemoComponent ],
  exports: [ DemoComponent ],
  imports: [ CommonModule, CloukitCommonModule ],
  providers: [ ],
  bootstrap: [ ]
})
export class DemoModule {
}
