import { ChatRoom } from './../models/chat-room.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomManagementService {
  chatRooms: ChatRoom[] = [
    {
      id: 'asf',
      name: 'Chat Room 1',
      users: [
        "agustinalberdi1@gmail.com",
        "agustinalberdi2@gmail.com",
      ],
      messages: [
        "Hola",
        "Adios"
      ],
      favorite: false
    },
    {
      id: 'asf',
      name: 'Chat Room 2',
      users: [
        "fakeuser1@gmail.com",
        "fakeuser2@gmail.com",
      ],
      messages: [
        "Hello",
        "Bye"
      ],
      favorite: false
    },
    {
      id: 'asf',
      name: 'Chat Room 3',
      users: [
        "randomuser1@gmail.com",
        "randomuser2@gmail.com",
      ],
      messages: [
        "Que tal?",
        "Bien y tu?"
      ],
      favorite: false
    }
  ];
  chatRooms$: BehaviorSubject<ChatRoom[]> = new BehaviorSubject(this.chatRooms);

  constructor() {}

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

  addChatRoomMessage(chatRoom: ChatRoom, message: string) {
    const index = this.chatRooms.indexOf(chatRoom);
    if (index > -1) {
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
