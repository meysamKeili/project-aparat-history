import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from './base-module/core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CoreModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
