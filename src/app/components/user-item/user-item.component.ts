import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../models/user.model';
import {DataBaseService} from '../../services/data-base.service';
import {IChat} from '../../models/chat.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})

export class UserItemComponent implements OnInit {
  @Input() isSideUser: boolean;
  @Input() user: IUser;
  chat: IChat;

  constructor(public db: DataBaseService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.chat = this.db.chats.find(chat => {
      return chat.members.includes(this.user.id);
    });
    if (!this.chat) {
      this.chat = {id: 'unknown'};
    }
  }

  goToChat(): void {
    this.router.navigate(['chat', this.chat.id], {state: {user: this.user, chat: this.chat}});
  }
}
