import {AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {IChat, IUser} from '../../models/indes';
import {ActivatedRoute} from '@angular/router';
import {DataBaseService} from '../../services/data-base.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, AfterViewChecked {
  @ViewChild('scroller') private feedContainer: ElementRef;

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
        // this.chat = chat;
        this.db.activeChat = chat;
        this.chat = chat;
        this.isLoading = false;
      });
    });
  }

  scrollToBottom(): void {
    this.feedContainer.nativeElement.scrollTop
      = this.feedContainer.nativeElement.scrollHeight;
  }

  ngAfterViewChecked(): void {
    if (this.isLoading) {
      return;
    }
    this.scrollToBottom();
  }
}
