import { ChatMenuDialogComponent } from './../chat-menu-dialog/chat-menu-dialog.component';
import { ChatRoom } from './../../../models/chat-room.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  providers: [DialogService, MessageService],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  @Input() chatRoom!: ChatRoom;
  @Output() chatRoomSelected = new EventEmitter<ChatRoom>();
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService, public messageService: MessageService) {}

  onChatRoomSelected(chatRoom: ChatRoom) {
    this.chatRoomSelected.emit(chatRoom);
  }

  openMenu(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    console.log("open menu for remove and favorites");
    this.ref = this.dialogService.open(ChatMenuDialogComponent, {
      position: 'top',
      width: '15rem',
      height: '15rem',
      contentStyle: { "max-height": "500px", "overflow": "auto", "padding-bottom": "50px" },
      baseZIndex: 10000,
      data: this.chatRoom
    });

    this.ref.onClose.subscribe((chatRoom: ChatRoom) => {
      if (chatRoom) {
          this.messageService.add({ severity: 'danger', summary: 'Chat removed', detail: chatRoom.name });
      }
  });
  }

}
