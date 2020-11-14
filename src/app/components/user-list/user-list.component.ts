import {Component, OnInit} from '@angular/core';
import {IUser} from '../../models/user.model';
import {DataBaseService} from '../../services/data-base.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  isLoading = false;

  constructor(public db: DataBaseService,
              private router: Router) {
  }

  ngOnInit(): void {
    console.log('user-list');
    console.log(this.db.users);
    console.log(this.db.chats);
  }

  goToChat(user: IUser): void {
    this.router.navigate(['chat', user.id], {state: {user}});
  }
}
