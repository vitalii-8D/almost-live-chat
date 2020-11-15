import {Component, OnInit} from '@angular/core';
import {DataBaseService} from '../../services/data-base.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  isLoading = true;

  constructor(public db: DataBaseService) {
  }

  ngOnInit(): void {
    this.db.getMyChats().subscribe(chats => {
      this.db.getAllUsers().subscribe(users => {});
      this.isLoading = false;
    });
  }
}
