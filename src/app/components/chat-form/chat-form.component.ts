import {Component, OnInit} from '@angular/core';
import {DataBaseService} from '../../services/data-base.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IMessage} from '../../models/chat.model';
import {IUser} from '../../models/user.model';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {
  message: string;

  chatId: string;
  dialog: IMessage[];
  user: IUser;

  constructor(public db: DataBaseService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const {chatId} = params;

      this.chatId = chatId;
      this.dialog = history.state.chat?.messages || [];
      this.user = history.state.user;
    });
  }

  send(): void {
    if (!this.message.trim()) {
      return;
    }
    const newMessage = this.db.buildMessage(this.message);
    this.dialog.push(newMessage);

    if (this.chatId === 'unknown') {
      const newChat = this.db.buildChat(this.user.id, this.dialog);
      this.db.createChat(newChat)
        .then(chat => {
          console.log(chat);
          this.router.navigate(['chat', chat.id], {state: {user: this.user, chat}});
        });
      return;
    }

    this.db.addMessageToChat(this.chatId, this.dialog, newMessage.createdAt);

    this.message = '';
  }
}
