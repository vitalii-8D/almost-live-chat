import {Component, OnInit} from '@angular/core';
import {DataBaseService} from '../../services/data-base.service';
import {ChatBaseService} from '../../services/chat-base.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {
  message: string;
  chatMessages;

  constructor(public db: DataBaseService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const {userId} = params;
      console.log(this.chatMessages);
      this.chatMessages = this.db.chats.find(chat => {
        return chat.members.includes(userId);
      }).messages;
    });
  }

  sendMessage(): void {
    const newMessage = {
      user_id: this.db.authUser.id,
      createdAt: Date.now(),
      body: this.message
    };
    this.chatMessages.push(newMessage);
  }
}
