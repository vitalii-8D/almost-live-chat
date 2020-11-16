import {Component, HostListener} from '@angular/core';
import {DataBaseService} from './services/data-base.service';
import {AngularFirestore} from '@angular/fire/firestore';
import firebase from 'firebase';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private router: Router) {
  }

  // Reaction for back btn
  @HostListener('window:popstate', ['$event'])
  onPopState(event): void {
    this.router.navigate(['/chat']);
    console.log('Back button pressed');
  }

}
