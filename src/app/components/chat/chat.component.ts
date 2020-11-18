import {Component, OnInit} from '@angular/core';
import {DataBaseService} from '../../services/data-base.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  isLoading = true;

  constructor(public db: DataBaseService,
              private router: Router) {
  }

  ngOnInit(): void {
    const {url} = this.router.routerState.snapshot;
    console.log('---***---   url   ---***---');
    console.log('url= ' + url);
    if (url.split('/').length > 2) {
      this.router.navigate(['/chat']);
    }
    const chatId = url.substr(6);
    this.db.getMyChats().subscribe(chats => {
      this.db.getAllUsers().subscribe(users => {
        this.isLoading = false;
      });
    });
  }
}
