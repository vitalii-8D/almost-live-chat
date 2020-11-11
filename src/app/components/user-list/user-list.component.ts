import {Component, OnInit} from '@angular/core';
import {IUser} from '../../models/user.model';
import {DataBaseService} from '../../services/data-base.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {StateService} from '../../services/state.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any;

  constructor(public dataService: DataBaseService,
              private authService: AuthService,
              private router: Router,
              public stateService: StateService) {
  }

  ngOnInit(): void {
    this.dataService.getMyChats(this.authService.authUser.id).subscribe(items => {
      this.stateService.chats = items;
    });
    /*this.dataService.getAllUsers().subscribe(items => {
      const users = items as any;

      for (const user of users) {
        this.dataService.getChatByUsers(user.id, this.authService.authUser.id).subscribe(item => {

          user.chat = item.find(fChat => {
            return fChat.members.includes(user.id)
              && fChat.members.includes(this.authService.authUser.id);
          });

          if (user.id === items[items.length - 1].id) {
            users.sort((a, b) => {
              const updatedA = a.chat?.updatedAt || 1;
              const updatedB = b.chat?.updatedAt || 1;

              return updatedB - updatedA;
            });
            this.users = users;
          }

        });
      }

    });*/
  }

  goToChat(user: IUser): void {
    this.router.navigate(['chat', user.id]);
    // this.router.navigate(['chat', user.id], {state: {user}});
  }
}
