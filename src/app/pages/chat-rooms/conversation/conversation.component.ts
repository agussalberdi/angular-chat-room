import { Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ChatRoomManagementService } from './../../../services/chat-room-management.service';
import { ChatRoom } from './../../../models/chat-room.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [FormsModule, InputTextModule],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss'
})
export class ConversationComponent {
  @Input() chatRoomSelected!: ChatRoom;
  message!: string;

  constructor(private chatRoomManagementService: ChatRoomManagementService) {}

  updateChatRoomName() {
    this.chatRoomManagementService.updateChatRoomName(this.chatRoomSelected, 'New Chat Room Name');
  }

  sendMessage() {
    this.chatRoomManagementService.addChatRoomMessage(this.chatRoomSelected, this.message);
    this.message = '';
  }
}
