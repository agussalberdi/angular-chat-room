import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextModule } from 'primeng/inputtext';
import { v4 as uuid } from 'uuid';
import { ChatRoomManagementService } from './../../../services/chat-room-management.service';

@Component({
  selector: 'app-add-chat-room',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, ChipsModule, ToggleButtonModule, InputTextModule],
  templateUrl: './add-chat-room.component.html',
  styleUrl: './add-chat-room.component.scss'
})
export class AddChatRoomComponent {
  addChatRoomForm!: FormGroup;

  constructor(public dynamicDialogRef: DynamicDialogRef, private fb: FormBuilder, private chatRoomManagementService: ChatRoomManagementService) {
    this.createForm();
  }

  createForm() {
    this.addChatRoomForm = this.fb.group({
      id: [uuid(), Validators.required],
      name: ['', Validators.required],
      users: ['', Validators.required, Validators.email],
      favorite: [false, Validators.required],
    })
  }

  addChatRoom() {
    this.dynamicDialogRef.close(this.addChatRoomForm.value);
  }
}
