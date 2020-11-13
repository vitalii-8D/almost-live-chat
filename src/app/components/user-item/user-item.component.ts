import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../models/user.model';
import {ChatBaseService} from '../../services/chat-base.service';
import {DataBaseService} from '../../services/data-base.service';
import {AuthService} from '../../services/auth.service';
import {IChat} from '../../models/chat.model';
import {StateService} from '../../services/state.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})

export class UserItemComponent implements OnInit {
  @Input() withNoName: boolean;
  @Input() isSideUser: boolean;
  @Input() user: any;
  chat;

  constructor(private stateService: StateService,
              public authService: AuthService) {
  }

  ngOnInit(): void {
    this.chat = this.stateService.chats.find(chat => {
      return chat.members.includes(this.user.id);
    });
  }

}
