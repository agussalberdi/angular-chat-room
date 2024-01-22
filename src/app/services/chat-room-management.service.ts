import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { ChatRoom, Message } from './../models/chat-room.model';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomManagementService {
  chatRooms: ChatRoom[] = [
    {
      id: uuid(),
      name: 'Chat Room 1',
      users: [
        "agustinalberdi1@gmail.com",
        "agustinalberdi2@gmail.com",
      ],
      messages: [
        {
          id: uuid(),
          user: 'agustinalberdi1@gmail.com',
          text: 'Hello',
          date: new Date()
        },
        {
          id: uuid(),
          user: 'agustinalberdi2@gmail.com',
          text: 'Hi! How you doing?',
          date: new Date()
        }
      ],
      favorite: false
    },
    {
      id: uuid(),
      name: 'Chat Room 2',
      users: [
        "fakeuser1@gmail.com",
        "fakeuser2@gmail.com",
      ],
      messages: [
        {
          id: uuid(),
          user: 'fakeuser1@gmail.com',
          text: 'Hello',
          date: new Date()
        },
        {
          id: uuid(),
          user: 'fakeuser2@gmail.com',
          text: 'Bye',
          date: new Date()
        }
      ],
      favorite: false
    },
    {
      id: uuid(),
      name: 'Chat Room 3',
      users: [
        "randomuser1@gmail.com",
        "randomuser2@gmail.com",
      ],
      messages: [
        {
          id: uuid(),
          user: 'randomuser1@gmail.com',
          text: 'Ok sounds good!',
          date: new Date()
        },
        {
          id: uuid(),
          user: 'randomuser2@gmail.com',
          text: 'Awesome!',
          date: new Date()
        }
      ],
      favorite: false
    }
  ];
  private chatRooms$: BehaviorSubject<ChatRoom[]> = new BehaviorSubject(this.chatRooms);

  constructor() {}

  getChatRooms() {
    return this.chatRooms$;
  }

  addChatRoom(chatRoom: ChatRoom) {
    this.chatRooms.push(chatRoom);
    this.chatRooms$.next(this.chatRooms);
  }

  deleteChatRoom(chatRoom: ChatRoom) {
    const index = this.chatRooms.indexOf(chatRoom);
    if (index > -1) {
      this.chatRooms.splice(index, 1);
      this.chatRooms$.next(this.chatRooms);
    }
  }

  updateChatRoomName(chatRoom: ChatRoom, newName: string) {
    const index = this.chatRooms.indexOf(chatRoom);
    if (index > -1) {
      this.chatRooms[index].name = newName;
      this.chatRooms$.next(this.chatRooms);
    }
  }

  addChatRoomMessage(chatRoom: ChatRoom, message: Message) {
    const index = this.chatRooms.indexOf(chatRoom);
    if (index > -1) {
      if (!this.chatRooms[index].messages) {
        this.chatRooms[index].messages = [];
      }
      this.chatRooms[index].messages.push(message);
      this.chatRooms$.next(this.chatRooms);
    }
  }

  favoriteChatRoom(chatRoom: ChatRoom) {
    const index = this.chatRooms.indexOf(chatRoom);
    if (index > -1) {
      this.chatRooms[index].favorite = !this.chatRooms[index].favorite;
      this.chatRooms$.next(this.chatRooms);
    }
  }

}
