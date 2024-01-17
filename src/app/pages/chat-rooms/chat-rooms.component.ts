import { Component, OnDestroy } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { SplitterModule } from 'primeng/splitter';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ChatComponent } from './chat/chat.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ChatRoom } from './../../models/chat-room.model';
import { FilterComponent } from './../../components/filter/filter.component';
import { ChatRoomManagementService } from './../../services/chat-room-management.service';

@Component({
  selector: 'app-chat-rooms',
  standalone: true,
  imports: [AsyncPipe, SplitterModule, PanelModule, ButtonModule, ChatComponent, ConversationComponent, FilterComponent],
  templateUrl: './chat-rooms.component.html',
  styleUrl: './chat-rooms.component.scss'
})
export class ChatRoomsComponent implements OnDestroy{
  private destroy$ = new Subject();
  chatRooms!: ChatRoom[];
  filteredChatRooms!: ChatRoom[];
  chatRoomSelected: ChatRoom | undefined;
  isFiltering = false;

  constructor(private chatRoomManagementService: ChatRoomManagementService) {
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
    console.log("add chat room");
  }

  toggleFilterMode() {
    this.isFiltering = !this.isFiltering;
  }

  onFilterChange(filteredData: any) {
    this.filteredChatRooms = filteredData;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
