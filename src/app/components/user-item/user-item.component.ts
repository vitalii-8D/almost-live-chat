import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../models/user.model';
import {ChatBaseService} from '../../services/chat-base.service';
import {DataBaseService} from '../../services/data-base.service';
import {AuthService} from '../../services/auth.service';
import {IChat} from '../../models/chat.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})

export class UserItemComponent implements OnInit {
  @Input() withNoName: boolean;
  @Input() isSideUser: boolean;
  @Input() user: any;

  constructor(private dataService: DataBaseService,
              public authService: AuthService) {
  }

  ngOnInit(): void {
  }

}
