import { UsersComponent } from './componnets/pages/users/users.component';
import { LooginComponent } from './componnets/pages/loogin/loogin.component';
import { TestComponent } from './componnets/pages/test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componnets/pages/home/home.component';
import { TodeListComponent } from './componnets/pages/tode-list/tode-list.component';
import { TypescriptComponent } from './componnets/pages/typescript/typescript.component';
import { RestApiComponent } from './componnets/pages/rest-api/rest-api.component';
import { NoPageComponent } from './componnets/pages/no-page/no-page.component';
import { AboutComponent } from './componnets/pages/about/about.component';
import { AbutMeComponent } from './componnets/pages/abut-me/abut-me.component';

const routes: Routes = [
  { path: '', redirectTo: '/home',pathMatch:'full'},
  { path: "home", component: HomeComponent},
  { path: "test", component: TestComponent},
  { path: "loogin", component: LooginComponent},
  { path: "todolist", component: TodeListComponent},
  { path: 'typescript', component: TypescriptComponent},
  { path: 'rest-api', component: RestApiComponent },
  { path: 'rest-api', component: RestApiComponent },
  { path: 'user/:id', component: UsersComponent },
  // child Routing
  { path: 'about', component: AboutComponent, children: [
    {path: 'me', component: AbutMeComponent},
  ]},
  { path: '**', component: NoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
