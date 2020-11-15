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
  @Input() user: IUser;
  isLoading = true;
  chat: IChat;

  constructor(private activatedRoute: ActivatedRoute,
              public db: DataBaseService) {
  }

  ngOnInit(): void {
    console.log(this.user.id);
    this.activatedRoute.params.subscribe(params => {
      const {chatId} = params;

      this.db.getChatById(chatId).subscribe(chat => {
        this.chat = chat;
        this.isLoading = false;
      });
    });
  }
}
