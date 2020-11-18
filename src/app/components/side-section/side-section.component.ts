import {Component, OnInit} from '@angular/core';
import {DataBaseService} from '../../services/data-base.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-section',
  templateUrl: './side-section.component.html',
  styleUrls: ['./side-section.component.scss']
})
export class SideSectionComponent implements OnInit {

  constructor(public db: DataBaseService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.removeItem('chat_user');
    // this.db.setUserStatus(this.db.authUser.id, 'offline');
    this.router.navigate(['/login']);
  }
}
