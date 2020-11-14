import {Component, OnInit} from '@angular/core';
import {ChatBaseService} from '../../services/chat-base.service';
import {ActivatedRoute} from '@angular/router';
import {DataBaseService} from '../../services/data-base.service';

@Component({
  selector: 'app-chat-zone',
  templateUrl: './chat-zone.component.html',
  styleUrls: ['./chat-zone.component.scss']
})
export class ChatZoneComponent implements OnInit {
  isLoading = true;
  user;
  chat;

  constructor(private chatService: ChatBaseService,
              private activatedRoute: ActivatedRoute,
              private db: DataBaseService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const {user} = history.state;
      const {chatId} = params;
      console.log(params);
      this.chat = this.db.chats.find(chat => {
        return +chat.id === +chatId;
      });
      this.user = user;

      this.isLoading = false;

      console.log('chat-zone');
      console.log(this.user);
      console.log(this.chat);
    });
  }
}
