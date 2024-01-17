import { ChatRoomManagementService } from './../../../services/chat-room-management.service';
import { ChatRoom } from './../../../models/chat-room.model';
import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-chat-menu-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './chat-menu-dialog.component.html',
  styleUrl: './chat-menu-dialog.component.scss'
})
export class ChatMenuDialogComponent {
  visible = true;
  currentChatRoom!: ChatRoom;

  constructor(public dynamicDialogConfig: DynamicDialogConfig, public dynamicDialogRef: DynamicDialogRef, private chatRoomManagementService: ChatRoomManagementService) {
    this.currentChatRoom = dynamicDialogConfig.data;
  }

  deleteChatRoom(chatRoom: ChatRoom) {
    this.chatRoomManagementService.deleteChatRoom(chatRoom);
    this.dynamicDialogRef.close(chatRoom);
    this.visible = false;
  }
}
