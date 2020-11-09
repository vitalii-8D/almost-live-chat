import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChatComponent} from './components/chat/chat.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {SignPageComponent} from './components/sign-page/sign-page.component';

const routes: Routes = [
  {path: 'chat', component: ChatComponent},
  {path: 'sign', component: SignPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
