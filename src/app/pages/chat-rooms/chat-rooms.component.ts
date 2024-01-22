import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { Component, OnDestroy } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { SplitterModule } from 'primeng/splitter';
import { ButtonModule } from 'primeng/button';
import { ChatComponent } from './chat/chat.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ChatRoom } from './../../models/chat-room.model';
import { FilterComponent } from './../../components/filter/filter.component';
import { ChatRoomManagementService } from './../../services/chat-room-management.service';
import { AddChatRoomComponent } from './add-chat-room/add-chat-room.component';

@Component({
  selector: 'app-chat-rooms',
  standalone: true,
  imports: [AsyncPipe, SplitterModule, ButtonModule, ChatComponent, ConversationComponent, FilterComponent],
  providers: [DialogService],
  templateUrl: './chat-rooms.component.html',
  styleUrl: './chat-rooms.component.scss'
})
export class ChatRoomsComponent implements OnDestroy{
  private destroy$ = new Subject();
  chatRooms!: ChatRoom[];
  filteredChatRooms!: ChatRoom[];
  chatRoomSelected: ChatRoom | undefined;
  isFiltering = false;
  ref: DynamicDialogRef | undefined;

  constructor(private chatRoomManagementService: ChatRoomManagementService, public dialogService: DialogService) {
    this.chatRoomManagementService.getChatRooms()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: chatRooms => {
          this.chatRooms = chatRooms;
          this.filteredChatRooms = chatRooms;
        },
        error: err => console.log(err)
      });
  }

  onChatRoomSelected(chatRoom: ChatRoom) {
    this.chatRoomSelected = chatRoom;
  }

  addChatRoom() {
    this.ref = this.dialogService.open(AddChatRoomComponent, {
      width: '50vw',
      modal:true,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
      closeOnEscape: true,
      closable: true
    });
    this.ref.onClose.subscribe((chatRoom: ChatRoom) => {
      if (chatRoom) {
        this.chatRoomManagementService.addChatRoom(chatRoom);
      }
    });
  }

  toggleFilterMode() {
    this.isFiltering = !this.isFiltering;
  }

  exitFilterMode() {
    this.toggleFilterMode();
    this.filteredChatRooms = this.chatRooms;
  }

  onFilterChange(filteredData: any) {
    this.filteredChatRooms = filteredData;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
