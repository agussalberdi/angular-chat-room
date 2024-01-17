import { ChatRoom } from './../../models/chat-room.model';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, InputTextModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Input() data!: ChatRoom[];
  @Output() filteredData: EventEmitter<ChatRoom[]> = new EventEmitter();
  filter: string = '';

  onFilterChange(event: any) {
    if (event.length > 3) {
      const filtered = this.data.filter(item =>
          item.name.toLowerCase().includes(event.toLowerCase()) ||
          item.users.find(user => user.toLowerCase().includes(event.toLowerCase()))
      );
      this.filteredData.emit(filtered);
    } else {
        this.filteredData.emit(this.data);
    }
  }
}
