import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataBaseService} from '../../services/data-base.service';

@Component({
  selector: 'app-chat-zone',
  templateUrl: './chat-zone.component.html',
  styleUrls: ['./chat-zone.component.scss']
})
export class ChatZoneComponent implements OnInit {
  isLoading = true;
  user;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              public db: DataBaseService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const {user} = history.state;
      this.user = user;

      this.isLoading = false;
    });
  }

  goToUserList(): void {
    this.db.isChatActive = false;
    this.router.navigate(['chat']);
  }
}
