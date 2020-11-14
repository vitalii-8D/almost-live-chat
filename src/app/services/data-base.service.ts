import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {IUser} from '../models/user.model';
import {Observable} from 'rxjs';
import {IChat} from '../models/chat.model';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  authUser: Partial<IUser> = {
    avatar: 'https://via.placeholder.com/250/5ca174/a35e8b?text=29194',
    chatRooms: [88888, 99999],
    createdAt: 1603711846667,
    id: 29194,
    name: 'Vitalii Shlomenko',
    status: 'online',
    username: 'vitalikkeks',
  };
  users: IUser[];
  chats: IChat[];
  activeChatId: number;

  constructor(private firestore: AngularFirestore) {
  }

  getAllUsers(): Observable<IUser[]> {
    return this.firestore.collection('users').valueChanges()
      .pipe(tap(users => this.users = users));
  }

  getAllChats(): any {
    return this.firestore.collection('chats').valueChanges();
  }

  getUserByParam(param, value): any {
    return this.firestore.collection('users', ref => ref.where(param, '==', value)).valueChanges();
  }

  /*getChatByUser(userId): any {
    return this.firestore.collection('chats', ref => ref
      .where('members', 'in', [[this.authUser.id, userId]]))
      .valueChanges();
  }*/

  getMyChats(userId): Observable<IChat[]> {
    return this.firestore.collection('chats', ref => ref
      .where('members', 'array-contains', userId))
      .valueChanges()
      .pipe(tap(chats => this.chats = chats));
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

  buildUser(name, username, password, m = 1, h = 0, d = 0): IUser {
    const random = Math.random() * 100000;
    const id = Math.trunc(random);
    const status = Math.trunc(random / Math.random() * 127.3) % 2 === 0 ? 'offline' : 'online';

    let bgColor = '';
    let fontColor = '';
    for (let i = 1; i <= 3; i++) {
      const random2 = Math.trunc(Math.random() * 255);
      bgColor += random2.toString(16);
      fontColor += (255 - random2).toString(16);
    }
    const avatar = `https://via.placeholder.com/250/${bgColor}/${fontColor}?text=${id}`;

    const sustract = ((m * 60) + (h * 60 * 60) + (d * 24 * 60 * 60)) * 1000;
    const createdAt = new Date().getTime() - sustract;

    return {
      id,
      name,
      username,
      password,
      status,
      chatRooms: [],
      avatar,
      createdAt
    };
  }
}
