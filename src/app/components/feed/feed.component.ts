import {Component, Input, OnInit} from '@angular/core';
import {IMessage, IUser, IChat} from '../../models/indes';
import {ChatBaseService} from '../../services/chat-base.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input() messages: IMessage[];
  @Input() members: string[];
  users = {};

  constructor(public chatServise: ChatBaseService) {
  }

  ngOnInit(): void {
    this.chatServise.getUser(this.members[0]).subscribe(items => {
      const {name, username, status, avatar} = items[0];
      this.users[this.members[0]] = {name, username, status, avatar};
    });
    this.chatServise.getUser(this.members[1]).subscribe(items => {
      const {name, username, status, avatar} = items[0];
      this.users[this.members[1]] = {name, username, status, avatar};
    });

    this.messages = this.messages.map(mes => {
      mes.createdAt = mes.createdAt.seconds * 1000 + mes.createdAt.seconds / 1000000;
      if (mes.user_id === this.chatServise.authUser.id) {

        return {...mes, isMyMsg: true};
      }

      return {...mes, isMyMsg: false};
    });

  //   console.log('this.users');
  //   console.log(this.users);
  //   console.log(this.messages);
  }
}
