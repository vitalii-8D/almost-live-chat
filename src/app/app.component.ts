import {Component, HostListener} from '@angular/core';
import {DataBaseService} from './services/data-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private db: DataBaseService) {
  }
  /*@HostListener('window:unload', [ '$event' ])
  unloadHandler(event): any {
    this.db.setUserStatus(this.db.authUser.id, 'offline');
  }

  @HostListener('window:beforeunload', [ '$event' ])
  beforeUnloadHandler(event: Event): any {
    this.db.setUserStatus(this.db.authUser.id, 'offline');
  }*/
  /*unloadHandler(event: Event): any {
    console.log(this.db.authUser);
    this.db.setUserStatus(this.db.authUser.id, 'offline');
  }*/
}
