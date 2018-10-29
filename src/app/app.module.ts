import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarriersModule } from '../carriers/carriers.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CarriersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
