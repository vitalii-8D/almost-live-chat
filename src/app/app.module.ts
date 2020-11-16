import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChatBaseService} from './services/chat-base.service';
import { ChatComponent } from './components/chat/chat.component';
import { SideSectionComponent } from './components/side-section/side-section.component';
import { ChatZoneComponent } from './components/chat-zone/chat-zone.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserListComponent } from './components/user-list/user-list.component';
import {CommonModule} from '@angular/common';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { FeedComponent } from './components/feed/feed.component';
import { MessageComponent } from './components/message/message.component';
import {DataBaseService} from './services/data-base.service';
import {FormsModule} from '@angular/forms';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignPageComponent } from './components/sign-page/sign-page.component';
import { OrderUsersPipe } from './pipes/order-users.pipe';
import { WelcomComponent } from './components/welcom/welcom.component';
import { UserSearchPipe } from './pipes/user-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    SideSectionComponent,
    ChatZoneComponent,
    UserSearchComponent,
    UserItemComponent,
    UserListComponent,
    ChatFormComponent,
    FeedComponent,
    MessageComponent,
    LoginPageComponent,
    SignPageComponent,
    OrderUsersPipe,
    WelcomComponent,
    UserSearchPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [ChatBaseService, DataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
