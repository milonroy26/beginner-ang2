import { LooginComponent } from './componnets/pages/loogin/loogin.component';
import { TestComponent } from './componnets/pages/test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componnets/pages/home/home.component';
import { TodeListComponent } from './componnets/pages/tode-list/tode-list.component';
import { TypescriptComponent } from './componnets/pages/typescript/typescript.component';
import { RestApiComponent } from './componnets/pages/rest-api/rest-api.component';

const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch:'full'},
  {path: "home", component: HomeComponent},
  {path: "test", component: TestComponent},
  {path: "loogin", component: LooginComponent},
  {path: "todolist", component: TodeListComponent},
  {path: 'typescript', component: TypescriptComponent},
  { path: 'rest-api', component: RestApiComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
