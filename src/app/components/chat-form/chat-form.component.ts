import {Component, OnInit} from '@angular/core';
import {DataBaseService} from '../../services/data-base.service';
import {ChatBaseService} from '../../services/chat-base.service';
import {ActivatedRoute} from '@angular/router';
import {IChat, IMessage} from '../../models/chat.model';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {
  message: string;
  chatId: number;
  dialog: IMessage[];

  constructor(public db: DataBaseService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const {chatId} = params;

      this.chatId = chatId;
      this.dialog = history.state.chat.messages;
    });
  }

  send(): void {
    if (!this.message.trim()) {
      return;
    }
    const newMessage = this.db.buildMessage(this.message);
    this.dialog.push(newMessage);

    this.db.addMessageToChat(this.chatId, this.dialog);

    this.message = '';
  }
}
