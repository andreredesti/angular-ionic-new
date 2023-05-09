import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    /*CommonModule*/

    [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  bootstrap: [AppComponent],
  
],
  declarations: [ AppComponent ]

})
export class AppModule { }