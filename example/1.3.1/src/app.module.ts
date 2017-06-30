import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { PreviewComponent } from './preview.component';
import { CloukitCommonModule } from '@cloukit/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CloukitCommonModule
  ],
  declarations: [
    AppComponent,
    PreviewComponent,
  ],
  providers: [ ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
