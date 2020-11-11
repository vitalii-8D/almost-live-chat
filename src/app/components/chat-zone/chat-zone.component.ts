import {Component, OnInit} from '@angular/core';
import {ChatBaseService} from '../../services/chat-base.service';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {DataBaseService} from '../../services/data-base.service';

@Component({
  selector: 'app-chat-zone',
  templateUrl: './chat-zone.component.html',
  styleUrls: ['./chat-zone.component.scss']
})
export class ChatZoneComponent implements OnInit {
  user;
  // chat;

  constructor(private chatService: ChatBaseService,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private dataService: DataBaseService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const {user} = history.state;
      this.user = user;
      console.log('history.state');
      console.log(history.state);
    });
  }
}
