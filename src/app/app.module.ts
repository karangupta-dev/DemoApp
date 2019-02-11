import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_COMPONENTS } from './app.components';
import { ApiService } from './api.service';
import { Helper } from './helper/helper';


@NgModule({
  declarations: [
    AppComponent,
    ...APP_COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    Helper,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
