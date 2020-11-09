import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {IChat} from '../models/chat.model';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {Observable} from 'rxjs';
import {IUser} from '../models/user.model';
import CollectionReference = firebase.firestore.CollectionReference;

@Injectable({
  providedIn: 'root'
})
export class ChatBaseService {
  authUser = {
    id: '22222',
    name: 'Віталій Шломенко',
    username: 'vitalikkeks',
    email: 'gotbubu0@gmail.com',
    status: 'online',
    avatar: 'https://via.placeholder.com/200/#B7B748/#B7B748?Text=Digital.com',
    chatRooms: ['88888', '99999'],
    isOnline: true,
    createdAt: '01.11.2020 8:00:00 AM UTC+2'
  };

  users: any;
  chats: IChat[];

  constructor(private firestore: AngularFirestore) {
  }

  getAllUsers(): Observable<IUser[]> {
    return this.firestore.collection('users').valueChanges();
  }

  getAllChats(): any {
    return this.firestore.collection('chats').valueChanges();
  }

  getUser(userId): Observable<IUser[]> {
    return this.firestore.collection('users', ref => ref.where('id', '==', userId)).valueChanges();
  }

  createUser(data): any {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('users')
        .add(data)
        .then(res => {
        }, err => reject(err));
    });
  }

  createChat(data): any {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('chats')
        .add(data)
        .then(res => {
        }, err => reject(err));
    });
  }

  test(): any {
    /*this.firestore.collection('users').doc('SF')
      .onSnapshot(function(doc) {
        var source = doc.metadata.hasPendingWrites ? 'Local' : 'Server';
        console.log(source, ' data: ', doc.data());
      });*/
  }
}
