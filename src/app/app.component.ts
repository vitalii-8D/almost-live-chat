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
}
