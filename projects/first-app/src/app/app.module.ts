import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirstLibModule } from 'first-lib';
import { SecondLibModule } from 'second-lib';
import { ThirdLibModule } from 'third-lib';
import { FourthLibModule } from 'fourth-lib';
import { FifthLibModule } from 'fifth-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirstLibModule,
    SecondLibModule,
    ThirdLibModule,
    FourthLibModule,
    FifthLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
