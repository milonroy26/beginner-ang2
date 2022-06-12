import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './componnets/pages/test/test.component';
import { HomeComponent } from './componnets/pages/home/home.component';
import { LooginComponent } from './componnets/pages/loogin/loogin.component';
import { TodeListComponent } from './componnets/pages/tode-list/tode-list.component';
import { ChildCmpComponent } from './componnets/pages/child-cmp/child-cmp.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TypescriptComponent } from './componnets/pages/typescript/typescript.component';
import { UsdInrPipe } from './componnets/pages/pipes/usd-inr.pipe';
import { RestApiComponent } from './componnets/pages/rest-api/rest-api.component';
import { HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './componnets/pages/users/users.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    LooginComponent,
    TodeListComponent,
    ChildCmpComponent,
    TypescriptComponent,
    UsdInrPipe,
    RestApiComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
