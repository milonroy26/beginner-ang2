import { LooginComponent } from './componnets/pages/loogin/loogin.component';
import { TestComponent } from './componnets/pages/test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componnets/pages/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch:'full'},
  {path: "home", component: HomeComponent},
  {path: "test", component: TestComponent},
  {path: "loogin", component: LooginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
