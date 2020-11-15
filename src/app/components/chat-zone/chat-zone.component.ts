import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataBaseService} from '../../services/data-base.service';

@Component({
  selector: 'app-chat-zone',
  templateUrl: './chat-zone.component.html',
  styleUrls: ['./chat-zone.component.scss']
})
export class ChatZoneComponent implements OnInit {
  isLoading = true;
  user;
  // chat;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const {user, chat} = history.state;
      this.user = user;
      // this.chat = chat;

      this.isLoading = false;
    });
  }
}
