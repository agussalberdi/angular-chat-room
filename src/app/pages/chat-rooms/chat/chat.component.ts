import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessagesModule } from 'primeng/messages';
import { MenuItem, MessageService } from 'primeng/api';
import { ChatRoomManagementService } from './../../../services/chat-room-management.service';
import { ChatRoom } from './../../../models/chat-room.model';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [SplitButtonModule, MessagesModule],
  providers: [MessageService],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  @Input() chatRoom!: ChatRoom;
  @Output() chatRoomSelected = new EventEmitter<ChatRoom>();
  items!: MenuItem[];

  constructor(private messageService: MessageService, private chatRoomManagementService: ChatRoomManagementService) {
    this.items = [
      {
        label: 'Favorite',
        icon: 'pi pi-fw pi-star',
        command: () => {
            this.chatRoom.favorite = !this.chatRoom.favorite;
            if (this.chatRoom.favorite) {
              this.messageService.add({ severity: 'success', summary: 'Favorite added', detail: this.chatRoom.name, life: 3000 });
            } else {
              this.messageService.add({ severity: 'danger', summary: 'Favorite removed', detail: this.chatRoom.name, life: 3000 });
            }
        }
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash',
        command: () => {
          this.chatRoomManagementService.deleteChatRoom(this.chatRoom);
          this.messageService.add({ severity: 'danger', summary: 'Chat room deleted', detail: this.chatRoom.name, life: 3000 });
        }
      },
    ];
  }

  onChatRoomSelected(chatRoom: ChatRoom) {
    this.chatRoomSelected.emit(chatRoom);
  }
}
