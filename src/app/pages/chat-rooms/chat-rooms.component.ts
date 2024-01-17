import { ChatRoomManagementService } from './../../services/chat-room-management.service';
import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { SplitterModule } from 'primeng/splitter';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ChatComponent } from './chat/chat.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ChatRoom } from './../../models/chat-room.model';

@Component({
  selector: 'app-chat-rooms',
  standalone: true,
  imports: [AsyncPipe, SplitterModule, PanelModule, ButtonModule, ChatComponent, ConversationComponent],
  templateUrl: './chat-rooms.component.html',
  styleUrl: './chat-rooms.component.scss'
})
export class ChatRoomsComponent {
  readonly chatRooms$ = this.chatRoomManagementService.chatRooms$;
  chatRoomSelected: ChatRoom | undefined;

  constructor(private chatRoomManagementService: ChatRoomManagementService) {}

  onChatRoomSelected(chatRoom: ChatRoom) {
    this.chatRoomSelected = chatRoom;
  }

  addChatRoom() {
    console.log("add chat room");
  }

  filterByName() {
    console.log("filter by name");
  }
}
