import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataBaseService} from '../../services/data-base.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  isLoading = true;
  chats: Subscription;
  users: Subscription;

  constructor(public db: DataBaseService,
              private router: Router) {
  }

  ngOnInit(): void {
    const {url} = this.router.routerState.snapshot;
    if (url.split('/').length > 2) {
      this.router.navigate(['/chat']);
    }

    this.chats = this.db.getMyChats().subscribe(chats => {
      this.users = this.db.getAllUsers().subscribe(users => {
        this.isLoading = false;
      });
    });
  }

  ngOnDestroy(): void {
    this.chats.unsubscribe();
    this.users.unsubscribe();
  }
}
