import {Component, OnInit} from '@angular/core';
import {DataBaseService} from '../../services/data-base.service';
import {ChatBaseService} from '../../services/chat-base.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {
  query: string;

  constructor(private db: DataBaseService, private chatService: ChatBaseService) {
  }

  ngOnInit(): void {
  }

  sendMessage() {

  }

  addToDatabase(): void {
    /*const args = this.query.split(';');

    // @ts-ignore
    const newUser = this.db.buildUser(...args);
    console.log(newUser);

    this.chatService.createUser(newUser);
    this.query = '';*/
  }
}
