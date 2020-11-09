import {Component, OnInit} from '@angular/core';
import {ChatBaseService} from '../../services/chat-base.service';
import {AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {IUser} from '../../models/user.model';
import {IChat} from '../../models/chat.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: IUser[];
  chats: IChat[];

  constructor(public chatService: ChatBaseService) {
  }

  ngOnInit(): void {
    this.chatService.getAllUsers().subscribe(items => {
      this.users = items;
    });
    this.chatService.getAllChats().subscribe(items => {
      this.chats = items;
    });
  }

}
