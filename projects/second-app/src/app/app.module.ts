import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirstLibModule } from 'first-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirstLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
