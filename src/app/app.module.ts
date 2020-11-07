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
import { UserIntroComponent } from './components/user-intro/user-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    SideSectionComponent,
    ChatZoneComponent,
    UserComponent,
    UserIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [ChatBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
