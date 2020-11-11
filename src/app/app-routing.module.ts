import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChatComponent} from './components/chat/chat.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {SignPageComponent} from './components/sign-page/sign-page.component';
import {ChatZoneComponent} from './components/chat-zone/chat-zone.component';

const routes: Routes = [
  {path: 'chat', component: ChatComponent, children: [
      {path: ':chatId', component: ChatZoneComponent}
    ]},
  {path: 'sign', component: SignPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
