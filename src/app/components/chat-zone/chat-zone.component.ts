import { Component, OnInit } from '@angular/core';
import {ChatBaseService} from '../../services/chat-base.service';
import {IChat} from '../../models/chat.model';

@Component({
  selector: 'app-chat-zone',
  templateUrl: './chat-zone.component.html',
  styleUrls: ['./chat-zone.component.scss']
})
export class ChatZoneComponent implements OnInit {
  chats: IChat[];

  constructor(private chatService: ChatBaseService) { }

  ngOnInit(): void {
    this.chatService.getAllChats().subscribe(items => {
      this.chats = items;
      // console.log(items);
    });
  }
}
