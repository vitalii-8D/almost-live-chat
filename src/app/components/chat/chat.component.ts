import {Component, OnInit} from '@angular/core';
import {StateService} from '../../services/state.service';
import {DataBaseService} from '../../services/data-base.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  isLoading = true;

  constructor(public db: DataBaseService) {
  }

  ngOnInit(): void {
    this.db.getAllUsers().subscribe(users => {
      // this.db.users = users.filter(user => user.id !== this.db.authUser.id);
    });

    this.db.getMyChats(this.db.authUser.id).subscribe(chats => {
      // this.db.chats = chats;
      this.isLoading = false;
    });
    console.log(this.db.chats);
    console.log(this.db.chats);
  }
}
