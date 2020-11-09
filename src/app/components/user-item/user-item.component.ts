import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../models/user.model';
import {ChatBaseService} from '../../services/chat-base.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})

export class UserItemComponent implements OnInit {
  @Input() withNoName: boolean;
  @Input() isSideUser: boolean;

  @Input() user: IUser;

  constructor(public chatService: ChatBaseService) {
  }

  ngOnInit(): void {
  }

}
