import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { GpcNavbar } from './modules/gpc-navbar/gpc-navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GpcNavbar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
