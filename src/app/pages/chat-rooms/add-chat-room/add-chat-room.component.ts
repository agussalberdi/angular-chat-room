import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-chat-room',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './add-chat-room.component.html',
  styleUrl: './add-chat-room.component.scss'
})
export class AddChatRoomComponent {
  visible = true;
  constructor(public dynamicDialogConfig: DynamicDialogConfig) {}
}
