import {Component, OnInit} from '@angular/core';
import {ChatBaseService} from '../../services/chat-base.service';
import {IUser, IChat} from '../../models/indes';

@Component({
  selector: 'app-side-section',
  templateUrl: './side-section.component.html',
  styleUrls: ['./side-section.component.scss']
})
export class SideSectionComponent implements OnInit {
  user: IUser;
  chat: IChat;
  fetched: any;

  constructor(public chatService: ChatBaseService) {
  }

  ngOnInit(): void {
  }
}
