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
import { UserComponent } from './components/user/user.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserListComponent } from './components/user-list/user-list.component';
import {CommonModule} from '@angular/common';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { FeedComponent } from './components/feed/feed.component';
import { MessageComponent } from './components/message/message.component';
import {DataBaseService} from './services/data-base.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    SideSectionComponent,
    ChatZoneComponent,
    UserComponent,
    UserSearchComponent,
    UserItemComponent,
    UserListComponent,
    ChatFormComponent,
    FeedComponent,
    MessageComponent
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
