import {Component, Input, OnInit} from '@angular/core';
import {IChat, IMessage, IUser} from '../../models/indes';
import {ActivatedRoute} from '@angular/router';
import {DataBaseService} from '../../services/data-base.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  // @Input() messages: IMessage[];
  isLoading = true;
  chat: IChat;
  // chatId;
  @Input() user: IUser;

  constructor(private activatedRoute: ActivatedRoute,
              public db: DataBaseService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const {chatId} = params;
      // this.chatId = chatId;

      this.db.getChatById(chatId).subscribe(chat => {
        this.chat = chat;
        this.isLoading = false;
      });
    });
  }
}
