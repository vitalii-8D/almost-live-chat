import {Component, Input, OnInit} from '@angular/core';
import {IMessage, IUser, IChat} from '../../models/indes';
import {ChatBaseService} from '../../services/chat-base.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input() messages: IMessage[];
  @Input() user;

  constructor(public chatServise: ChatBaseService) {
  }

  ngOnInit(): void {
  }
}
