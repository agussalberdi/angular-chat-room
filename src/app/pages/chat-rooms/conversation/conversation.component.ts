import { ChatRoomManagementService } from './../../../services/chat-room-management.service';
import { ChatRoom } from './../../../models/chat-room.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss'
})
export class ConversationComponent {
  @Input() chatRoomSelected!: ChatRoom;

  constructor(private chatRoomManagementService: ChatRoomManagementService) {}

  updateChatRoomName() {
    this.chatRoomManagementService.updateChatRoomName(this.chatRoomSelected, 'New Chat Room Name');
  }
}
