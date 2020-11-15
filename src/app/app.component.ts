import {Component} from '@angular/core';
import {DataBaseService} from './services/data-base.service';
import {AngularFirestore} from '@angular/fire/firestore';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'almost-live-chat';

  constructor() {
  }
}
