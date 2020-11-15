import {Component, Input, OnInit} from '@angular/core';
import {IMessage, IUser} from '../../models/indes';
import {DataBaseService} from '../../services/data-base.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: IMessage;
  @Input() user: Partial<IUser>;

  constructor(public db: DataBaseService) {
  }

  ngOnInit(): void {
  }

}
