import {Component, Input, OnInit} from '@angular/core';
import {IMessage, IUser} from '../../models/indes';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: IMessage;
  @Input() user: Partial<IUser>;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

}
