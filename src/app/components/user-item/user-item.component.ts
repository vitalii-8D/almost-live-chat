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

  @Input() user = {
    chatRooms: ['88888'],
    username: 'corp_riashko',
    name: 'Andrii Riashko',
    status: 'online',
    id: '33333',
    avatar: 'https://via.placeholder.com/200/EE3E11/EE3E11?Text=Digital.com',
    isOnline: true
  };

  constructor(public chatService: ChatBaseService) {
  }

  ngOnInit(): void {
  }

}
