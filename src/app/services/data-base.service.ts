import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {IUser} from '../models/user.model';
import {Observable} from 'rxjs';
import {IChat, IMessage} from '../models/chat.model';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  authUser: Partial<IUser> = JSON.parse(localStorage.getItem('chat_user'));
  users: IUser[];
  chats: IChat[];

  isChatActive = false;
  searchString = '';

  activeChat: IChat;

  constructor(private firestore: AngularFirestore) {
  }

  getAllUsers(): Observable<IUser[]> {
    return this.firestore.collection('users').valueChanges()
      .pipe(tap(users => {
        this.users = users.filter((user: IUser) => {
          return user.id !== this.authUser.id;
        });
      }));
  }

  getMyChats(): Observable<IChat[]> {
    return this.firestore.collection('chats', ref => ref
      .where('members', 'array-contains', this.authUser.id))
      .valueChanges()
      .pipe(tap(chats => {
        this.chats = chats;
      }));
  }

  getChatById(chatId): Observable<IChat> {
    return this.firestore.collection('chats').doc(chatId).valueChanges();
  }

  addMessageToChat(chatId, newDialog, timestamp): void {
    this.firestore.collection('chats').doc(chatId).update({messages: newDialog, updatedAt: timestamp});
  }

  buildMessage(message): IMessage {
    return {
      user_id: this.authUser.id,
      createdAt: Date.now(),
      body: message
    };
  }

  getUserByParam(param, value): Observable<IUser[]> {
    return this.firestore.collection('users', ref => ref.where(param, '==', value)).valueChanges();
  }

  createUser(data): Promise<IUser> {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('users')
        .add(data)
        .then(res => {
          this.updateId(res.id, 'users');
          resolve({...data, id: res.id});
        }, err => reject(err));
    });
  }

  createChat(data): Promise<IChat> {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('chats')
        .add(data)
        .then(res => {
          this.updateId(res.id, 'chats');
          resolve({...data, id: res.id});
        }, err => reject(err));
    });
  }

  updateId(id, collection): Promise<void> {
    return this.firestore
      .collection(collection)
      .doc(id)
      .set({id}, {merge: true});
  }

  buildUser(name, username, password): Partial<IUser> {
    let bgColor = '';
    let fontColor = '';
    for (let i = 1; i <= 3; i++) {
      const random2 = Math.trunc(Math.random() * 255);
      bgColor += random2.toString(16);
      fontColor += (255 - random2).toString(16);
    }
    const avatar = `https://via.placeholder.com/250/${bgColor}/${fontColor}?text=${name}`;
    const createdAt = Date.now();

    return {
      name,
      username,
      password,
      status: 'online',
      chatRooms: [],
      avatar,
      createdAt
    };
  }

  buildChat(userId, dialog): Partial<IChat> {
    const members = [userId, this.authUser.id];
    const messages = dialog;
    const timestamp = Date.now();

    return {
      members,
      messages,
      createdAt: timestamp,
      updatedAt: timestamp
    };
  }

  /*this.firestore.collection('chats', ref => ref
      .where('id', '==', chatId))
      .snapshotChanges()
      .subscribe(chats => {
        const chat = chats[0];
        const data = chat.payload.doc.data() as IChat;
        const chatKey = chat.payload.doc.id;

        const newMesArr = data.messages;
        const newMessages = newMesArr.push(newMessage);

        this.firestore.collection('chats').doc(chatKey).update({messages: newMessages});
      });*/
}
