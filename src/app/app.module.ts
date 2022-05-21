import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './componnets/pages/test/test.component';
import { HomeComponent } from './componnets/pages/home/home.component';
import { LooginComponent } from './componnets/pages/loogin/loogin.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    LooginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
